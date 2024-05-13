import { useState } from 'react';
import webisteImage1 from '../Images/myWebsite1.PNG'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CaraouselMenu = () => {
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);

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
              <p className=" font-light text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta eum enim aperiam ad, mollitia nostrum asperiores? Assumenda aliquam laboriosam consectetur obcaecati expedita, voluptatibus numquam cupiditate quia perferendis voluptatum odit maiores.</p>
            </div>
            <div id="leftBoxTopLower">
              <h3 className=" text-3xl font-medium"><button>Check out</button></h3>
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
              <p className=" font-light text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta eum enim aperiam ad, mollitia nostrum asperiores? Assumenda aliquam laboriosam consectetur obcaecati expedita, voluptatibus numquam cupiditate quia perferendis voluptatum odit maiores.</p>
            </div>
            <div id="leftBoxTopLower">
              <h3 className=" text-3xl font-medium"><button>Check out</button></h3>
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
              <p className=" font-light text-2xl"></p>
            </div>
            <div id="leftBoxTopLower">
              <h3 className=" text-3xl font-medium"><button>Check out</button></h3>
            </div>
          </div>
          <div id="rightBoxTop">
            <span className="topGrid flex justify-center items-center">
              <div className="boxImage rounded-2xl">
                <img className=" imageClass" src="https://i.pinimg.com/originals/e5/72/18/e57218e94c76c40a8f6c8daca96e4d49.jpg" alt=""/>
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

