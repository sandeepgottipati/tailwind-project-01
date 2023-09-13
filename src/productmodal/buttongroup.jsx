import weightImg from "../assets/weight.png";
import heartImg from "../assets/heart.png";
const ButtonGroup = () => {
  return (
    <>
      <div className="group">
        <button className="w-full bg-blue-700 text-white border-b-8 border-blue-700 rounded-lg  transition-all duration-150 group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-blue-700 group-hover:shadow-lg">
          <div className="px-8 py-4 bg-blue-500 rounded-lg duration-150 group-hover:bg-blue-700 ">
            Add to Cart
          </div>
        </button>
      </div>
      <div className="flex items-center space-x-3 group">
        <div className="h-3 w-3 bg-green-400 rounded-full group-hover:animate-ping"></div>
        <div className="text-sm">50+pcs. in stock.</div>
      </div>
      <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
        <button className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
          <img src={weightImg} alt="weighticon" className="w-8" />
          <span>Add to Cart</span>
        </button>
        <button className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 shadow-sm rounded-lg hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
          <img src={heartImg} alt="heart" className="w-8"></img>
          <span>Add to wishlist</span>
        </button>
      </div>
    </>
  );
};
export default ButtonGroup;
