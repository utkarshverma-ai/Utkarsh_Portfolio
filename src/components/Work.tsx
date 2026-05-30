import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import canvasSync from "../assets/canvasSync.png";
import biteCheck from "../assets/biteCheck.png";
import zenTask from "../assets/zenTask.png";
import qavero from "../assets/image.png";

gsap.registerPlugin(useGSAP);

type Project = {
  name: string;
  category: string;
  tools: string;
  link: string;
  image: string;
};

const projects: Project[] = [
  {
    name: "CanvasSync",
    category: "Real-time collaborative whiteboard for 50+ concurrent users",
    tools: "React.js, Node.js, Socket.IO, WebSockets, MongoDB, Express.js",
    link: "https://canvasync-livid.vercel.app",
    image: canvasSync,
  },
  {
    name: "BiteCheck",
    category: "Search, scan & analyze food products with real nutritional data",
    tools: "React.js, Vite, Open Food Facts API, Context API, CSS Modules",
    link: "https://bitecheck-nine.vercel.app",
    image: biteCheck,
  },
  {
    name: "Zen Task Manager",
    category: "Full-stack task manager with auth, PostgreSQL & a clean UI",
    tools: "Next.js, TypeScript, Supabase, PostgreSQL, JWT Auth, Tailwind CSS",
    link: "https://zen-task-manager.vercel.app",
    image: zenTask,
  },
  {
    name: "Qavero",
    category: "AI-powered SaaS MVP studio for startups & founders (Ongoing)",
    tools: "Next.js, React, Node.js, Tailwind CSS, OpenAI API, PostgreSQL, Supabase, AWS, Stripe, Vercel",
    link: "https://qavero.vercel.app/",
    image: qavero,
  },
];

const Work = () => {
  useGSAP(() => {
    // Measure the horizontal scroll distance on demand. Computing this inside a
    // function (instead of once at mount) lets ScrollTrigger recalculate it on
    // every refresh, so the pin reserves the correct amount of vertical space.
    // A stale/too-small value is what let the TechStack section scroll up over
    // the still-pinned Work section.
    const getTranslateX = (): number => {
      const box = document.getElementsByClassName("work-box");
      if (!box.length) return 0;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      return rect.width * box.length - (rectLeft + parentWidth) + padding;
    };

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${getTranslateX()}`, // recomputed on every refresh
        scrub: true,
        pin: true,
        pinSpacing: true, // reserve vertical space so later sections flow below
        anticipatePin: 1,
        invalidateOnRefresh: true, // re-measure after fonts/images/resize settle
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: () => -getTranslateX(),
      ease: "none",
    });

    // Recalculate once everything (fonts, images) has finished loading.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    // Clean up
    return () => {
      window.removeEventListener("load", refresh);
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.name}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
