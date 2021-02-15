import React from 'react';
import {Layout, Text, Button} from '@ui-kitten/components';

const styles = {
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 100,
  },
  subheading: {
    marginVertical: 20,
  },
  button: {
    marginVertical: 50,
  },
  caption: {
    marginTop: 100,
  },
};

const AccountScreen = () => {
  return (
    <Layout style={styles.layout}>
      <Text category="h1">Welcome to</Text>
      <Text category="h4" style={styles.subheading}>
        React Native Starter Project
      </Text>
      <Text>Account</Text>
      <Button style={styles.button}>Cool cool!</Button>
      <Text style={styles.caption}>Made with ❤️ by TwiggyBuffalo</Text>
    </Layout>
  );
};

export default AccountScreen;
