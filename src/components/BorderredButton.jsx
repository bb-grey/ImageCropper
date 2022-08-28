import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const BorderredButton = ({color = '#0d6efd', onPress, title}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {borderColor: color}]}
      onPress={onPress}>
      <Text style={[{color: color}, styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default BorderredButton;
