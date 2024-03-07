import {
  iconFeed,
  iconLove,
  iconOfficialStore,
  iconTransaksi,
  ramadanExtraSeru,
} from "../../assets";

const ButtonNavigation = () => {
  return (
    <div className="fixed bottom-0 flex h-12 w-full justify-between border bg-white px-5 py-1 shadow-lg md:w-[60%] lg:w-1/3 xxl:w-[25rem] xl:w-[30%]">
      <div className="flex flex-col items-center gap-1">
        <img src={ramadanExtraSeru} className="h-6 w-6" />
        <p className="text-11 text-color2"> Home </p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <img src={iconFeed} className="h-6 w-6" />
        <p className="text-11 text-color1"> Feed </p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <img src={iconOfficialStore} className="h-6 w-6" />
        <p className="text-11 text-color1"> Official Store </p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <img src={iconLove} className="h-6 w-6" />
        <p className="text-11 text-color1"> Wishlist </p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <img src={iconTransaksi} className="h-6 w-6" />
        <p className="text-11 text-color1"> Transaksi </p>
      </div>
    </div>
  );
};

export default ButtonNavigation;
