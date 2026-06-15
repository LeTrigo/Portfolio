import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Cybersecurity from "@/components/Cybersecurity";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Cybersecurity />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
