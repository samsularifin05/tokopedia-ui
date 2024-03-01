import Slider from "react-slick";
import { chevronLeft, chevronRight, slider1, slider2, slider3, slider4 } from "./../assets";
import React, {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import { useSpring, animated } from "react-spring";

function SimpleSlider() {
  const [Active, setActive] = useState(false);

  // Animasi untuk menu mobile
  const menuAnimation = useSpring({
    transform: Active ? "translateX(0%)" : "translateX(-100%)",
    opacity: Active ? 1 : 0,
  });
  const menuAnimation2 = useSpring({
    transform: Active ? "translateX(0%)" : "translateX(100%)",
    opacity: Active ? 1 : 0,
  });

  const CustomNextArrow = ({ onClick }: { onClick: () => void }) => (
    <animated.div style={menuAnimation} className="absolute -right-5 top-32 z-10 ">
      <button
        onClick={onClick}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg"
      >
        <img src={chevronRight} className="h-5 w-5" />
      </button>
    </animated.div>
  );
  const CustomPrevArrow = ({ onClick }: { onClick: () => void }) => (
    <animated.div style={menuAnimation2} className={"absolute -left-5 top-32 z-10"}>
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg "
        onClick={onClick}
      >
        <img src={chevronLeft} className="h-5 w-5" />
      </button>
    </animated.div>
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    appendDots: (
      dots:
        | string
        | number
        | boolean
        | ReactElement<unknown, string | JSXElementConstructor<unknown>>
        | Iterable<ReactNode>
        | ReactPortal
        | null
        | undefined
    ) => (
      <div>
        <ul
          className="flex flex-row space-x-2" // Adds spacing between dots
          style={{
            position: "absolute", // Positions the dots relative to their container
            top: "-62px", // Adjust top position as needed
            left: "15px", // Adjust left position as needed
          }}
        >
          {React.Children.map(dots, (dot, index) => (
            <li key={index} style={{ marginRight: "-13px", color: "white" }}>
              {dot}
            </li>
          ))}
        </ul>
      </div>
    ),
  };

  return (
    <div className="relative mx-28 mt-4 rounded-[20px]">
      <div onMouseLeave={() => setActive(false)}>
        <Slider {...settings}>
          <div onMouseEnter={() => setActive(true)}>
            <img src={slider1} alt="Slide 1" className="w-full rounded-[20px]" />
          </div>
          <div onMouseEnter={() => setActive(true)}>
            <img src={slider2} alt="Slide 2" className="w-full rounded-[20px]" />
          </div>
          <div onMouseEnter={() => setActive(true)}>
            <img src={slider3} alt="Slide 3" className="w-full rounded-[20px]" />
          </div>
          <div onMouseEnter={() => setActive(true)}>
            <img src={slider4} alt="Slide 4" className="w-full rounded-[20px]" />
          </div>
        </Slider>
      </div>

      <div className="bg-color5 absolute right-5 top-[17rem] rounded p-1 text-[10px] text-white">
        Lihat Promo Lainnya
      </div>
    </div>
  );
}

export default SimpleSlider;
