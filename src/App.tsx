import { Header, KategoriAndTopUp, MobileDesain, SimpleSlider } from "./component";

function App() {
  return (
    <div>
      <div className="xxl:hidden large:flex hidden h-full flex-col lg:flex">
        <Header />
        <SimpleSlider />
        <KategoriAndTopUp />
      </div>
      <div className="xxl:flex large:hidden flex h-full flex-col lg:hidden">
        <div className="flex justify-center">
          <div className="xxl:w-[25rem] w-full rounded-md shadow-md md:w-[60%] lg:w-1/3 xl:w-[30%]">
            <MobileDesain />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
