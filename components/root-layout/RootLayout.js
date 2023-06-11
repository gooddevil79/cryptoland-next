import React from 'react';
import Head from 'next/head';
import Footer from '../Footer';

const RootLayout = props => {
  return (
    <>
      <Head>
        <title>CryptoLand</title>
      </Head>
      <div className="container mx-auto ">{props.children}</div>
      <Footer />
    </>
  );
};

export default RootLayout;
