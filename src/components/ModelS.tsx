import Image from "next/image";
import modelS from "../../public/model-s.webp";
import { LandingSection } from "./LandingSection";

export const ModelS: React.FC = () => {
  return (
    <LandingSection
      color="whith"
      textColor="black"
      title="Modelo S"
      subtitle="Este es el modelo S de Tesla"
      id="models"
    >
      <Image
        src={modelS}
        alt="auto modelo S de tesla"
        layout="fill"
        objectFit="cover"
      />
    </LandingSection>
  );
};