import { BsArrowRightShort } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import waterImg from "../assets/login/image.jpg";
const LoginPage = () => {
  return (
    <div className="bg-rose-50 h-screen flex justify-center items-center">
      <div className="relative flex flex-col m-6  bg-white rounded-3xl shadow-3xl overflow-hidden   md:flex-row">
        <div className="p-6 md:p-20 ">
          <div className="text-left flex flex-col ">
            <h2 className="text-4xl font-bold font-sans mb-5">Log In</h2>
            <p className="text-gray-500 max-w-sm font-light mb-12 ">
              Log in to your account to upload or download pictures,videos or
              music.
            </p>
          </div>

          <input
            type="text"
            placeholder="Enter your email address"
            className="w-full border border-gray-300 px-2 py-6 rounded-md text-lg focus:outline focus:outline-pink-200 placeholder:text-gray-300 placeholder:p-4"
          />

          <div className="flex flex-col justify-center items-center mt-6  space-y-8 md:flex-row md:space-y-0 md:space-x-10 md:justify-between">
            <span className="block text-cyan-700 text-xl">Forgot Password</span>
            <button className="w-full md:w-1/2 px-10 py-6 rounded-lg shadow-md text-xl bg-cyan-600 text-white  duration-500 hover:-translate-y-1 hover:shadow-lg hover:opacity-80 ">
              <span className="">Next </span>
              <BsArrowRightShort className="inline text-2xl h-10" />
            </button>
          </div>
          <div className="border-b border-gray-400 mt-12"></div>
          <p className="text-sm text-center text-gray-400 mt-12 md:text-lg">
            or log in with
          </p>
          <div className="flex flex-col space-y-8 mt-6 md:flex-row md:justify-between md:space-y-0 md:space-x-4">
            <button className="w-full border border-gray-300  px-10 py-2 flex items-center rounded-md md:w-auto hover:-translate-y-1 hover:opacity-80 hover:shadow-lg ">
              <span className="inline-block">
                <FaFacebook
                  className=" text-center  text-blue-500 "
                  size="42px"
                />
              </span>

              <span className="inline-block text-3xl ml-3 ">Facebook</span>
            </button>
            <button className="w-full border border-gray-300  px-10 py-2 flex items-center rounded-md md:w-auto ">
              <span className="inline-block">
                <FcGoogle
                  className=" text-center  text-blue-500 "
                  size="42px"
                />
              </span>

              <span className="inline-block text-3xl ml-3 ">Google</span>
            </button>
          </div>
        </div>

        <img src={waterImg} alt="" className="w-[430px] hidden md:block" />

        <div className="absolute w-6 h-6 rounded-full bg-gray-300 top-8 right-4 text-center duration-300 hover:bg-gray-600 ">
          X
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
