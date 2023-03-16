import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import {
  fetchCryptoList,
  searchCrypto,
} from "@/store/features/cryptoListingSlice";
import { CryptoTable } from "./CryptoTable";

export const CryptoListing = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.crypto);
  useEffect(() => {
    dispatch(fetchCryptoList());
  }, []);

  const searchHandler = (searchQuery) => {
    setSearchInput(searchQuery);
    if (searchQuery !== "") {
      const newUsers = list.cryptoLists.filter((item) =>
        item.name.toLowerCase().includes(searchQuery)
      );
      dispatch(searchCrypto(newUsers));
    } else {
      dispatch(searchCrypto(list.cryptoLists));
    }
  };
  return (
    <div className="border border-1 border-black w-full flex items-center flex-col py-4 ">
      <div className=" flex items-center p-1.5 border border-1 border-gray-400 rounded-2xl mb-8">
        <CiSearch className="" />
        <input
          type="text"
          className="outline-none border-none pl-1.5"
          value={searchInput}
          onChange={(e) => searchHandler(e.target.value)}
          placeholder="Search"
        />
      </div>
      {list.searchCryptoList.length < 1 && <p>Loading...</p> ? (
        <p>No Results</p>
      ) : null}
      <div class="relative w-9/12 mt-2">
        <table class="w-full text-sm text-left border border-1 border-black">
          <thead class="text-xs border border-1 border-black uppercase ">
            <tr>
              <th scope="col" class="px-6 py-3">
                Rank
              </th>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Price Change
              </th>
              <th scope="col" class="px-6 py-3">
                Market Cap
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
