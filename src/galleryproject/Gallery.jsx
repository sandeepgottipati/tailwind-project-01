import ImageContainer from "./ImageContainer";
import Menu from "./Menu";
import Search from "./Search";

const Gallery = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cyan-50">
      <div className="bg-white shadow-2xl rounded-3xl m-3 p-6  space-y-10 md:p-40">
        <Menu />
        <Search />
        <ImageContainer />
      </div>
    </div>
  );
};
export default Gallery;
