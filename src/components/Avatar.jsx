import React from 'react';
import {Image, View} from 'react-native';

const Avatar = ({borderRadius = 100, imageProps}) => {
  return (
    <View
      style={{
        width: borderRadius,
        height: borderRadius,
        borderRadius: borderRadius,
        overflow: 'hidden',
        backgroundColor: 'red',
      }}>
      <Image
        {...imageProps}
        source={imageProps.path ? imageProps.path : {uri: imageProps.uri}}
        resizeMode="cover"
      />
    </View>
  );
};

export default Avatar;
