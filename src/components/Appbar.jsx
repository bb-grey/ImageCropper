import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {getNavbarHeight} from '../utils/ui-helpers';

const Appbar = ({
  leadingText,
  title,
  trailingText,
  onPressLeading,
  onPressTrailing,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.leadingContainer}
        onPress={onPressLeading}>
        <Text style={styles.leadingText}>{leadingText}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      {trailingText && (
        <TouchableOpacity
          onPress={onPressTrailing}
          style={styles.trailingContainer}>
          <Text style={styles.leadingText}>{trailingText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    height: getNavbarHeight(),
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    zIndex: 50000,
  },
  leadingContainer: {
    position: 'absolute',
    left: 16,
  },
  trailingContainer: {
    position: 'absolute',
    right: 16,
  },
  leadingText: {
    fontSize: 16,
    color: '#000',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
});

export default Appbar;
