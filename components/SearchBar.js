import React, { useState } from 'react';
import { TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Icon, Input } from '@ui-kitten/components';

const SearchBar = () => {
  const [value, setValue] = useState('');

  const renderIcon = (props) => (
    <TouchableWithoutFeedback>
      <Icon {...props} name="search" />
    </TouchableWithoutFeedback>
  );

  return (
    <Input
      style={styles.input}
      value={value}
      placeholder="Start typing to search"
      accessoryRight={renderIcon}
      onChangeText={(nextValue) => setValue(nextValue)}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    paddingVertical: 20,
  },
});

export default SearchBar;
