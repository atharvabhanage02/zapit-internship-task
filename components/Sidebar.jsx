const Sidebar = () => {
  return (
    <div className=" w-1/5 border border-1 border-black p-4 ">
      <div className="flex justify-between text-lg font-bold    ">
        <p className="mb-2 ">Filters</p>
        <p className="underline underline-offset-4 cursor-pointer">Clear</p>
      </div>
      <div>
        <p className="mb-2 font-bold ">Price</p>
        <label className="input-select flex items-center">
          <input type="radio" />
          <p className="pl-2">Price - Low to High</p>
        </label>
        <label class="input-select flex">
          <input type="radio" />
          <p className="pl-2">Price - High to Low</p>
        </label>
      </div>
      <div className="">
        <p className="mt-2 mb-2 font-bold">Market cap</p>
      </div>
    </div>
  );
};
export { Sidebar };
