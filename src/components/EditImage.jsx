import MaskedView from '@react-native-masked-view/masked-view';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {Images} from '../assets';
import defaultStyles from '../default-styles';
import Appbar from './Appbar';
import VerticalSpacer from './VerticalSpacer';

const EditImage = ({onPressDone, onPressBack}) => {
  const imageScale = useRef(new Animated.Value(1)).current;
  const [value, setValue] = useState(1);

  useEffect(() => {
    imageScale.addListener(val => setValue(val.value));
  }, []);

  const [rotation, setRotation] = useState(0);

  const _handlePinchStateChange = event => {
    if (event.scale < 0.5) {
      return;
    }
    Animated.timing(imageScale, {
      toValue: event.scale,
      duration: 1,
      useNativeDriver: true,
    }).start();
    // setImageScale(previouesScale * event.scale);
  };

  const _handlePinchEnd = event => {
    // setPreviousScale(imageScale);
  };

  const pinchGesture = Gesture.Pinch()
    .onUpdate(_handlePinchStateChange)
    .onEnd(_handlePinchEnd);

  const rotationGesture = Gesture.Rotation()
    .onChange(event => {})
    .onEnd(event => {
      setRotation(event.rotation);
    });

  const gesture = Gesture.Simultaneous(rotationGesture, pinchGesture);

  const _handleDonePress = () => {
    console.log('DONE PRESS');
    onPressDone(value, rotation);
    onPressBack();
  };

  return (
    <GestureHandlerRootView style={defaultStyles.flex1}>
      <Appbar
        onPressLeading={onPressBack}
        leadingText="Back"
        title="Edit Image"
        trailingText="Done"
        onPressTrailing={_handleDonePress}
      />
      <VerticalSpacer />

      <View style={[defaultStyles.container, styles.container]}>
        {/* <View style={styles.bg}></View> */}
        <MaskedView
          style={styles.maskView}
          removeClippedSubviews={true}
          maskElement={
            <View style={styles.maskElement}>
              <View style={styles.box}></View>
            </View>
          }>
          <View style={{flex: 1, height: '100%', backgroundColor: 'red'}} />

          <View style={styles.imageContainer}>
            <GestureDetector gesture={gesture}>
              <Animated.Image
                source={Images.car}
                width="100%"
                height="100%"
                style={[
                  styles.image,
                  {
                    transform: [
                      {scale: imageScale},
                      {rotateZ: `${(rotation / Math.PI) * 180}deg`},
                    ],
                  },
                ]}
                resizeMode="contain"
              />
            </GestureDetector>
          </View>
        </MaskedView>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  // imageEditContainer: {
  //   backgroundColor: '#000',
  // },
  container: {
    // backgroundColor: 'red',
    padding: 0,
    // opacity: 0.2,
  },
  maskView: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    backgroundColor: '#000',
    opacity: 0.5,
  },
  maskElement: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  box: {
    backgroundColor: '#FFF',
    width: 300,
    height: 200,
    opacity: 1,
    zIndex: 20000,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    // zIndex: 50000,
  },
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    position: 'absolute',
  },
});

export default EditImage;
