import React from 'react';
import {Alert} from 'react-native';
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

const HomeScreen = () => {
  const createThreeButtonAlert = () =>
    Alert.alert(
      'Hello World!',
      'Alert example',
      [
        {
          text: 'Hello',
          onPress: () => console.log('Hello pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'World!', onPress: () => console.log('World! Pressed')},
      ],
      {cancelable: false},
    );
  return (
    <Layout style={styles.layout}>
      <Text category="h1">Welcome to</Text>
      <Text category="h4" style={styles.subheading}>
        React Native Starter Project
      </Text>
      <Text>This project is built using UI-Kitten v5.0</Text>
      <Button style={styles.button} onPress={createThreeButtonAlert}>
        Click me!
      </Button>
      <Text style={styles.caption}>Made with ❤️ by TwiggyBuffalo</Text>
    </Layout>
  );
};

export default HomeScreen;
