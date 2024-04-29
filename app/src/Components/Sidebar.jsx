import { useState } from "react";

const Sidebar = ({ isOpen }) => {
   const [open, setOpen] = useState(isOpen);
   
   const handleClose = () => {
      setOpen(false);
   }

   return (
      <>
         {isOpen ? (
           <div id="backdrop" className="backdrop" onClick={handleClose}>
             <div className=" sidebarAni w-1/5 h-screen flex flex-col top-0 left-0">
               <div className="h-10 w-full bg-black"></div>
               <div className="grow bg-white"></div>
             </div>
           </div>
         ) : null}
      </>
   );
};

export default Sidebar;
