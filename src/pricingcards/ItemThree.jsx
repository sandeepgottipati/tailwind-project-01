const ItemThree = () => {
  return (
    <div className="bg-slate-700 rounded-xl text-white">
      <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
        <span className="block uppercase text-center text-sm font-thin tracking-wider ">
          premium
        </span>
        <h2 className="font-serif text-center mt-5  text-2xl">2TB</h2>
        <h3 className="text-center  font-light mt-2 text-xs">$8.99/month</h3>
        <div className="flex justify-center">
          <a
            href="#"
            className="inline-block px-10 py-3 my-8 text-center border border-violet-600 rounded-lg duration-200 hover:bg-violet-800 hover:border-violet-800"
          >
            Purchase
          </a>
        </div>
      </div>
      <div className="border-t border-slate-700"></div>
      <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
        <div className="flex flex-col space-y-2 justify-center text-center font-light text-[0.75rem]">
          <p>100GB storage</p>
          <p>Option to add members</p>
          <p>Extra member benefits</p>
        </div>
      </div>
    </div>
  );
};
export default ItemThree;
