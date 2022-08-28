import {View} from 'react-native';
import React, {useState} from 'react';
import Profile from '../components/Profile';
import EditImage from '../components/EditImage';
import defaultStyles from '../default-styles';

const HomeScreen = () => {
  const [isEditImageMode, setEditImageMode] = useState(false);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);

  const _toggleImageEditMode = () => {
    setEditImageMode(st => !st);
  };

  const _handlePressDone = (newScale, newRotation) => {
    console.log(newScale);
    console.log(newRotation);
    setScale(newScale);
    setRotation(newRotation);
  };

  return (
    <View style={defaultStyles.flex1}>
      {isEditImageMode ? (
        <EditImage
          onPressBack={_toggleImageEditMode}
          onPressDone={_handlePressDone}
        />
      ) : (
        <Profile
          scale={scale}
          rotation={rotation}
          onPressUpload={_toggleImageEditMode}
        />
      )}
    </View>
  );
};

export default HomeScreen;
