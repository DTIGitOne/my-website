import HTMLicon from '../SVGs/HTMLIcon';
import CSSicon from '../SVGs/CSSIcon';
import JSicon from '../SVGs/JSIcon';
import Reacticon from '../SVGs/ReactIcon';
import Jqueryicon from '../SVGs/JQuery';
import Tailwindicon from '../SVGs/TailwindIcon';
import Sassicon from '../SVGs/SassIcon';
import React, { useEffect, useRef, useState } from 'react';
import { scrollTo } from '../Constants/Constants';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Sidebar from '../Components/Sidebar';
gsap.registerPlugin(ScrollTrigger) 

const Main = () => {
   const [sidebarOpen, setSidebarOpen] = useState(false);
   const [readMoreClicked, setReadMoreClicked] = useState(false);
   const section1 = useRef();
   const section2 = useRef();
   const section3 = useRef();
   const section4 = useRef();
   const section5 = useRef();
   const section6 = useRef();
   const section7 = useRef();
   const divRef = useRef(null);
   const aboutMeBoxRef = useRef(null);
   const readMoreButton = useRef(null);

   const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
   };

   useEffect(() => {
      // Run this effect only on the Main page
      if (isMainPage()) {
         gsap.utils.toArray('.animate-on-scroll').forEach((element) => {
            gsap.fromTo(
               element,
               {
                  autoAlpha: 0,
                  y: -10,
               },
               {
                  autoAlpha: 1,
                  duration: 1.5,
                  y: 0,
                  scrollTrigger: {
                     scroller: ".scrollContainer",
                     start: "top 40%",
                     end: "bottom 0%",
                     toggleActions: 'restart none none none',
                  },
               }
            );
         });
      }
   }, []);

   //reset scrollbar to top after reload
   if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
   
    const isMainPage = () => {
      const pathname = window.location.pathname;
      // Check if the pathname contains "/Main"
      const isMain = pathname.includes("/Main");
      
      if (isMain) {
         window.scrollTo(0, 0);
         
         // Remove loading element after initial loading
         setTimeout(() => {
            let loadInPage = document.getElementById("loadInPage");
            if (loadInPage) {
               loadInPage.style.display = "none";
            }
         }, 4200);
         
         setTimeout(() => {
            let pageElements = document.getElementById("pageElements");
            if (pageElements) {
               pageElements.className = "flex flex-col z-30 justify-center items-center";
               document.body.style.overflow = "visible";
               divRef.current.focus();
            }
         }, 4300);
      }
   };

   const readMore = () => {
      if (readMoreClicked) {
         aboutMeBoxRef.current.style.height = "75%";
         aboutMeBoxRef.current.style.width = "65%";
         readMoreButton.current.innerHTML = "Read more...";
      } else {
         aboutMeBoxRef.current.style.height = "90%";
         aboutMeBoxRef.current.style.width = "80%";
         readMoreButton.current.innerHTML = "go back";
      }
      // Toggle the state
      setReadMoreClicked(!readMoreClicked);
   }
    
   return (
       <>
          <div id="wholePage" className=" h-full w-full z-30">
          <div className="mainDrop"></div>
          <div className='portfolioDrop' ></div>
          <div className='projectsDrop' ></div>
         <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div id="loadInPage" className=" h-full w-full flex justify-center items-center z-30 fixed" >
           <svg id="mainLogoSVG" className=" z-30" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.25 80.2">
             <g id="Icons">
               <path class="cls-1" d="m42.16,24.18l-3.24-.46,3.24-7.76c0-3.29,7.32-4.7,11.51,4.93-3.29-8.22-11.51-14.8-13.88-6.68l-3.59,9.11-2.22-.31,4.88-11.99c3.59-11.63,10.33-12.04,16.45-6.58-6.58-6.58-12.27-6.15-16.45,3.29l-6.23,15.08-13.5-1.92c-26.31-4.93-21.66,5.18-6.58,21.38C2.69,29.11-7.18,19.24,19.13,22.53l12.84,1.84-12.84,31.05c-3.29,6.58-4.93,1.64-9.87-4.93,3.57,8.24,8.22,13.16,11.51,4.93l12.58-30.85,2.24.31-14.08,35.85-8.96,1.27c-4.65.72-7.52,2.3-9.06,4.21,1.99-1.17,4.93-2.09,9.06-2.57l8.32-1.28-5.03,12.8c-6.43,9.01-17.89-2.12-12.35-8.95-11.5,6.78,8.6,21.81,14,8.95l5.46-13.11,10.99-1.69c32.89-3.29,50.98-31.25,8.22-36.18Zm-8.29,34.82l-10.25,1.45,14.65-35.18,3.88.56c39.47,3.29,24.67,29.6-8.29,33.17Z"/>
             </g>
           </svg>
         </div>
         <div id="pageElements" className="pageElements hidden h-full w-full ">
            <div id='logoBox' className=' z-40 h-28 w-full p-5 fixed left-0 top-0 flex '>
               <svg id="menuLogo" onClick={toggleSidebar} className=" z-30 h-16 w-16" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.25 80.2">
                  <g id="Icons">
                    <path class="cls-2" d="m42.16,24.18l-3.24-.46,3.24-7.76c0-3.29,7.32-4.7,11.51,4.93-3.29-8.22-11.51-14.8-13.88-6.68l-3.59,9.11-2.22-.31,4.88-11.99c3.59-11.63,10.33-12.04,16.45-6.58-6.58-6.58-12.27-6.15-16.45,3.29l-6.23,15.08-13.5-1.92c-26.31-4.93-21.66,5.18-6.58,21.38C2.69,29.11-7.18,19.24,19.13,22.53l12.84,1.84-12.84,31.05c-3.29,6.58-4.93,1.64-9.87-4.93,3.57,8.24,8.22,13.16,11.51,4.93l12.58-30.85,2.24.31-14.08,35.85-8.96,1.27c-4.65.72-7.52,2.3-9.06,4.21,1.99-1.17,4.93-2.09,9.06-2.57l8.32-1.28-5.03,12.8c-6.43,9.01-17.89-2.12-12.35-8.95-11.5,6.78,8.6,21.81,14,8.95l5.46-13.11,10.99-1.69c32.89-3.29,50.98-31.25,8.22-36.18Zm-8.29,34.82l-10.25,1.45,14.65-35.18,3.88.56c39.47,3.29,24.67,29.6-8.29,33.17Z"/>
                  </g>
               </svg>
            </div>
            <div tabIndex={0} ref={divRef} id='scrollContainer' className='scrollContainer z-30 w-full'>
               <div id="logoTop" className=""></div>
               
               <div ref={section1} id="welcomePage" className="full-screen-section flex flex-col font-thin text-white text-8xl z-30">
                  <div className=' elementHeight w-full flex justify-center items-center select-none'>Welcome to my website</div>
                  <div className=' scrollHeight w-full flex justify-center'>
                      <button onClick={() => scrollTo(section2)} className='flex flex-col gap-2 p-1 items-center select-none'>
                         <span className=' text-3xl'>more info</span>
                         <svg id='downIcon' xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 266.77"><path id='iconClick' fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>
                      </button>
                  </div>
               </div>
                    
               <div ref={section2} id="aboutMe" className="full-screen-section flex flex-col font-thin text-white text-8xl z-30">
                  <div className=' h-28 w-full'></div>
                  <div className=' animate-on-scroll elementHeight w-full flex justify-center items-center select-none'>
                     <div ref={aboutMeBoxRef} id='aboutMeBox'>
                        <div className=' h-1/6 flex items-center p-10 font-normal'> About me</div>
                        <div className=' h-4/5 w-full fontSizePages font-light overflow-hidden text-ellipsis p-3 select-text'> 
                        <span className=' font-medium text-3xl'>-M</span>y ipsum, dolor sit amet consectetur adipisicing elit. Maiores quae nostrum voluptatibus, magnam corporis facere. A unde corporis placeat ea labore ipsam, asperiores nemo laudantium hic iste fugit alias voluptates?
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, veniam excepturi reprehenderit, ex obcaecati debitis quaerat laboriosam quis consectetur maiores inventore beatae! Fuga, dicta. Neque laboriosam dolorem rem incidunt fugit!
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nesciunt, voluptatem sit molestias odio rerum corporis minus reprehenderit nostrum at labore cupiditate ipsum nulla consequuntur nisi ad porro sapiente accusantium.
                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat alias, earum error ratione soluta impedit provident animi maiores porro labore perspiciatis qui eaque reiciendis deleniti cumque quas. Sequi, aut rem?
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatem aut itaque eos! In voluptate perspiciatis ab atque labore voluptas tenetur officia, repellat delectus culpa reprehenderit praesentium, molestiae beatae necessitatibus?
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque recusandae repellendus, non vitae ullam iusto libero adipisci excepturi natus? Mollitia et magnam corporis recusandae minus officia consequuntur est illo. Assumenda.
                         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit consequuntur facere totam commodi necessitatibus facilis officiis itaque ullam soluta quidem sequi at fuga voluptatibus sint quae culpa, sunt illo laborum.
                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente sed, labore maxime, consequuntur perferendis modi magni ut nemo aliquid sint inventore quas, pariatur delectus quibusdam nam alias. Pariatur, quidem eligendi.
                        </div>
                        <div className=' grow flex justify-end items-center text-2xl font-normal p-2 pr-8'><span ref={readMoreButton} className=' cursor-pointer hover:underline' onClick={readMore}>Read more...</span></div>
                     </div>
                  </div>
                  <div className=' scrollHeight w-full flex justify-center'>
                      <button onClick={() => scrollTo(section3)} className='flex flex-col gap-2 p-1 items-center select-none justify-center'>
                         <svg id='downIcon' xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 266.77"><path id='iconClick' fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>
                      </button>
                  </div>
               </div>

               <div ref={section3} id="lookingFor" className="full-screen-section flex flex-col font-thin text-white text-8xl z-30">
               <div className=' h-28 w-full'></div>
                  <div className=' animate-on-scroll elementHeight w-full flex justify-center items-center select-none'>
                     <div className=' h-4/5 w-4/5 flex justify-between items-center flex-col gap-4'>
                        <div className=' text-6xl'>What i am looking for</div>
                        <div id='lookingForBox' className=' fontSizePages font-light flex flex-col overflow-hidden'>
                           <span className=' h-1/2 overflow-hidden'>
                             <span className=' font-medium text-3xl'>-I</span> am rem ipsum dolor sit amet consectetur adipisicing elit. Quidem doloribus consectetur unde nemo, beatae labore libero, vel nulla voluptas error earum ad repellendus molestias assumenda natus accusantium quasi qui. Ex.
                             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem obcaecati quibusdam iste fuga, optio illo? Eius expedita quisquam iste magnam! Quam ad inventore consequatur optio blanditiis at iste aspernatur eaque!
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere soluta delectus iure quidem ullam tenetur perferendis deleniti saepe accusamus praesentium odit nemo laboriosam fugiat in nisi, sed tempora. Cumque, eveniet.
                           </span>
                           <span className=' h-1/2 overflow-hidden'>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, facere animi assumenda fugit ad sapiente culpa aspernatur deserunt pariatur nisi magni dignissimos beatae incidunt dolores quis id natus officiis voluptatem.
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, explicabo iure dolorum necessitatibus suscipit maxime voluptates soluta fuga nulla ab fugiat laudantium in exercitationem nemo quibusdam dignissimos, voluptatum dolore tenetur?
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className=' scrollHeight w-full flex justify-center'>
                      <button onClick={() => scrollTo(section4)} className='flex flex-col gap-2 p-1 items-center select-none justify-center'>
                         <svg id='downIcon' xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 266.77"><path id='iconClick' fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>
                      </button>
                  </div>
               </div>

               <div ref={section4} id="skills1" className="full-screen-section flex flex-col font-thin text-white text-8xl z-30">
               <div className=' h-28 w-full'></div>
                  <div className=' animate-on-scroll elementHeight w-full flex justify-center items-center flex-col select-none'>
                     <span id='skillTextBox'>
                        <div className=' text-8xl pl-4'>Skills</div>
                        <div id='skillLine1'></div>
                     </span>
                     <span id='skillBox'>
                       <HTMLicon />
                       <CSSicon />
                       <JSicon />
                       <Reacticon />
                       <Jqueryicon />
                       <Tailwindicon />
                       <Sassicon />
                     </span>
                  </div>
                  <div className=' scrollHeight w-full flex justify-center'>
                      <button onClick={() => scrollTo(section5)} className='flex flex-col gap-2 p-1 items-center select-none justify-center'>
                         <svg id='downIcon' xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 266.77"><path id='iconClick' fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>
                      </button>
                  </div>
               </div>

               <div ref={section5} id="skills2" className="full-screen-section flex flex-col font-thin text-white text-8xl z-30">
                  <div className=' animate-on-scroll elementHeight w-full flex justify-center items-center select-none'>skills 2</div>
                  <div className=' scrollHeight w-full flex justify-center'>
                      <button onClick={() => scrollTo(section6)} className='flex flex-col gap-2 p-1 items-center select-none justify-center'>
                         <svg id='downIcon' xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 266.77"><path id='iconClick' fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>
                      </button>
                  </div>
               </div>

               <div ref={section6} id="socials" className="full-screen-section flex flex-col font-thin text-white text-8xl z-30">
                  <div className=' animate-on-scroll elementHeight w-full flex justify-center items-center select-none'>Social Links</div>
                  <div className=' scrollHeight w-full flex justify-center'>
                      <button onClick={() => scrollTo(section7)} className='flex flex-col gap-2 p-1 items-center select-none justify-center'>
                         <svg id='downIcon' xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 266.77"><path id='iconClick' fill-rule="nonzero" d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"/></svg>
                      </button>
                  </div>
               </div>

               <div ref={section7} id="thankVisiting" className="full-screen-section flex flex-col font-thin text-white text-8xl z-30">
                  <div className=' animate-on-scroll elementHeight w-full flex justify-center items-center select-none'>Thank you for Visiting</div>
               </div>

               <div id='pageContent' className=' full-screen-section2 h-56 w-full bg-white'></div>
            </div>
         </div>
       </div>
       </>
       
      
);

}

export default Main;