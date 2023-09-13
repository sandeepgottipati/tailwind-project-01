import imageOne from "../assets/gallery/image1.jpg";
import imageTwo from "../assets/gallery/image2.jpg";
import { HiBookmark } from "react-icons/hi2";
const ImageContainer = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {/*Image-1 */}
      <div className="relative group">
        <img src={imageOne} className="w-72" alt="personimage"></img>
        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 group-hover:bg-opacity-60">
          <div className="flex justify-between w-full">
            <div className="font-normal text-center">
              <p className="text-sm">Abstract Painting</p>
              <p className="text-xs">245 likes -35 shares</p>
            </div>
            <div className="flex items-center">
              <HiBookmark className="text-lg hover:text-blue-500" />
            </div>
          </div>
        </div>
      </div>
      {/*Image 2 */}
      <div className="relative group">
        <img src={imageTwo} className="w-72" alt="window"></img>
        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 opacity-0 bg-black group-hover:opacity-100 group-hover:bg-opacity-40">
          <div className="flex justify-between">
            <div className="font-normal">
              <p className="text-sm">Abstract Painting</p>
              <p className="text-xs">200 Likes -35 Shares</p>
            </div>
            <div className="flex items-center">
              <HiBookmark className="text-lg hover:text-blue-500" />
            </div>
          </div>
        </div>
      </div>
      {/*Image 3 */}
      <div className="relative group">
        <img src={imageOne} className="w-72" alt="personimage"></img>
        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 group-hover:bg-opacity-60">
          <div className="flex justify-between w-full">
            <div className="font-normal text-center">
              <p className="text-sm">Abstract Painting</p>
              <p className="text-xs">245 likes -35 shares</p>
            </div>
            <div className="flex items-center">
              <HiBookmark className="text-lg hover:text-blue-500" />
            </div>
          </div>
        </div>
      </div>
      {/*Image 4 */}
      <div className="relative group">
        <img src={imageOne} className="w-72" alt="personimage"></img>
        <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 group-hover:bg-opacity-60">
          <div className="flex justify-between w-full">
            <div className="font-normal text-center">
              <p className="text-sm">Abstract Painting</p>
              <p className="text-xs">245 likes -35 shares</p>
            </div>
            <div className="flex items-center">
              <HiBookmark className="text-lg hover:text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImageContainer;
