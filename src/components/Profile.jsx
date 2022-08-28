import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Images} from '../assets';
import defaultStyles from '../default-styles';
import Appbar from './Appbar';
import Avatar from './Avatar';
import BorderredButton from './BorderredButton';
import VerticalSpacer from './VerticalSpacer';

const Profile = ({onPressUpload, scale, rotation}) => {
  return (
    <View style={defaultStyles.flex1}>
      <Appbar leadingText="Back" title="Edit Profile" />
      <VerticalSpacer />
      <View style={defaultStyles.container}>
        <View style={styles.imageEditContainer}>
          <Avatar
            imageProps={{
              path: Images.car,
              width: '100%',
              height: '100%',
              transform: [{scale: scale}, {rotate: rotation}],
              style: styles.image,
            }}
            borderRadius={120}
          />
          <VerticalSpacer />
          <BorderredButton onPress={onPressUpload} title="Upload" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageEditContainer: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Profile;
