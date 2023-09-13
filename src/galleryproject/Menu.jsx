import MenuItem from "./MenuItem";
const Menu = () => {
  const itemList = ["Vector", "Illustrations", "Images", "Icons"];
  return (
    <div className="flex flex-col space-y-3 justify-center items-center md:space-y-0 md:space-x-3 md:justify-end md:flex-row md:mb-24 ">
      {itemList.map((item, idx) => {
        return <MenuItem title={item} key={idx}></MenuItem>;
      })}
    </div>
  );
};
export default Menu;
