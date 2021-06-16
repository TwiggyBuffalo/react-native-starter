import React from 'react';
import { Text } from '@ui-kitten/components';
import PageWrapper from '../components/PageWrapper';

import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  return (
    <PageWrapper>
      <Text category="h1">Search</Text>
      <SearchBar />
    </PageWrapper>
  );
};

export default SearchScreen;
