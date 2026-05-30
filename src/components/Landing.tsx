import { PropsWithChildren } from "react";
import { MdArrowOutward } from "react-icons/md";
import "./styles/Landing.css";
import HoverLinks from "./HoverLinks";
import { smoother } from "./Navbar";

const Landing = ({ children }: PropsWithChildren) => {
  // Mirror the navbar link behaviour: on desktop use ScrollSmoother, otherwise
  // fall back to the native anchor jump.
  const handleScrollTo =
    (section: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (window.innerWidth > 1024 && smoother) {
        e.preventDefault();
        smoother.scrollTo(section, true, "top top");
      }
    };

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              UTKARSH
              <br />
              <span>VERMA</span>
            </h1>
            <div className="landing-cta">
              <a
                href="#work"
                data-cursor="disable"
                onClick={handleScrollTo("#work")}
              >
                <HoverLinks text="VIEW MY WORK" />
                <MdArrowOutward />
              </a>
              <a
                href="#contact"
                data-cursor="disable"
                onClick={handleScrollTo("#contact")}
              >
                <HoverLinks text="CONTACT ME" />
                <MdArrowOutward />
              </a>
            </div>
          </div>
          <div className="landing-info">
            <h3>A Full Stack</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Developer</div>
              <div className="landing-h2-2">Engineer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Developer</div>
              <div className="landing-h2-info-1">Engineer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
