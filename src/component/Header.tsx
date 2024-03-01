import {
  Logo,
  iconCart,
  iconChavronDown,
  iconLocation,
  iconLonceng,
  iconPesan,
  iconPhone,
  iconSearch,
} from "../assets";

const Header = () => {
  const isLogin = true;

  return (
    <>
      <div id="header-01" className="bg-color1 flex w-screen justify-between px-8">
        <div className="flex flex-row items-center gap-2 p-1 ">
          <img src={iconPhone} className="h-6 w-4" />
          <p className="text-color1 text-12 hover:text-color2">Download Tokopedia App</p>
        </div>
        <div className="text-12 flex items-center gap-8">
          <a className="textHeader">Tentang Tokopedia</a>
          <a className="textHeader">Mitra Tokopedia</a>
          <a className="textHeader">Pusat Edukasi Seller</a>
          <a className="textHeader">Promo</a>
          <a className="textHeader">Tokopedia Care</a>
        </div>
      </div>
      <div className="border-b">
        <div className="flex items-center justify-between px-9 py-4">
          <img src={Logo} className="mr-6 h-8 w-[9.4rem]" />
          <div className="hover:activeHover mr-5 p-2">
            <h1 className="font-open-sauce-one text-color3 text-14">Kategori</h1>
          </div>
          <div className="relative mr-5 w-full">
            <input
              type="text"
              className="outline-color1 flex h-9 w-full rounded pl-10 pr-3 outline"
              placeholder="Cari Di Tokopedia..."
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <img src={iconSearch} className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
          </div>
          <div className="mr-4 flex flex-row gap-2">
            <div className="hover:activeHover p-2">
              <img src={iconCart} className="h-6 w-14 " />
            </div>
            {isLogin && (
              <>
                <div className="hover:activeHover p-2">
                  <div className="bg-color3 absolute -mt-2 ml-4 flex h-4 w-4 items-center justify-center rounded-full p-2 text-[10px] text-white">
                    6
                  </div>
                  <img src={iconLonceng} className="h-6 w-14" />
                </div>
                <div className="hover:activeHover p-2">
                  <img src={iconPesan} className="h-6 w-14" />
                </div>
              </>
            )}
          </div>
          <div className="mr-4 h-8 border-l border-gray-300"></div>
          {isLogin ? (
            <div className="flex flex-row items-center gap-3">
              <img
                className="h-5 w-5 rounded-full"
                src="https://images.tokopedia.net/img/cache/300/tPxBYm/2023/1/20/0c17a989-7381-454e-92f5-488ae5fe16f4.jpg"
              />
              Samsul
            </div>
          ) : (
            <>
              <div className="flex gap-4">
                <button className="outline-color2 text-color4 text-12 h-6 w-16 rounded outline">
                  {" "}
                  Masuk{" "}
                </button>
                <button className="bg-color4 outline-color2 text-12 h-6 w-16 rounded text-white outline">
                  {" "}
                  Masuk{" "}
                </button>
              </div>
            </>
          )}
        </div>
        <div className="mb-3 flex items-center">
          <div className="w-[18.4rem]"></div>
          <div className=" flex w-[58.5rem] gap-3">
            <a className="textHeader text-11">Apple Watch</a>
            <a className="textHeader text-11">Iphone 12</a>
            <a className="textHeader text-11">Ikan Hias </a>
            <a className="textHeader text-11">Sendal Wanita</a>
            <a className="textHeader text-11">Samsung S23 Ultra</a>
            <a className="textHeader text-11">Tasbih Digital</a>
          </div>
          <div className="flex flex-row gap-3">
            <img src={iconLocation} className="h-4 w-4" />
            <div className="text-11 flex">
              <p className="mr-1">Dikirim ke</p>
              <b>Jakarta Pusat</b>
              <img src={iconChavronDown} className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
