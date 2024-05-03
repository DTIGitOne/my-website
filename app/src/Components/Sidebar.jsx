import React, { useRef, useEffect , useState } from "react";
import Background from "./Background";
import LayoutBackground from "./LayoutBackground";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [gradientColor, setGradientColor] = useState(
    "linear-gradient(210deg , #93BAE8 , #EDADC9 , #B8B5DB )"
  );

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      toggleSidebar();
      setIsClosing(false);
    }, 700); // Adjust timeout to match animation duration
  };

  const handleMain = () => {
    setGradientColor(
      "linear-gradient(210deg , #93BAE8 , #EDADC9 , #B8B5DB )"
    );
  };

  const handlePortfolio = () => {
    setGradientColor(
      "linear-gradient(210deg , #4C4177, #2A5470 , #4C4177 )"
    );
  };

  const handleProjects = () => {
    setGradientColor("linear-gradient(230deg , #D8B5FF , #1EAE98 )");
  };

  return (
    <>
      {isOpen && (
        <>
          <LayoutBackground gradientColor={gradientColor}/>
          <div id="backdrop" className={`backdrop ${isClosing ? "closing2" : ""}`} onClick={handleClose}>
            <div id="sidebar" className={`sidebarAni w-1/5 h-screen flex flex-col top-0 left-0 ${isClosing ? "closing" : ""}`}>
              <div id="close" className="h-14 w-full flex justify-end items-center p-1 pr-3 bg-black">
                <svg id="closeSVG" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.55 60.7">
                  <g id="Icons">
                    <polygon className="cls-3" points="33.88 30.38 60.5 57 57 60.5 30.38 33.88 3.55 60.7 .05 57.2 26.88 30.38 0 3.5 3.5 0 30.38 26.88 57.05 .2 60.55 3.7 33.88 30.38"/>
                  </g>
                </svg>
              </div>
              <div id="sideBox" className=" gap-2 grow flex flex-col items-start justify-center bg-white font-thin text-5xl overflow-hidden">
                <button className=" btn w-full h-24 relative sideElementAni" onClick={handleMain}>
                  <button className="p-4 h-24 w-full text-left relative">Main</button>
                  <div className=" underline1 absolute bottom-0 left-0 w-full h-0.5 bg-black origin-left"  />
                </button>
                <button className=" btn w-full h-24 relative sideElementAni" onClick={handlePortfolio}>
                  <button className="p-4 h-24 w-full text-left relative">Portfolio</button>
                  <div className=" underline1 absolute bottom-0 left-0 w-full h-0.5 bg-black origin-left"  />
                </button>
                <button className=" btn w-full h-24 relative sideElementAni" onClick={handleProjects}>
                  <button className="p-4 h-24 w-full text-left relative">Projects</button>
                  <div className=" underline1 absolute bottom-0 left-0 w-full h-0.5 bg-black origin-left"  />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;