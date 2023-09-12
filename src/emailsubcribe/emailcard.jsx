import emailImg from "../assets/image.jpg";
const EmailCard = () => {
  return (
    <div className="h-screen  bg-zinc-700 flex justify-center items-center ">
      <div className="flex flex-col md:flex-row  bg-zinc-800 p-2 mx-6 rounded-2xl">
        <div className="rounded-l-xl">
          <img
            src={emailImg}
            alt="image"
            className="object-center w-full rounded-xl h-80 md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl md:object-cover duration-200"
          />
        </div>
        <div className=" p-6 md:p-12 ">
          <h2 className="font-serif text-xl text-white font-medium text-center md:text-left">
            Get diet and fitness tips in your inbox
          </h2>

          <p className="max-w-xs my-4 leading-5 tracking-wide text-center text-white md:text-left">
            Eat Better and exercise better. Sign up for the{" "}
            <span className="block">Diet&Fitness newsletter.</span>
          </p>
          <div className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
            <input
              type="text"
              className=" p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none "
              placeholder="Enter your email Address"
            />
            <button className="px-5 py-3 bg-lime-500 rounded-md text-xs text-zinc-800 hover:bg-lime-700 hover:text-white duration-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmailCard;
