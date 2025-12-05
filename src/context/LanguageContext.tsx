"use client";

import React, { createContext, useContext, useCallback, useSyncExternalStore } from "react";
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
let listeners: Array<() => void> = [];

function subscribe(listener: () => void) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function getSnapshot(): Language {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem("language") as Language;
  return saved === "es" ? "es" : "en";
}

function getServerSnapshot(): Language {
  return "en";
}

function setLanguageInStore(lang: Language) {
  localStorage.setItem("language", lang);
  listeners.forEach((listener) => listener());
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const setLanguage = useCallback((lang: Language) => {
    setLanguageInStore(lang);
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
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
