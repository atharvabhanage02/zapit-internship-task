const searchHandler = (
  setSearchInput,
  searchQuery,
  cryptoLists,
  dispatch,
  searchCrypto
) => {
  setSearchInput(searchQuery);
  if (searchQuery !== "") {
    const newUsers = cryptoLists.filter((item) => {
      return Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    });
    dispatch(searchCrypto(newUsers));
  } else {
    dispatch(searchCrypto(cryptoLists));
  }
};
export { searchHandler };
