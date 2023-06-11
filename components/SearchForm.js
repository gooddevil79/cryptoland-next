import React from 'react';

const SearchForm = props => {
  const onChangeHandler = function (e) {
    props.onSearch(e.target.value);
  };
  return (
    <div className="mb-4">
      <input
        className="shadow appearance-none border rounded w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline block mx-auto"
        id="coinInput"
        type="text"
        placeholder="Search..."
        value={props.searchValue}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchForm;
