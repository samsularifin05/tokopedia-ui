import { useEffect, useState } from "react";
import { SliderMobile } from "..";
import {
  BgImage,
  chevronRight,
  iconAll,
  iconBeliLocal,
  iconBola,
  iconBook,
  iconCart,
  iconChavronDown,
  iconElectronic,
  iconFashion,
  iconFeed,
  iconFilmnDanMusic,
  iconJam,
  iconKeuangan,
  iconLive,
  iconLocationActive,
  iconLonceng,
  iconLove,
  iconMenu,
  iconMumpungMurah,
  iconOfficialStore,
  iconPesan,
  iconPestaSeru,
  iconProfile,
  iconPromoHariIni,
  iconRamadhanCenter,
  iconRamdhanLeft,
  iconRamdhanRight,
  iconSearch,
  iconThrExtra,
  iconTiketDanHiburan,
  iconTokoPediaSeru,
  iconTokopediaNow,
  iconTokpedFrama,
  iconTopUpDanTagihan,
  iconTransaksi,
  ramadanExtraSeru,
} from "../../assets";
const MobileDesain = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <>
      <div
        className="h-48"
        style={{
          backgroundSize: "contain",
          backgroundImage: `linear-gradient(rgba(17, 27, 33, 0), rgba(17, 27, 33, 0)), url('${BgImage}')`,
        }}
      >
        <div className={isVisible ? "menuFixed" : "menuDefault"}>
          <div className="relative mr-2 w-[15rem]">
            <input
              type="text"
              className="inputTextSearch placeholder:text-14 text-14 w-full pl-8 pr-3"
              placeholder="Cari Di Tokopedia..."
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <img src={iconSearch} className="h-4 w-4 text-gray-400" aria-hidden="true" />
            </div>
          </div>
          <div className="flex gap-3">
            <img src={iconPesan} className="h-[1.3rem]" />
            <img src={iconLonceng} className="h-[1.3rem]" />
            <img src={iconCart} className="h-[1.3rem]" />
            <img src={iconMenu} className="h-[1.3rem]" />
          </div>
        </div>
        <div className="flex flex-row px-4">
          <div className="flex flex-row items-center gap-1">
            <img src={iconLocationActive} className="h-4 w-4" />
            <div className="text-12 flex items-center">
              <p className="mr-1">Dikirim ke</p>
              <b>Jakarta Pusat</b>
              <img src={iconChavronDown} className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="mt-2 flex flex-row justify-between gap-2 px-4">
          <div className="flex flex-row gap-2">
            <img src={iconProfile} className="h-8 w-8 rounded-full" />
            <div className="flex flex-col">
              <strong className="text-12">Hai, Samsul</strong>
              <p className="text-color1 text-[10px]">Cek update di akunmu, yuk~</p>
            </div>
          </div>
          <button className="bg-color4 h-8 w-28 rounded-[10px] text-white"> Masuk </button>
        </div>
      </div>
      <SliderMobile />
      <div className="mx-[0.5rem] flex flex-col gap-2 overflow-x-auto">
        <div className="flex flex-row space-x-4 px-2">
          <div className="w-14 flex-shrink-0 flex-col items-center text-center">
            <img src={iconPestaSeru} className="h-14 w-14" />
            <p className="text-11">Promo Ramadan</p>
          </div>
          <div className="flex w-14 flex-col items-center text-center">
            <img src={iconMumpungMurah} className="h-14 w-14" />
            <p className="text-11">Mumpung Murah</p>
          </div>
          <div className="w-14 flex-shrink-0 flex-col items-center text-center">
            <img src={iconBeliLocal} className="h-14 w-24" />
            <p className="text-11">Beli Local</p>
          </div>
          <div className="w-14 flex-shrink-0 flex-col items-center text-center">
            <img src={iconTopUpDanTagihan} className="h-14 w-14" />
            <p className="text-11">Top-Up Tagihan</p>
          </div>
          <div className="w-14 flex-shrink-0 flex-col items-center text-center">
            <img src={iconKeuangan} className="h-14 w-14" />
            <p className="text-11">Keuangan</p>
          </div>
          <div className="w-14 flex-shrink-0 flex-col items-center text-center">
            <img src={iconTokoPediaSeru} className="h-14 w-14" />
            <p className="text-11">Tokopedia Seru</p>
          </div>
          <div className="w-14 flex-shrink-0 flex-col items-center text-center">
            <img src={iconLive} className="h-14 w-14" />
            <p className="text-11">Live Shopping</p>
          </div>
          <div className="w-14 flex-shrink-0 flex-col items-center text-center">
            <img src={iconPromoHariIni} className="h-14 w-14" />
            <p className="text-11">Promo Hari Ini</p>
          </div>
          <div className="w-14 flex-shrink-0 flex-col items-center text-center">
            <img src={iconFilmnDanMusic} className="h-14 w-14" />
            <p className="text-11">Film & Music</p>
          </div>
        </div>
        <div className="flex flex-row space-x-4 px-2">
          <div className="w-14 flex-shrink-0 flex-col items-center text-center">
            <img src={iconTiketDanHiburan} className="h-14 w-14" />
            <p className="text-11">Tiket & Hiburan</p>
          </div>
          <div className="flex w-14 flex-col items-center text-center">
            <img src={iconTokopediaNow} className="h-14 w-14" />
            <p className="text-11">Tokopedia Now</p>
          </div>
          <div className="w-14 flex-shrink-0 flex-col items-center text-center">
            <img src={iconFashion} className="h-14 w-24" />
            <p className="text-11">Fashion</p>
          </div>
          <div className="w-14 flex-shrink-0 flex-col items-center text-center">
            <img src={iconThrExtra} className="h-14 w-14" />
            <p className="text-11">Thr Extra Diskon</p>
          </div>
          <div className="w-14 flex-shrink-0 flex-col items-center text-center">
            <img src={iconTokpedFrama} className="h-14 w-14" />
            <p className="text-11">Tokopedia Frama</p>
          </div>
          <div className="w-14 flex-shrink-0 flex-col items-center text-center">
            <img src={iconElectronic} className="h-14 w-14" />
            <p className="text-11">Electronic</p>
          </div>
          <div className="w-14 flex-shrink-0 flex-col items-center text-center">
            <img src={iconBook} className="h-14 w-14" />
            <p className="text-11">Buku</p>
          </div>
          <div className="w-14 flex-shrink-0 flex-col items-center text-center">
            <img src={iconBola} className="h-14 w-14" />
            <p className="text-11">Olahraga</p>
          </div>
          <div className="w-14 flex-shrink-0 flex-col items-center text-center">
            <img src={iconAll} className="h-14 w-14" />
            <p className="text-11">Semua Kategori</p>
          </div>
        </div>
      </div>
      <div className="mx-5 mt-4 flex flex-row items-center justify-center">
        <img src={iconRamdhanLeft} className="h-[7.4rem]" />
        <img src={iconRamadhanCenter} className="h-[7.4rem]" />
        <img src={iconRamdhanRight} className="h-[7.4rem]" />
      </div>
      <div className="mx-4 mt-5">
        <div className="flex flex-row items-center justify-between">
          <div>
            <h1 className="font-open-sauce-one">
              <strong>Traktiran Pengguna Baru</strong>
            </h1>
            <div className="flex flex-row gap-2">
              <p className="text-14">Berakhir Dalam</p>
              <div className="bg-color3 text-12 flex items-center gap-1 rounded-full px-2 text-white">
                <img src={iconJam} className="h-4 w-4" />
                09:58:32
              </div>
            </div>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full shadow">
            <img src={chevronRight} className="h-5 w-5" />
          </div>
        </div>
        <div className="h-screen"></div>
      </div>
      <div className="xxl:w-[25rem] fixed bottom-0 flex h-12 w-full justify-between border bg-white px-5 py-1 shadow-lg md:w-[60%] lg:w-1/3 xl:w-[30%]">
        <div className="flex flex-col items-center gap-1">
          <img src={ramadanExtraSeru} className="h-6 w-6" />
          <p className="text-color2 text-11"> Home </p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <img src={iconFeed} className="h-6 w-6" />
          <p className="text-color1 text-11"> Feed </p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <img src={iconOfficialStore} className="h-6 w-6" />
          <p className="text-color1 text-11"> Official Store </p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <img src={iconLove} className="h-6 w-6" />
          <p className="text-color1 text-11"> Wishlist </p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <img src={iconTransaksi} className="h-6 w-6" />
          <p className="text-color1 text-11"> Transaksi </p>
        </div>
      </div>
    </>
  );
};

export default MobileDesain;
