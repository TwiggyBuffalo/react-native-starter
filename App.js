import 'react-native-gesture-handler';
import React, {useState} from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import theme from './config/theme';

import TabBottomBar from './components/TabBottomBar';

import HomeScreen from './screens/Home';
import SearchScreen from './screens/Search';
import OrdersScreen from './screens/Orders';
import AccountScreen from './screens/Account';

const {Navigator, Screen} = createBottomTabNavigator();

export default () => {
  const tabState = useState(0);
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
        <NavigationContainer>
          <Navigator tabBar={(props) => <TabBottomBar {...props} />}>
            <Screen name="Home" component={HomeScreen} />
            <Screen name="Search" component={SearchScreen} />
            <Screen name="Orders" component={OrdersScreen} />
            <Screen name="Account" component={AccountScreen} />
          </Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
