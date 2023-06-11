import Link from 'next/link';
import React from 'react';

const Pageination = ({ allCoins, perPage, curPage, pageinate }) => {
  const onClickHandler = function (e) {
    pageinate(this);
  };
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allCoins / perPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination flex justify-center py-2  ">
      <nav aria-label=" Page navigation example mx-auto">
        <ul className="inline-flex items-center justify-center align-middle gap-y-1 -space-x-px flex-wrap sm:w-10/12 md:w-auto ">
          <li>
            <p
              className={`block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 `}
            >
              <span className="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </p>
          </li>
          {pageNumbers.map(pageIndex => {
            return (
              <li key={pageIndex}>
                <p
                  className={`cursor-pointer px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 ${
                    pageIndex === curPage ? 'activePage' : ''
                  }`}
                  onClick={onClickHandler.bind(pageIndex)}
                >
                  {pageIndex}
                </p>
              </li>
            );
          })}
          <li>
            <p className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 ">
              <span className="sr-only">Next</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pageination;
