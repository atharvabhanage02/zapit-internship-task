import {
  filterByCategory,
  sortHighToLow,
  sortLowToHigh,
} from "@/store/features/cryptoListingSlice";
import { useDispatch } from "react-redux";
const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className=" w-1/5 border-r-2 p-4 flex flex-col sm:w-full sm:border-0">
      <div className="flex justify-between text-lg font-bold">
        <p className="mb-2 ">Filters</p>
      </div>
      <div className="sm:flex sm:flex-row sm:gap-4">
        <div>
          <p className="mb-2 font-bold ">Price</p>
          <label className="input-select flex items-center">
            <input
              type="radio"
              name="SORT_BY"
              onChange={() => dispatch(sortLowToHigh())}
            />
            <p className="pl-2">Price - Low to High</p>
          </label>
          <label class="input-select flex">
            <input
              type="radio"
              name="SORT_BY"
              onChange={() => dispatch(dispatch(sortHighToLow()))}
            />
            <p className="pl-2">Price - High to Low</p>
          </label>
        </div>
        <div className="">
          <p className="mt-2 mb-2 font-bold">Categories</p>
          <label className="input-select flex items-center">
            <input
              type="radio"
              name="SORT_BY_CATEGORIES"
              onChange={() => dispatch(filterByCategory("stablecoins"))}
            />
            <p className="pl-2">Stable coins</p>
          </label>
          <label className="input-select flex items-center">
            <input
              type="radio"
              name="SORT_BY_CATEGORIES"
              onChange={() =>
                dispatch(filterByCategory("smart_contract_platforms"))
              }
            />
            <p className="pl-2">Smart Contract Platforms</p>
          </label>
          <label class="input-select flex">
            <input
              type="radio"
              name="SORT_BY_CATEGORIES"
              onChange={() =>
                dispatch(dispatch(filterByCategory("asset_backed_tokens")))
              }
            />
            <p className="pl-2">Asset backed tokens</p>
          </label>
          <label class="input-select flex">
            <input
              type="radio"
              name="SORT_BY_CATEGORIES"
              onChange={() => dispatch(dispatch(filterByCategory("cex")))}
            />
            <p className="pl-2">Cex</p>
          </label>
          <label class="input-select flex">
            <input
              type="radio"
              name="SORT_BY_CATEGORIES"
              onChange={() => dispatch(dispatch(filterByCategory("meme")))}
            />
            <p className="pl-2">Meme</p>
          </label>
          <label class="input-select flex">
            <input
              type="radio"
              name="SORT_BY_CATEGORIES"
              onChange={() => dispatch(dispatch(filterByCategory("wallets")))}
            />
            <p className="pl-2">Wallet</p>
          </label>
        </div>
      </div>
    </div>
  );
};
export { Sidebar };
