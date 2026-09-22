import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import AsmField from "./components/AsmField";
import Habitat from "./components/Habitat";
import Overview from "./components/Overview";
import Disasm from "./components/Disasm";
import Memory from "./components/Memory";
import Engine from "./components/Engine";
import Debugger from "./components/Debugger";
import Why from "./components/Why";
import Quickstart from "./components/Quickstart";
import { Cta, Footer, StarBand } from "./components/Closing";
import Toaster from "./components/Toaster";

/** Fade elements in once, on first approach. */
function useReveal(): void {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function App() {
  useReveal();

  return (
    <>
      <div className="page-grid" aria-hidden="true" />
      <AsmField />
      <div className="page-scan" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Habitat />
        <Overview />
        <Disasm />
        <Memory />
        <Engine />
        <Debugger />
        <Why />
        <Quickstart />
        <StarBand />
        <Cta />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
