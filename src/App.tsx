import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { PainPoints } from "./components/PainPoints";
import { CoreFlow } from "./components/CoreFlow";
import { FeaturePreview } from "./components/FeaturePreview";
import { SocialProof } from "./components/SocialProof";
import { FinalCTA } from "./components/FinalCTA";

function App() {
  return (
    <>
      <Nav />
      <main className="h-svh overflow-x-hidden overflow-y-auto scroll-smooth snap-y snap-mandatory scroll-pt-16">
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
