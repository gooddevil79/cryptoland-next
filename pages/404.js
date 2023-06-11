import React from 'react';

const notFound = () => {
  return (
    <div>
      <h1 className="text-4xl">
        Sorry something went wrong!! Please check your connection
        <br /> (USING VPN MAY WORKS, OTHERWISE
        <span className="font-bold">API</span>
        IS BROKEN) ☹️
      </h1>
      <p>I&apos;ll fix this as soon as possible 😉</p>
    </div>
  );
};

export default notFound;
