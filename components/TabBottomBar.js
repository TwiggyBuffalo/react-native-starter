import React from 'react';
import {StyleSheet} from 'react-native';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';

const PersonIcon = (props) => <Icon {...props} name="person-outline" />;
// const HouseIcon = (props) => <Icon {...props} name="house-outline" />;
const BellIcon = (props) => <Icon {...props} name="bell-outline" />;
const EmailIcon = (props) => <Icon {...props} name="email-outline" />;

const useBottomNavigationState = (initialState = 0) => {
  const [selectedIndex, setSelectedIndex] = React.useState(initialState);
  return {selectedIndex, onSelect: setSelectedIndex};
};

const BottomNavigationAccessoriesShowcase = () => {
  const topState = useBottomNavigationState();

  return (
    <BottomNavigation style={styles.bottomNavigation} {...topState}>
      <BottomNavigationTab title="HOME" icon={PersonIcon} />
      <BottomNavigationTab title="SEARCH" icon={EmailIcon} />
      <BottomNavigationTab title="ORDERS" icon={BellIcon} />
      <BottomNavigationTab title="ACCOUNT" icon={PersonIcon} />
    </BottomNavigation>
  );
};

export default BottomNavigationAccessoriesShowcase;

const styles = StyleSheet.create({
  bottomNavigation: {
    paddingBottom: 24,
  },
});
