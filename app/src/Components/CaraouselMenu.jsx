import { useState } from 'react';
import webisteImage1 from '../Images/myWebsite1.PNG'
import RouletteImage1 from '../Images/Roulette.PNG'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import { openURLInNewWindow } from '../Constants/Constants';

const CaraouselMenu = () => {
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);

  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    className: "slider-container",
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: current => setActiveSlide2(current)
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className=' slides'>
        <div id="projectBoxTop">
          <div id="leftBoxTop">
            <div id="leftBoxTopUpper">
              <h2 className=" text-5xl font-normal pl-2">My website</h2>
              <p className=" font-light text-2xl">This is my personal website, the very one you're currently visiting, crafted to showcase my proficiency in frontend development. Every aspect of this website, from coding to design and even drawing all the SVGs, was meticulously created by me. While it may not represent the pinnacle of my capabilities, it offers a glimpse into what I can achieve—especially considering it's one of my initial projects post learning React.</p>
            </div>
            <div id="leftBoxTopLower">
              <h3 className=" text-3xl font-medium"><button onClick={() => openURLInNewWindow("https://github.com/DTIGitOne/my-website")}>Check out</button></h3>
            </div>
          </div>
          <div id="rightBoxTop">
            <span className="topGrid flex justify-center items-center">
              <div className="boxImage rounded-2xl">
                <img className=" imageClass" src={webisteImage1} alt=""/>
              </div>
            </span>
          </div>
        </div>
        </div>
        <div className=' slides'>
        <div id="projectBoxTop">
          <div id="leftBoxTop">
            <div id="leftBoxTopUpper">
              <h2 className=" text-5xl font-normal pl-2">My website</h2>
              <p className=" font-light text-2xl">This project, initiated in collaboration with a friend, presents a unique twist on the conventional roulette game. While still in its early development stages, I hold strong conviction that it will evolve into an exceptional endeavor upon completion. Currently, the entire project is undergoing a transition from Vanilla code to React, with the backend code not yet uploaded.</p>
            </div>
            <div id="leftBoxTopLower">
              <h3 className=" text-3xl font-medium"><button onClick={() => openURLInNewWindow("https://github.com/DTIGitOne/Project-1")}>Check out</button></h3>
            </div>
          </div>
          <div id="rightBoxTop">
            <span className="topGrid flex justify-center items-center">
              <div className="boxImage rounded-2xl">
                <img className=" imageClass" src={RouletteImage1} alt=""/>
              </div>
            </span>
          </div>
        </div>
        </div>
      </Slider>
    </div>
  );
}

export default CaraouselMenu;

