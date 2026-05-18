import { Hero } from "./components/Hero";
import { PainPoints } from "./components/PainPoints";
import { CoreFlow } from "./components/CoreFlow";
import { FeaturePreview } from "./components/FeaturePreview";
import { SocialProof } from "./components/SocialProof";
import { FinalCTA } from "./components/FinalCTA";

function App() {
  return (
    <main className="h-svh snap-y snap-mandatory overflow-x-hidden overflow-y-auto scroll-smooth">
      <Hero />
      <PainPoints />
      <CoreFlow />
      <FeaturePreview />
      <SocialProof />
      <FinalCTA />
    </main>
  );
}

export default App;
