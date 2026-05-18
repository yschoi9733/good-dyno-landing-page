import { useEffect } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { PainPoints } from "./components/PainPoints";
import { CoreFlow } from "./components/CoreFlow";
import { FeaturePreview } from "./components/FeaturePreview";
import { SocialProof } from "./components/SocialProof";
import { FinalCTA } from "./components/FinalCTA";

function App() {
  useEffect(() => {
    const mainEl = document.querySelector("main") as HTMLElement;
    const sections = Array.from(mainEl.querySelectorAll("section")).slice(1);
    sections.forEach((el) => el.classList.add("will-animate"));

    let observer: IntersectionObserver;

    const createObserver = () => {
      observer?.disconnect();
      const isDesktop = window.innerWidth >= 768;
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              observer.unobserve(entry.target);
            }
          });
        },
        { root: isDesktop ? mainEl : null, rootMargin: isDesktop ? "0px 0px -60px 0px" : "0px", threshold: 0.08 }
      );
      sections
        .filter((el) => !el.classList.contains("in-view"))
        .forEach((el) => observer.observe(el));
    };

    createObserver();
    window.addEventListener("resize", createObserver);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", createObserver);
    };
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PainPoints />
        <CoreFlow />
        <FeaturePreview />
        <SocialProof />
        <FinalCTA />
      </main>
    </>
  );
}

export default App;
