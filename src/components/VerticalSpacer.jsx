import React from 'react';
import {View} from 'react-native';

const VerticalSpacer = ({spaceFactor = 1}) => {
  return <View style={{height: 16 * spaceFactor}} />;
};

export default VerticalSpacer;
