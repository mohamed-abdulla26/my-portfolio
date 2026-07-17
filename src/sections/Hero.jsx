import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] scroll-mt-16 items-start justify-center overflow-hidden c-space md:justify-start"
    >
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100%", height: "100svh" }}
        aria-hidden="true"
      />
    </section>
  );
};

export default Hero;
