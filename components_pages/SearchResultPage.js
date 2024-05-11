import React from 'react';
import { useLocation } from 'react-router-dom';
import TemplePage from './TemplePage';

const SearchResultsPage = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q');

  return (
    <div>
      {/* <Header /> */}
      {/* <h2>Search Results</h2> */}
      <TemplePage searchQuery={searchQuery} />
    </div>
  );
};

export default SearchResultsPage;
