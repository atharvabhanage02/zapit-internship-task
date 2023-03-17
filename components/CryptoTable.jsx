import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const CryptoTable = ({ item }) => {
  return (
    <tbody>
      <tr class=" border-black ">
        <td class="px-6 py-4 sm:px-2">{item.market_cap_rank}</td>
        <td scope="row" class="px-6 py-4 font-medium ">
          {item.name}: {item.id}
        </td>
        <td class="px-6 py-4 sm:px-2">${item.current_price}</td>
        <td
          className={`px-6 py-4 sm:px-2 font-bold flex items-center ${
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
          {item.price_change_percentage_24h}%
        </td>
        <td class="px-6 py-4">
          {Math.abs(Number(item.market_cap)) / 1.0e9 + "B"}
        </td>
      </tr>
    </tbody>
  );
};
export { CryptoTable };
