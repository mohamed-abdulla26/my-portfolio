import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "Next.js.png",
    // "auth0",
    "javascript.svg",
    // "blazor",
    "vitejs.svg",
    // "cplusplus",
    "git.svg",
    // "csharp",
    "css3.svg",
    // "dotnet",
    "Java.png",
    // "dotnetcore",

    "html5.svg",

    // "microsoft",
    "react.svg",
    // "sqlite",
    "tailwindcss.svg",

    // "wordpress",

    "TypeScript.png",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
