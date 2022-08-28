import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';

const STATIC_IMAGE =
  'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-b-170811.jpg&fm=jpg';

const MaskElement = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    width: Dimensions.get('window').width - 100,
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default MaskElement;
