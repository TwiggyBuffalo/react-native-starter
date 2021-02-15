import 'react-native-gesture-handler';
import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import theme from './config/theme';

import TabBottomBar from './components/TabBottomBar';

import HomeScreen from './screens/Home';

const {Navigator, Screen} = createBottomTabNavigator();

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
      <NavigationContainer>
        <Navigator tabBar={(props) => <TabBottomBar {...props} />}>
          <Screen name="Home" component={HomeScreen} />
        </Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  </>
);
