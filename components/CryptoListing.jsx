import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import {
  fetchCryptoList,
  searchCrypto,
} from "@/store/features/cryptoListingSlice";
import { CryptoTable } from "./CryptoTable";
import { searchHandler } from "@/Utils/searchHandler";

export const CryptoListing = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.crypto);
  useEffect(() => {
    dispatch(fetchCryptoList());
  }, []);

  return (
    <div className="w-full flex items-center flex-col py-4 sm:items-start">
      <div className=" flex items-center p-1.5 border border-1 border-gray-400 rounded-2xl mb-8 sm:m-auto sm:mb-2 ">
        <CiSearch className="" />
        <input
          type="text"
          className="outline-none border-none pl-1.5"
          value={searchInput}
          onChange={(e) =>
            searchHandler(
              setSearchInput,
              e.target.value,
              list.cryptoLists,
              dispatch,
              searchCrypto
            )
          }
          placeholder="Search"
        />
      </div>
      {list.searchCryptoList.length < 1 && <p>Loading...</p> ? (
        <p>No Results</p>
      ) : null}
      <div class="relative w-9/12 mt-2 sm:w-[210px]">
        <table class="w-full text-sm text-left border border-1 border-black">
          <thead class="text-xs border border-1 border-black uppercase ">
            <tr>
              <th scope="col" class="px-6 py-3 sm:px-3">
                Rank
              </th>
              <th scope="col" class="px-6 py-3 sm:px-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3 sm:px-3">
                Price
              </th>
            </tr>
          </thead>
          {searchInput.length > 1
            ? list.searchCryptoList.map((item) => <CryptoTable item={item} />)
            : list.cryptoLists.map((item) => <CryptoTable item={item} />)}
        </table>
      </div>
    </div>
  );
};
