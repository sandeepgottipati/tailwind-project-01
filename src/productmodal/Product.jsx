import headphoneImg from "../assets/headphone.png";
import ButtonGroup from "./buttongroup";
const Product = () => {
  return (
    <div className="bg-slate-100 min-h-screen flex justify-center items-center">
      <div className="card">
        <div>
          <img
            src={headphoneImg}
            alt="headphone"
            className="mx-auto w-60 hover:scale-105 duration-200"
          ></img>
        </div>
        <div className="flex flex-col space-y-6 ">
          {/* label and description container*/}
          <div className="flex flex-col text-center mb-3 space-y-3 md:text-left ">
            {/*the reason we added below div is to contain the free shipping without expanding the whole container when it is in mobile view */}
            <div>
              <div className="inline-block px-3 py-1 bg-black text-white rounded-full">
                Free shipping
              </div>
            </div>
            <div className="text-2xl font-normal max-w-sm">
              Razer Kraken Kitty Edt Gaming Headset Quartz
            </div>
            {/*price container */}
            <div className="flex flex-col text-center space-y-3 md:text-left">
              <p className=" line-through  text-gray-400 text-xs">$799</p>
              <p className=" text-3xl font-bold ">$599</p>
              <p className=" text-gray-400 text-xs">
                The offer is valid until October 12 or as long as stock lasts!
              </p>
            </div>
          </div>
          <ButtonGroup />
        </div>
      </div>
    </div>
  );
};
export default Product;
