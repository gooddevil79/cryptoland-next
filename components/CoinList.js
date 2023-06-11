import React, { useEffect, useState } from 'react';
import CoinItem from './CoinItem';
import SearchForm from './SearchForm';
import Pageination from './pageination/Pageination';

const CoinList = props => {
  const { coins } = props; //# getting all coins through props

  const [searchValue, setSearchValue] = useState(''); //# define a state for searching form with initial value of nothing
  //* pagination states
  const [currentPage, setCurrentPage] = useState(1); //# define a state for figure which page user currenlt is with initial value one means user is at first page

  const [coinsPerPage] = useState(10); //# how many coins should be shown to user in each page
  useEffect(() => {
    window.scrollTo(top);
  }, [currentPage]);
  //* functions
  const pageinateHandler = function (newPage) {
    //# this function is handling switching to pages
    setCurrentPage(newPage);
  };
  const onSearchCoinsHandler = function (value) {
    //# this function handle user inputs in search bar
    setSearchValue(value);
  };
  //* guard cluase if there is no data at all
  if (coins.length === 0) {
    return (
      <p>Something must went wrong!! there is No Data, please try later :(</p>
    );
  }

  let showingCoins; //# showing coins based on condition (searched and filtered or show them as regular)

  if (searchValue) {
    //# if user enters smt in the input, state will change and based on this state, it will show the filtered (searched) coins
    showingCoins = coins.filter(coin => {
      return (
        coin.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
  }
  if (!searchValue) {
    //# in this case, if there is no searching act by user, it shows them in seprate pages as regualr and handle current page and perPage
    const lastCoinIndex = currentPage * coinsPerPage;
    const firstCoinIndex = lastCoinIndex - coinsPerPage;
    showingCoins = coins.slice(firstCoinIndex, lastCoinIndex);
  }
  return (
    <>
      <h1 className="text-4xl mb-2 text-center ">CryptoLand</h1>
      <SearchForm onSearch={onSearchCoinsHandler} value={searchValue} />
      <div className="list-scroll grid px-10 py-1 items-start border gap-2 w-10/12 mx-auto h-96 overflow-x-hidden overflow-y-scroll">
        {showingCoins.map(coin => {
          return <CoinItem key={coin.id} item={coin} />;
        })}
      </div>
      {!searchValue && (
        <Pageination
          allCoins={coins.length}
          perPage={coinsPerPage}
          pageinate={pageinateHandler}
          curPage={currentPage}
        />
      )}
    </>
  );
};

export default CoinList;
