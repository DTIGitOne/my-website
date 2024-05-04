import React, { useRef, useEffect , useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isClosing, setIsClosing] = useState(false);

  const navigate = useNavigate();

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      toggleSidebar();
      setIsClosing(false);
    }, 700); // Adjust timeout to match animation duration
  };

  const handleMain = () => {
    handleClose();
    navigate("./Main");
  };

  const handlePortfolio = () => {
    handleClose();
    setTimeout(() => {
      navigate("/Portfolio");
    }, 700);
  };

  const handleProjects = () => {
    navigate("/Projects");
  };

  useEffect(() => {
    if (isOpen) {
      const focusableElement = document.querySelector(".btn");
      if (focusableElement) {
        focusableElement.focus();
      }
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <>
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
                <button className=" btn w-full h-24 relative sideElementAni" >
                  <button className="p-4 h-24 w-full text-left relative" onClick={handleMain}>Main</button>
                  <div className=" underline1 absolute bottom-0 left-0 w-full h-0.5 bg-black origin-left"  />
                </button>
                <button className=" btn w-full h-24 relative sideElementAni" >
                  <button className="p-4 h-24 w-full text-left relative" onClick={handlePortfolio}>Portfolio</button>
                  <div className=" underline1 absolute bottom-0 left-0 w-full h-0.5 bg-black origin-left"  />
                </button>
                <button className=" btn w-full h-24 relative sideElementAni" >
                  <button className="p-4 h-24 w-full text-left relative" onClick={handleProjects}>Projects</button>
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