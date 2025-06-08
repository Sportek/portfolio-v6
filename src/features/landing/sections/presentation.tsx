import RotatingText from "@/features/shared/components/blocks/TextAnimations/RotatingText/RotatingText";
import { Button } from "@/features/shared/components/ui/button";
import HorizontalSpacing from "@/features/shared/components/ui/horizontal-spacing";
import Link from "next/link";
import BlueCloud from "../components/blue-cloud";
import BlueSphereBlurr from "../components/blue-sphere-blurr";
import GreenStar from "../components/green-star";
import MagentaSphere from "../components/magenta-sphere";
import OrangeCloud from "../components/orange-cloud";
import OrangeSphereBlurr from "../components/orange-sphere-blurr";
import RedSphereBlurr from "../components/red-sphere-blurr";

const Presentation = () => {
  return (
    <div className="relative h-screen w-full overflow-clip">
      <HorizontalSpacing className="h-full">
        <div className="relative w-full h-full flex flex-col justify-center z-10">
          <div className="flex flex-col gap-4 flex-grow justify-center items-center">
            <h1 className="text-5xl font-bold">
              BONJOUR! JE SUIS <span className="text-blue-400">GABRIEL</span>
            </h1>
            <div>
              <RotatingText
                texts={[
                  { text: "Étudiant en Génie Logiciel @ Polytechnique Montréal", className: "text-purple-400" },
                  { text: "Développeur Full Stack @ Hadaly", className: "text-green-400" },
                  { text: "Passionné par la réalisation de projets", className: "text-orange-400" },
                ]}
                mainClassName="text-2xl sm:text-2xl md:text-3xl font-semibold"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1 sm:pb-2 md:pb-2"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={5000}
              />
            </div>
          </div>
          <div className="h-[30%] w-full flex justify-center items-center">
            <Button size="lg" className="text-lg font-bold" asChild>
              <Link href="#contact">CONTACTEZ-MOI</Link>
            </Button>
          </div>
        </div>
      </HorizontalSpacing>
      <div className="absolute top-0 left-0 h-full w-full z-0">
        <BlueCloud className="absolute bottom-0 left-0 w-[40%] sm:w-[30%] lg:w-[20%] h-fit" />
        <OrangeCloud className="absolute left-0 top-0 w-[45%] sm:w-[35%] lg:w-[25%] h-fit" />
        <GreenStar className="absolute right-0 top-0 w-[40%] sm:w-[35%] lg:w-[25%] z-10 h-fit" />
        <MagentaSphere className="absolute right-[5%] sm:right-[15%] bottom-5 w-[30%] sm:w-[8%] lg:w-[10%] h-fit" />
        <BlueSphereBlurr className="absolute left-0 sm:right-[15%] top-[25%] w-[30%] lg:w-[20%]" />
        <OrangeSphereBlurr className="absolute right-[10%] top-[-80%] md:max-w-[40%] max-w-[30%] w-full" />
        <RedSphereBlurr className="absolute h-[40%] w-[40%] bottom-0 left-[20%]" />
      </div>
    </div>
  );
};

export default Presentation;
