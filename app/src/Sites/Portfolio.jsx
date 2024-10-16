import Githubicon2 from "../SVGs/GithubIcon2";
import Rotatephoneicon from "../SVGs/RotatePhone";
import { useRef , useState , useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import { scrollTo } from '../Constants/Constants';
import { openURLInNewWindow } from '../Constants/Constants';
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
   const [sidebarOpen, setSidebarOpen] = useState(false);
   const section1 = useRef();
   const section2 = useRef();
   const divRef = useRef(null);

   const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
   };

   useEffect(() => {
      // Run this effect only on the Main page
      if (isPortfolioPage()) {
         
      }
   }, []);

   if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handleSectionClick = (sectionRef) => {
      scrollTo(sectionRef);
   };

   const isPortfolioPage = () => {
      const pathname = window.location.pathname;
     
      const isPortfolio = pathname.includes("/Portfolio");
      
      if (isPortfolio) {
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

   const navigate = useNavigate();

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
  
    const handleProjects = () => {
      const projectsDrop = document.querySelector(".projectsDrop");
      const pageElements = document.getElementById("pageElements");
  
      if (window.location.pathname.includes("/Main")) {
        pageElements.style.opacity = 0;
      } 
  
      if (window.location.pathname.includes("/Portfolio")) {
        pageElements.style.opacity = 0;
      } 
  
      projectsDrop.style.opacity = 1;
  
      setTimeout(() => {
        navigate("/Projects");
      }, 700);
    };

   return (
      <div id="wholePage2" className=" h-full w-full z-30">
          <div id='mediaForPotrait'><Rotatephoneicon /></div>
         <div id="allItems2">
         <div className="mainDrop"></div>
          <div className='portfolioDrop' ></div>
          <div className='projectsDrop' ></div>
         <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
         <div id="pageElements" className=" pageElements hidden h-full w-full ">
            <div id='logoBox' className=' z-40 h-28 w-full p-5 fixed left-0 top-0 flex '>
               <svg id="menuLogo" onClick={toggleSidebar} className=" z-30 h-16 w-16" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.25 80.2">
                    <path class="cls-2" d="m42.16,24.18l-3.24-.46,3.24-7.76c0-3.29,7.32-4.7,11.51,4.93-3.29-8.22-11.51-14.8-13.88-6.68l-3.59,9.11-2.22-.31,4.88-11.99c3.59-11.63,10.33-12.04,16.45-6.58-6.58-6.58-12.27-6.15-16.45,3.29l-6.23,15.08-13.5-1.92c-26.31-4.93-21.66,5.18-6.58,21.38C2.69,29.11-7.18,19.24,19.13,22.53l12.84,1.84-12.84,31.05c-3.29,6.58-4.93,1.64-9.87-4.93,3.57,8.24,8.22,13.16,11.51,4.93l12.58-30.85,2.24.31-14.08,35.85-8.96,1.27c-4.65.72-7.52,2.3-9.06,4.21,1.99-1.17,4.93-2.09,9.06-2.57l8.32-1.28-5.03,12.8c-6.43,9.01-17.89-2.12-12.35-8.95-11.5,6.78,8.6,21.81,14,8.95l5.46-13.11,10.99-1.69c32.89-3.29,50.98-31.25,8.22-36.18Zm-8.29,34.82l-10.25,1.45,14.65-35.18,3.88.56c39.47,3.29,24.67,29.6-8.29,33.17Z"/>
               </svg>
            </div>
            <div tabIndex={0} ref={divRef} id='scrollContainer' className='scrollContainer z-30 w-full'>
               <div id="logoTop" className=""></div>
               
               <div ref={section1} id="welcomePagePortfolio" className="full-screen-section flex flex-col font-thin text-white text-8xl z-30">
                  <div className=' elementHeight w-full flex justify-center items-center select-none'>My Portfolio</div>
                  <div className=' scrollHeight w-full flex justify-center'>
                      <button id="goDownButton" onClick={() => scrollTo(section2)} className='flex flex-col gap-2 p-1 items-center select-none'>
                         <span className=' text-3xl'>more info</span>
                         <svg id='downIcon' xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 266.77"><path id='iconClick' fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>
                      </button>
                  </div>
               </div>
                    
               <div ref={section2} id="aboutMe" className="full-screen-section flex flex-col font-thin text-white text-8xl z-30">
               <div className=' h-20 w-full'></div>
                  <div className=' elementHeight w-full flex justify-center items-center select-none flex flex-col'>
                     <div className=" h-1/2 w-full flex justify-center items-center">
                        <div id="portfolioTextBox">
                          <span id="portLetter" className=" font-light">I</span>nside my portfolio, I've compiled a file that tracks my progress from the inception of my programming journey to the latest project uploaded onto my portfolio. Not all projects showcased here are completed to 100%, 
                          and I deliberately refrained from revisiting them, despite knowing how to do so. 
                          I chose to leave them in their current state to document my progression throughout my learning process.
                           Within this file, I've included a link to my GitHub repository, where all my projects are stored and organized chronologically. 
                           I opted not to add the projects directly to this website for the sake of accessibility and readability. 
                           This decision ensures that visitors can easily navigate and view my projects without spending excessive time searching through them.
                        </div>
                     </div>
                     <div className=" h-1/2 w-full flex flex-col justify-center items-center">
                        <span id="PortTextBox" className=" w-full h-1/2 flex flex-col items-center justify-center gap-2">
                           <div id="portfolioHeadingBottom">Portfolio</div>
                           <div id="portfolioHeadingLine"></div>
                        </span>
                        <span className=" w-full h-1/2 flex flex-col items-center justify-start text-4xl">
                           <span className=" w-auto h-auto flex flex-col items-center gap-3 cursor-pointer" onClick={() => openURLInNewWindow("https://github.com/stars/DTIGitOne/lists/my-works")}>
                             <Githubicon2 />
                             Portfolio
                           </span>
                        </span>
                     </div>
                  </div>
               </div>s

               <div id='pageContent' className=' full-screen-section2 h-56 w-full bg-white flex'>
                  <div className=' h-full w-1/3 flex select-none'>
                     <div className=' h-full w-1/2 flex flex-col gap-2 p-8'>
                        Pages:
                        <ul id='elemetsPage'>
                           <li className=' cursor-pointer' onClick={handleMain}>- Home</li>
                           <li className=' cursor-pointer' onClick={handleProjects}>- Projects</li>
                           <li className=' cursor-pointer' onClick={() => handleSectionClick(section1)}>- Portfolio</li>
                        </ul>
                     </div>
                     <div className=' h-full w-1/2 flex flex-col gap-2 pt-8'>
                     Content:
                        <ul id='elemetsPage2'>
                           <li className=' cursor-pointer' onClick={() => handleSectionClick(section1)}>- Welcome</li>
                           <li className=' cursor-pointer' onClick={() => handleSectionClick(section2)}>- My Portfolio</li>
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

export default Portfolio;