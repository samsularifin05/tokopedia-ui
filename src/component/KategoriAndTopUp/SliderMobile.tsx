import Slider from "react-slick";
import { slider1, slider2, slider3, slider4, slider5 } from "./../../assets";
import SliderWrapper from "./styledDost";

function SliderMobile() {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    customPaging: () => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
  };

  return (
    <div className="z-10 -mt-16">
      <SliderWrapper>
        <Slider {...settings}>
          <div>
            <img src={slider1} alt="Slide 1" className="h-32 w-full" />
          </div>
          <div>
            <img src={slider2} alt="Slide 2" className="h-32 w-full" />
          </div>
          <div>
            <img src={slider3} alt="Slide 3" className="h-32 w-full" />
          </div>
          <div>
            <img src={slider4} alt="Slide 4" className="h-32 w-full" />
          </div>
          <div>
            <img src={slider5} alt="Slide 4" className="h-32 w-full" />
          </div>
        </Slider>
      </SliderWrapper>
    </div>
  );
}

export default SliderMobile;
