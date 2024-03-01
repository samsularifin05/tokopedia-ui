import Slider from "react-slick";
import {
  chevronLeft,
  chevronRight,
  kategori1,
  kategori2,
  kategori3,
  kategori4,
} from "../../assets";
import { useSpring, animated } from "react-spring";
import { useState } from "react";

function Kategori() {
  const [Active, setActive] = useState(false);

  // Animasi untuk menu mobile
  const nextArrowAnimation = useSpring({
    transform: Active ? "translateX(0%)" : "translateX(-100%)",
    opacity: Active ? 1 : 0,
  });
  const prevArrowAnimation = useSpring({
    transform: Active ? "translateX(0%)" : "translateX(100%)",
    opacity: Active ? 1 : 0,
  });

  const CustomNextArrow = ({ onClick }: { onClick: () => void }) => (
    <animated.div style={nextArrowAnimation} className="absolute -right-5 top-16 z-10 ">
      <button
        onClick={onClick}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg"
      >
        <img src={chevronRight} className="h-5 w-5" />
      </button>
    </animated.div>
  );
  const CustomPrevArrow = ({ onClick }: { onClick: () => void }) => (
    <animated.div style={prevArrowAnimation} className={"absolute -left-5 top-16 z-10"}>
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg "
        onClick={onClick}
      >
        <img src={chevronLeft} className="h-5 w-5" />
      </button>
    </animated.div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: (
      <CustomNextArrow
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    ),
    prevArrow: (
      <CustomPrevArrow
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    ),
  };

  return (
    <div onMouseLeave={() => setActive(false)}>
      <Slider {...settings}>
        <div className="boxKategori" onMouseEnter={() => setActive(true)}>
          <img src={kategori2} alt="Slide 2" className="rounded-lg outline-none" />
        </div>
        <div className="boxKategori" onMouseEnter={() => setActive(true)}>
          <img src={kategori3} alt="Slide 3" className="rounded-lg outline-none" />
        </div>
        <div className="boxKategori" onMouseEnter={() => setActive(true)}>
          <img src={kategori4} alt="Slide 4" className="rounded-lg outline-none" />
        </div>
        <div className="boxKategori" onMouseEnter={() => setActive(true)}>
          <img src={kategori1} alt="Slide 1" className="rounded-lg outline-none" />
        </div>
        <div className="boxKategori" onMouseEnter={() => setActive(true)}>
          <img src={kategori2} alt="Slide 2" className="rounded-lg outline-none" />
        </div>
        <div className="boxKategori" onMouseEnter={() => setActive(true)}>
          <img src={kategori3} alt="Slide 3" className="rounded-lg outline-none" />
        </div>
        <div className="boxKategori" onMouseEnter={() => setActive(true)}>
          <img src={kategori4} alt="Slide 4" className="rounded-lg outline-none" />
        </div>
      </Slider>
    </div>
  );
}

export default Kategori;
