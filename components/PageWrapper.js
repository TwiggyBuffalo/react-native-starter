import React from 'react';
import { Layout } from '@ui-kitten/components';

const style = {
  height: '100%',
  paddingTop: 70,
  paddingHorizontal: 30,
};

const PageWrapper = ({ children }) => {
  return <Layout style={style}>{children}</Layout>;
};

export default PageWrapper;
