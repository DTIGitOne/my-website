import Rotatephoneicon from "../SVGs/RotatePhone";
import { useRef , useState , useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import { scrollTo } from '../Constants/Constants';
import { useNavigate } from "react-router-dom";
import CaraouselMenu from '../Components/CaraouselMenu';

const Projects = () => {
   const [sidebarOpen, setSidebarOpen] = useState(false);
   const section1 = useRef();
   const section2 = useRef();
   const divRef = useRef(null);

   const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
   };

   const navigate = useNavigate();

   useEffect(() => {
      // Run this effect only on the Main page
      if (isProjectsPage()) {
         
      }
   }, []);

   if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

   const isProjectsPage = () => {
      const pathname = window.location.pathname;
     
      const isProjects = pathname.includes("/Projects");
      
      if (isProjects) {
         window.scrollTo(0, 0);
         
         // Remove loading element after initial loading
         setTimeout(() => {
            let loadInPage = document.getElementById("loadInPage");
            if (loadInPage) {
               loadInPage.style.display = "none";
            }
         }, 200);
         
         setTimeout(() => {
            let pageElements = document.getElementById("pageElements");
            if (pageElements) {
               pageElements.className = "flex flex-col z-30 justify-center items-center";
               document.body.style.overflow = "visible";
               divRef.current.focus();
            }
         }, 300);
      }
   };

   const handleMain = () => {
      const mainDrop = document.querySelector(".mainDrop");
      const pageElements = document.getElementById("pageElements");
  
      if (window.location.pathname.includes("/Portfolio")) {
        pageElements.style.opacity = 0;
      } 
  
      if (window.location.pathname.includes("/Projects")) {
        pageElements.style.opacity = 0;
      } 
  
      mainDrop.style.opacity = 1;
  
      setTimeout(() => {
        navigate("/Main");
      }, 700);
    };
  
    const handlePortfolio = () => {
      const portfolioDrop = document.querySelector(".portfolioDrop");
      const pageElements = document.getElementById("pageElements");
  
      if (window.location.pathname.includes("/Main")) {
        pageElements.style.opacity = 0;
      } 
  
      if (window.location.pathname.includes("/Projects")) {
        pageElements.style.opacity = 0;
      } 
  
      portfolioDrop.style.opacity = 1;
  
      setTimeout(() => {
        navigate("/Portfolio");
      }, 700);
    };

    const handleSectionClick = (sectionRef) => {
      scrollTo(sectionRef);
   };

   return (
      <div id="wholePage3" className=" h-full w-full z-30">
         <div id='mediaForPotrait'><Rotatephoneicon /></div>
         <div id="allItems2">
         <div className="mainDrop"></div>
          <div className='portfolioDrop' ></div>
          <div className='projectsDrop' ></div>
         <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
         <div id="pageElements" className=" pageElements hidden h-full w-full ">
            <div id='logoBox' className=' z-40 h-28 w-full p-5 fixed left-0 top-0 flex '>
               <svg id="menuLogo" onClick={toggleSidebar} className=" z-30 h-16 w-16" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.25 80.2">
                  <g id="Icons">
                    <path class="cls-2" d="m42.16,24.18l-3.24-.46,3.24-7.76c0-3.29,7.32-4.7,11.51,4.93-3.29-8.22-11.51-14.8-13.88-6.68l-3.59,9.11-2.22-.31,4.88-11.99c3.59-11.63,10.33-12.04,16.45-6.58-6.58-6.58-12.27-6.15-16.45,3.29l-6.23,15.08-13.5-1.92c-26.31-4.93-21.66,5.18-6.58,21.38C2.69,29.11-7.18,19.24,19.13,22.53l12.84,1.84-12.84,31.05c-3.29,6.58-4.93,1.64-9.87-4.93,3.57,8.24,8.22,13.16,11.51,4.93l12.58-30.85,2.24.31-14.08,35.85-8.96,1.27c-4.65.72-7.52,2.3-9.06,4.21,1.99-1.17,4.93-2.09,9.06-2.57l8.32-1.28-5.03,12.8c-6.43,9.01-17.89-2.12-12.35-8.95-11.5,6.78,8.6,21.81,14,8.95l5.46-13.11,10.99-1.69c32.89-3.29,50.98-31.25,8.22-36.18Zm-8.29,34.82l-10.25,1.45,14.65-35.18,3.88.56c39.47,3.29,24.67,29.6-8.29,33.17Z"/>
                  </g>
               </svg>
            </div>
            <div tabIndex={0} ref={divRef} id='scrollContainer' className='scrollContainer z-30 w-full'>
               <div id="logoTop" className=""></div>
               
               <div ref={section1} id="welcomePageProjects" className="full-screen-section flex flex-col font-thin text-white text-8xl z-30">
                  <div className=' elementHeight w-full flex justify-center items-center select-none'>Projects</div>
                  <div className=' scrollHeight w-full flex justify-center'>
                      <button id="goDownButton" onClick={() => scrollTo(section2)} className='flex flex-col gap-2 p-1 items-center select-none'>
                         <span className=' text-3xl'>more info</span>
                         <svg id='downIcon' xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 266.77"><path id='iconClick' fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>
                      </button>
                  </div>
               </div>
                    
               <div ref={section2} id="aboutMe" className="full-screen-section flex flex-col font-thin text-white text-8xl z-30">
               <div id="fillElement" className=' h-48 w-full'></div>
                  <div className=' animate-on-scroll elementHeight w-full flex justify-center select-none'>
                     <div id="ProjectsMainBox">
                       <CaraouselMenu />
                       <div id='projectBoxBottom'></div>
                     </div>
                  </div>
               </div>

               <div id='pageContent' className=' full-screen-section2 h-56 w-full bg-white flex'>
                  <div className=' h-full w-1/3 flex select-none'>
                     <div className=' h-full w-1/2 flex flex-col gap-2 p-8'>
                        Pages:
                        <ul id='elemetsPage'>
                           <li className=' cursor-pointer' onClick={handleMain}>- Home</li>
                           <li className=' cursor-pointer' onClick={() => handleSectionClick(section1)}>- Projects</li>
                           <li className=' cursor-pointer' onClick={handlePortfolio}>- Portfolio</li>
                        </ul>
                     </div>
                     <div className=' h-full w-1/2 flex flex-col gap-2 pt-8'>
                     Content:
                        <ul id='elemetsPage2'>
                           <li className=' cursor-pointer' onClick={() => handleSectionClick(section1)}>- Welcome</li>
                           <li className=' cursor-pointer' onClick={() => handleSectionClick(section2)}>- My Projects</li>
                        </ul>
                     </div>
                  </div>
                  <div className=' h-full w-1/3 flex justify-center items-end text-4xl pb-2'>
                     Made by Damir
                  </div>
                  <div className=' h-full w-1/3 flex flex-col'>
                     <div className=' h-1/2 w-full flex justify-end items-center p-8'>
                        Contact: <br/>
                        dammirtaljanovic@gmail.com
                     </div>
                     <div className=' h-1/2 w-full flex justify-end items-end pr-8 pb-4 select-none'>
                      &copy; Copyright
                     </div>
                  </div>
               </div>

            </div>
         </div>
         </div>
      </div>
   );

}

export default Projects;