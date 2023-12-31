import { LandingSection } from "./LandingSection";
import accessorie from "../../public/accessories.webp";
import Image from "next/image";
import { FooterMenu } from "./FooterMenu";

export const Accessories = () => {
  return (
    <LandingSection
      id="accessories"
      color="white"
      textColor="black"
      title="Accesories"
      subtitle="Accesorios de Tesla"
    >
      <Image
        src={accessorie}
        alt="accessorios de tesla"
        layout="fill"
        objectFit="cover"
      />
      <FooterMenu />
    </LandingSection>
  );
};
