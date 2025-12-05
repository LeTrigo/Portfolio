"use client";

import React, { createContext, useContext, useState, useCallback, useSyncExternalStore } from "react";
import { translations, Language, TranslationKey } from "@/data/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKey;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Create a simple store for language preference
function createLanguageStore() {
  let listeners: Array<() => void> = [];
  
  return {
    subscribe(listener: () => void) {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter((l) => l !== listener);
      };
    },
    getSnapshot(): Language {
      if (typeof window === "undefined") return "en";
      const saved = localStorage.getItem("language") as Language;
      return saved === "es" ? "es" : "en";
    },
    getServerSnapshot(): Language {
      return "en";
    },
    setLanguage(lang: Language) {
      localStorage.setItem("language", lang);
      listeners.forEach((listener) => listener());
    },
  };
}

const languageStore = createLanguageStore();

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const savedLanguage = useSyncExternalStore(
    languageStore.subscribe,
    languageStore.getSnapshot,
    languageStore.getServerSnapshot
  );
  
  const [language, setLanguageState] = useState<Language>(savedLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    languageStore.setLanguage(lang);
  }, []);

  // Sync with stored value on client
  const currentLanguage = typeof window !== "undefined" ? language : savedLanguage;

  return (
    <LanguageContext.Provider
      value={{
        language: currentLanguage,
        setLanguage,
        t: translations[currentLanguage],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
