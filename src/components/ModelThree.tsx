import Image from "next/image";
import model3 from "../../public/model-3.webp";
import { LandingSection } from "./LandingSection";

export const ModelThree = () => {
  return (
    <LandingSection
      color="black"
      textColor="whith"
      title="Model Three"
      subtitle="este es modelo three de tesla"
      id="model3"
    >
      <div>
        <Image
          src={model3}
          alt="auto modelo 3 de tesla"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </LandingSection>
  );
};