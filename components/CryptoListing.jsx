import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { fetchCryptoList } from "@/store/features/cryptoListingSlice";

export const CryptoListing = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.crypto);
  useEffect(() => {
    dispatch(fetchCryptoList());
  });
  return (
    <div className="border border-1 border-black w-full flex items-center flex-col py-4 ">
      <div className=" flex items-center p-1.5 border border-1 border-gray-400 rounded-2xl mb-8">
        <CiSearch className="" />
        <input
          type="text"
          className="outline-none border-none pl-1.5"
          name=""
          id=""
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
          {list.searchCryptoList.map((item) => {
            return (
              <tbody>
                <tr class=" border-black ">
                  <td class="px-6 py-4">{item.market_cap_rank}</td>
                  <td scope="row" class="px-6 py-4 font-medium ">
                    {item.name}
                  </td>
                  <td class="px-6 py-4">${item.current_price}</td>
                  <td
                    className={`px-6 py-4 font-bold flex items-center ${
                      item.price_change_percentage_24h > 0
                        ? "text-green-600 "
                        : "text-red-600 "
                    } `}
                  >
                    <span>
                      {item.price_change_percentage_24h > 0 ? (
                        <AiFillCaretUp />
                      ) : (
                        <AiFillCaretDown />
                      )}
                    </span>
                    {item.price_change_percentage_24h}
                  </td>
                  <td class="px-6 py-4">
                    {item.market_cap}
                    {/* {Math.abs(Number(item.market_cap)) / 1.0e9 + "B"} */}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};
