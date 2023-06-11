import Image from 'next/image';
import LazyResult from 'postcss/lib/lazy-result';
import React from 'react';
import cookie from './../public/123.jpg';
const CoinItem = function (props) {
  const {
    symbol,
    name,
    image,
    current_price,
    market_cap,
    market_cap_rank,
    price_change_percentage_24h,
  } = props.item;
  const formattedPrice = current_price.toLocaleString('en');
  const formattedPriceChanges =
    price_change_percentage_24h?.toLocaleString('en');
  const formattedMarketCap = market_cap.toLocaleString('en');
  return (
    <div className=" shadow-lg border p-2 rounded-md grid grid-cols-5 items-center transition-all hover:border-y-cyan-600 hover:scale-105">
      <div className="mr-auto flex items-center justify-center gap-3  ">
        <div className="w-10 flex  ">
          <Image
            src={image}
            alt={symbol}
            className="w-full"
            width={50}
            height={50}
            loading="lazy"
            placeholder="blur"
            blurDataURL={image}
          />
        </div>
        <h1 className="font-semibold text-lg text-left mr-auto ">{name}</h1>
      </div>
      <p className="mx-auto w-14 text-left ">{symbol.toUpperCase()}</p>
      <p>{formattedPrice} $</p>
      <p
        className={
          formattedPriceChanges > 0 ? 'text-green-500' : 'text-red-500'
        }
      >
        {formattedPriceChanges}%
      </p>
      <p>MP : {formattedMarketCap}</p>
    </div>
  );
};

export default CoinItem;
