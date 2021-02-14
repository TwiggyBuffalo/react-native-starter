import React from 'react';
import {Layout, Text, Button} from '@ui-kitten/components';

const styles = {
  layout: {flex: 1, justifyContent: 'center', alignItems: 'center'},
};

const HomeScreen = () => (
  <Layout style={styles.layout}>
    <Text category="h1">HOME</Text>
    <Button>Click me!</Button>
  </Layout>
);

export default HomeScreen;
