import { HeroSection } from "@/components/HeroSection";
import { LandingHeader } from "@/components/LandingHeader";
import { ModelY } from "@/components/ModelY";
import { ModelThree } from "@/components/ModelThree";
import { ModelS } from "@/components/ModelS";
import { ModelX } from "@/components/ModelX";
import { PowerWall } from "@/components/PowerWall";
import { Accessories } from "@/components/Accessories";

export default function Home() {
  return (
    <>
      <LandingHeader />

      <main className="snap-y snap-mandatory relative w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth">
        <div className="snap-center">
          <HeroSection />
        </div>
        <div className="snap-center">
          <ModelY />
        </div>
        <div className="snap-center">
          <ModelThree />
        </div>
        <div className="snap-center">
          <ModelS />
        </div>
        <div className="snap-center">
          <ModelX />
        </div>
        <div className="snap-center">
          <PowerWall />
        </div>
        <div className="snap-center">
          <Accessories />
        </div>
      </main>
    </>
  );
}
