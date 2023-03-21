const searchHandler = (
  setSearchInput,
  searchQuery,
  cryptoLists,
  dispatch,
  searchCrypto
) => {
  setSearchInput(searchQuery);
  if (searchQuery !== "") {
    const newUsers = cryptoLists.filter((item) =>
      item.name.toLowerCase().includes(searchQuery)
    );
    dispatch(searchCrypto(newUsers));
  } else {
    dispatch(searchCrypto(cryptoLists));
  }
};
export { searchHandler };
