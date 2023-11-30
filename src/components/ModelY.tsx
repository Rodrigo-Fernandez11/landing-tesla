import Image from "next/image";
import teslaY from "../../public/model-y.webp";
import { LandingSection } from "./LandingSection";

export const ModelY: React.FC = () => {
  return (
    <LandingSection
      color="whith"
      textColor="black"
      title="MODEL Y"
      subtitle="Este es el modelo Y de Tesla"
    >
      <Image src={teslaY} alt="tesla xy" layout="fill" objectFit="cover" />
    </LandingSection>
  );
};