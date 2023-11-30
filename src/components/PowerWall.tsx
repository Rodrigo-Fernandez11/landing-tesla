import Image from "next/image";
import powerWall from "../../public/powerwall.webp";
import { LandingSection } from "./LandingSection";

export const PowerWall = () => {
  return (
    <LandingSection
      color="whith"
      textColor="black"
      title="POWERWALL"
      subtitle="Este es el Powerwall de Tesla"
      id="powerwall"
    >
      <Image
        src={powerWall}
        alt="producto Power Wall de Tesla"
        layout="fill"
        objectFit="cover"
      />
    </LandingSection>
  );
};