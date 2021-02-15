import React from 'react';
import {StyleSheet} from 'react-native';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';

const PersonIcon = (props) => <Icon {...props} name="person" />;
const CarIcon = (props) => <Icon {...props} name="car" />;
const HouseIcon = (props) => <Icon {...props} name="home" />;
const SearchIcon = (props) => <Icon {...props} name="search" />;

const useBottomNavigationState = ({navigation, state}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const onSelect = (index) => {
    navigation.navigate(state.routeNames[index]);
    setSelectedIndex(index);
  };
  return {selectedIndex, onSelect};
};

const BottomNavigationAccessoriesShowcase = ({navigation, state}) => {
  const topState = useBottomNavigationState({navigation, state});

  return (
    <BottomNavigation style={styles.bottomNavigation} {...topState}>
      <BottomNavigationTab title="HOME" icon={HouseIcon} />
      <BottomNavigationTab title="SEARCH" icon={SearchIcon} />
      <BottomNavigationTab title="ORDERS" icon={CarIcon} />
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
