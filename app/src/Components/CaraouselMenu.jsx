import { useState } from 'react';
import webisteImage1 from '../Images/myWebsite1.PNG'
import RouletteImage1 from '../Images/Roulette.PNG'
import DriveMotors from '../Images/DriveMotors.png'
import AmilaWebsite from '../Images/AmilasWebsite.PNG'
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
              <p className=" font-light text-2xl">This is my personal website, This is the current website you are on. I designed and created the whole website my self, inculding drawing the svg's and animations.</p>
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
              <h2 className=" text-5xl font-normal pl-2">Neon Roulette</h2>
              <p className=" font-light text-2xl">This project, initiated in collaboration with a friend, presents a unique twist on the conventional roulette game. It is close to being finished and currently i have linked the code for the frontend part of the web-app. This is my most complicated project that i have made.</p>
            </div>
            <div id="leftBoxTopLower">
              <h3 className=" text-3xl font-medium"><button onClick={() => openURLInNewWindow("https://github.com/DTIGitOne/roulette-frontend")}>Check out</button></h3>
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
        <div className=' slides'>
        <div id="projectBoxTop">
          <div id="leftBoxTop">
            <div id="leftBoxTopUpper">
              <h2 className=" text-5xl font-normal pl-2">Drive Motors</h2>
              <p className=" font-light text-2xl">This is the first Mern-Stack app that i have made to display my knowledge in programming.Both the frontend and backend code are located on my github. The deployed website link is located inside of the frontend component which i have linked below.</p>
            </div>
            <div id="leftBoxTopLower">
              <h3 className=" text-3xl font-medium"><button onClick={() => openURLInNewWindow("https://github.com/DTIGitOne/dmotors-frontend2?tab=readme-ov-file")}>Check out</button></h3>
            </div>
          </div>
          <div id="rightBoxTop">
            <span className="topGrid flex justify-center items-center">
              <div className="boxImage rounded-2xl">
                <img className=" imageClass" src={DriveMotors} alt=""/>
              </div>
            </span>
          </div>
        </div>
        </div>
        <div className=' slides'>
        <div id="projectBoxTop">
          <div id="leftBoxTop">
            <div id="leftBoxTopUpper">
              <h2 className=" text-5xl font-normal pl-2">Amila's Website</h2>
              <p className=" font-light text-2xl">This is a personal portfolio website which i have made.</p>
            </div>
            <div id="leftBoxTopLower">
              <h3 className=" text-3xl font-medium"><button onClick={() => openURLInNewWindow("https://amilataljanovic.vercel.app")}>Check out</button></h3>
            </div>
          </div>
          <div id="rightBoxTop">
            <span className="topGrid flex justify-center items-center">
              <div className="boxImage rounded-2xl">
                <img className=" imageClass" src={AmilaWebsite} alt=""/>
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

