import Image from "next/image";
import teslaY from "../../public/model-y.webp";
import { LandingSection } from "./LandingSection";

export const ModelY = () => {
  return (
    <LandingSection
      color="whith"
      textColor="black"
      title="MODEL Y"
      subtitle="Este es el modelo Y de Tesla"
      id="modely"
    >
      <Image
       src={teslaY} 
       alt="tesla xy" 
       layout="fill" 
       objectFit="cover" />
    </LandingSection>
  );
};