import axios from 'axios';

export const getCoins = async function () {
  const response = await axios
    .get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false&locale=en`
    )
    .catch(error => {
      return 'error';
    });
  if (response === 'error') {
    return 'FAILD';
  }
  if (response.statusText === 'OK') {
    return response.data;
  }
};
