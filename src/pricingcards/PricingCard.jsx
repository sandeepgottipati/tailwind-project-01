import ItemOne from "./ItemOne";
import ItemTwo from "./ItemTwo";
const PricingCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-800">
      <div className="flex flex-col my-6 space-y-6 md:flex-row md:space-x-6 md:mx-6 md:space-y-0 md:my-0 ">
        <ItemOne />
        <ItemTwo />
        <div>Items</div>
      </div>
    </div>
  );
};
export default PricingCard;
