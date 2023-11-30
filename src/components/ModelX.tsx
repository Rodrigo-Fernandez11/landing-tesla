import Image from "next/image";
import modelx from "../../public/model-x.webp";
import { LandingSection } from "./LandingSection";

export const ModelX = () => {
  return (
    <LandingSection
      color="whith"
      textColor="black"
      title="MODEL X"
      subtitle="Este es el modelo X de Tesla"
      id="modelx"
    >
      <Image src={modelx} alt="auto tesla x" layout="fill" objectFit="cover" />
    </LandingSection>
  );
};