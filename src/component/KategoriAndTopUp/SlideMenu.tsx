import Slider from "react-slick";
import {
  IcKategori,
  IcNow,
  chevronLeft,
  chevronRight,
  hpTablet,
  icElectronic,
  icKomputer,
  icMoney,
  icPerawatanHewan,
  icTravel,
  topUp,
} from "../../assets";
import { useSpring, animated } from "react-spring";
import { useState } from "react";

function SlideMenu() {
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
    <animated.div style={nextArrowAnimation} className="absolute -right-5 -top-1 z-10 ">
      <button
        onClick={onClick}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg"
      >
        <img src={chevronRight} className="h-5 w-5" />
      </button>
    </animated.div>
  );
  const CustomPrevArrow = ({ onClick }: { onClick: () => void }) => (
    <animated.div style={prevArrowAnimation} className={"absolute -left-5 -top-1 z-10"}>
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
    speed: 500,
    infinite: true,
    centerMode: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    variableWidth: true,
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
        <div onMouseEnter={() => setActive(true)}>
          <div className="itemMenu">
            <img src={IcNow} className="h-7 w-7" />
            <p className="text-14 ">Belanja 2 Jam Tiba</p>
          </div>
        </div>
        <div onMouseEnter={() => setActive(true)}>
          <div className="itemMenu">
            <img src={IcKategori} className="h-7 w-7" />
            <p className="text-14">Kategori</p>
          </div>
        </div>
        <div onMouseEnter={() => setActive(true)}>
          <div className="itemMenu">
            <img src={hpTablet} className="h-7 w-7" />
            <p className="text-14">Handphone & Tablet</p>
          </div>
        </div>
        <div onMouseEnter={() => setActive(true)}>
          <div className="itemMenu">
            <img src={topUp} className="h-7 w-7" />
            <p className="text-14">Top-Up & Tagihan</p>
          </div>
        </div>
        <div onMouseEnter={() => setActive(true)}>
          <div className="itemMenu">
            <img src={icElectronic} className="h-7 w-7" />
            <p className="text-14">Elektronik</p>
          </div>
        </div>
        <div onMouseEnter={() => setActive(true)}>
          <div className="itemMenu">
            <img src={icPerawatanHewan} className="h-7 w-7" />
            <p className="text-14">Perawatan Hewan</p>
          </div>
        </div>
        <div onMouseEnter={() => setActive(true)}>
          <div className="itemMenu">
            <img src={icTravel} className="h-7 w-7" />
            <p className="text-14">Travel & Entertainment</p>
          </div>
        </div>
        <div onMouseEnter={() => setActive(true)}>
          <div className="itemMenu">
            <img src={icMoney} className="h-7 w-7" />
            <p className="text-14">Keuangan</p>
          </div>
        </div>
        <div onMouseEnter={() => setActive(true)}>
          <div className="itemMenu">
            <img src={icKomputer} className="h-7 w-7" />
            <p className="text-14">Komputer & Laptop</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SlideMenu;
