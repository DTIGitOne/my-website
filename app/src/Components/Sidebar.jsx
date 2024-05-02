import { useState , useEffect } from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {

   const handleClose = () => {
      toggleSidebar();
   };
  
   return (
      <>
         {isOpen && (
            <div id="backdrop" className="backdrop" onClick={handleClose}>
               <div className="sidebarAni w-1/5 h-screen flex flex-col top-0 left-0">
                  <div id="close" className="h-10 w-full bg-black"></div>
                  <div className="grow bg-white"></div>
               </div>
            </div>
         )}
      </>
   );
};

export default Sidebar;
