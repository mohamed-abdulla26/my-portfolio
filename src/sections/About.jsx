import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing scroll-mt-16" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 md:auto-rows-[18rem] md:grid-cols-6">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute -right-16 -top-2 w-[28rem] max-w-none scale-110 opacity-80 sm:-right-20 sm:w-[34rem] md:inset-y-10 md:left-50 md:w-auto md:scale-[3] lg:scale-[2.5]"
            alt="Developer workspace"
          />
          <div className="z-10">
            <p className="headtext">Hi, I&apos;m Mohamed Abdulla</p>
            <p className="subtext">
              Over the last year, I have developed my frontend and backend
              development skills, building dynamic web applications and
              contributing to software solutions that deliver seamless user
              experiences.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-3xl text-gray-500 sm:text-5xl">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GRASP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SRP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/react.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/javascript.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/tailwindcss.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="relative z-10 w-[58%] sm:w-1/2">
            <p className="headtext">Time Zone</p>
            <p className="subtext">Powered by coffee, available worldwide
               {/* I'm based in Mars, and open to remote work worldwide */}
            </p>
          </div>
          <figure className="absolute left-[24%] top-[18%] w-[23rem] sm:left-[30%] sm:top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="relative z-10 w-full sm:w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute -bottom-12 left-0 h-[17rem] w-full scale-75 sm:inset-y-0 sm:left-[50%] sm:h-full sm:scale-100 md:inset-y-9 md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
