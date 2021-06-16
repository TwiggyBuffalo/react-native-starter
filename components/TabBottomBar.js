import React from 'react';
import { StyleSheet } from 'react-native';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';

import tabIcons from '../config/tab-icons';

const TabIcon = ({ name, ...props }) => <Icon {...props} name={name} />;

const useBottomNavigationState = ({ navigation, state }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const onSelect = (index) => {
    navigation.navigate(state.routeNames[index]);
    setSelectedIndex(index);
  };
  return { selectedIndex, onSelect };
};

const BottomNavigationAccessoriesShowcase = ({ navigation, state }) => {
  const topState = useBottomNavigationState({ navigation, state });

  return (
    <BottomNavigation style={styles.bottomNavigation} {...topState}>
      {tabIcons.map(({ title, icon }, i) => (
        <BottomNavigationTab
          key={`${title}_${icon}_${i}`}
          title={title}
          icon={(props) => <TabIcon name={icon} {...props} />}
        />
      ))}
    </BottomNavigation>
  );
};

export default BottomNavigationAccessoriesShowcase;

const styles = StyleSheet.create({
  bottomNavigation: {
    paddingBottom: 24,
  },
});
