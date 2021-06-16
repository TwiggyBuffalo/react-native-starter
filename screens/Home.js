import React from 'react';
import { Alert } from 'react-native';
import { Text, Button } from '@ui-kitten/components';

import PageWrapper from '../components/PageWrapper';

const styles = {
  subheading: {
    marginVertical: 20,
  },
  button: {
    marginVertical: 30,
  },
};

const HomeScreen = () => {
  const createThreeButtonAlert = () =>
    Alert.alert(
      'Warning',
      'Confirm delete?',
      [
        {
          text: 'Yes',
          onPress: () => console.log('Yes pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'No', onPress: () => console.log('No Pressed') },
      ],
      { cancelable: false },
    );
  return (
    <PageWrapper>
      <Text category="h1">Home</Text>
      <Button style={styles.button} onPress={createThreeButtonAlert}>
        Show Alert
      </Button>
      <Text>Made with ❤️ by TwiggyBuffalo</Text>
    </PageWrapper>
  );
};

export default HomeScreen;
