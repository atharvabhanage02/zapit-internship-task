
const CryptoTable = ({ item }) => {
  return (
    <tbody>
      <tr class=" border-black ">
        <td class="px-6 py-4 sm:px-2">{item.rank}</td>
        <td scope="row" class="px-6 py-4 font-medium ">
          {item.name}
        </td>
        <td class="px-6 py-4 sm:px-2">${item.rate}</td>
      </tr>
    </tbody>
  );
};
export { CryptoTable };
