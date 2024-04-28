import React, { useEffect, useRef, useState } from 'react';

//Scrolling function
export let ScrollElement = () => {
   useEffect(() => {
      const handleScroll = (event) => {
        event.preventDefault();
        
        const fullScreenSections = document.querySelectorAll('.full-screen-section');
        const scrollY = window.scrollY;
        
        if (event.deltaY < 0) { // Scrolling up
          for (let i = fullScreenSections.length - 1; i >= 0; i--) {
            if (fullScreenSections[i].offsetTop < scrollY) {
              window.scrollTo({
                top: fullScreenSections[i].offsetTop,
                behavior: 'smooth'
              });
              break;
            }
          }
        } else { // Scrolling down
          for (let i = 0; i < fullScreenSections.length; i++) {
            if (fullScreenSections[i].offsetTop > scrollY + window.innerHeight) {
              window.scrollTo({
                top: fullScreenSections[i].offsetTop,
                behavior: 'smooth'
              });
              break;
            }
          }
        }
      };
  
      window.addEventListener('wheel', handleScroll);
  
      return () => {
        window.removeEventListener('wheel', handleScroll);
      };
    }, []);
}