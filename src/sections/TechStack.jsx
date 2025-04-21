import React from "react";
import { TitleHeader } from "../components/TitleHeader";
import { techStackIcons } from "../constants";
import TechIcon from "../components/models/techLogos/TechIcon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding mb-20">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title={"Me Preffered Tech stack"}
          subtitle={"🤝 Skills I Bring to the Table"}
        />
        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <div
              className="card-border tech-card relative overflow-hidden group xl:rounded-full rounded-lg"
              key={icon.name}
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} />
                </div>
                <div className="w-full padding-x">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
