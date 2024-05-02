import { useRef, useEffect } from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const handleClose = () => {
    toggleSidebar();
  };

  return (
    <>
      {isOpen && (
        <div id="backdrop" className="backdrop">
          <div className="sidebarAni w-1/5 h-screen flex flex-col top-0 left-0">
            <div id="close" className="h-14 w-full flex justify-end items-center p-1 pr-3 bg-black">
              <svg id="closeSVG" onClick={handleClose} data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.55 60.7">
                <g id="Icons">
                  <polygon className="cls-3" points="33.88 30.38 60.5 57 57 60.5 30.38 33.88 3.55 60.7 .05 57.2 26.88 30.38 0 3.5 3.5 0 30.38 26.88 57.05 .2 60.55 3.7 33.88 30.38"/>
                </g>
              </svg>
            </div>
            <div id="sideBox" className=" gap-2 grow flex flex-col items-start justify-center bg-white font-thin text-5xl overflow-hidden">
              <button className=" btn w-full h-24 relative sideElementAni" onClick={handleClose}>
                <button className="p-4 h-24 w-full text-left relative">Main</button>
                <div className=" underline1 absolute bottom-0 left-0 w-full h-0.5 bg-black origin-left"  />
              </button>
              <button className=" btn w-full h-24 relative sideElementAni" onClick={handleClose}>
                <button className="p-4 h-24 w-full text-left relative">Portfolio</button>
                <div className=" underline1 absolute bottom-0 left-0 w-full h-0.5 bg-black origin-left"  />
              </button>
              <button className=" btn w-full h-24 relative sideElementAni" onClick={handleClose}>
                <button className="p-4 h-24 w-full text-left relative">Projects</button>
                <div className=" underline1 absolute bottom-0 left-0 w-full h-0.5 bg-black origin-left"  />
              </button>
            </div>
          </div>
          <div className="w-4/5 h-full" onClick={handleClose}></div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
