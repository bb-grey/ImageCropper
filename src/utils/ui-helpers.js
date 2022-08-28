import {Dimensions, StatusBar} from 'react-native';

export const getNavbarHeight = () => {
  const screenHeight = Dimensions.get('screen').height;
  const windowHeight = Dimensions.get('window').height;
  const navbarHeight = screenHeight - windowHeight + StatusBar.currentHeight;
  return navbarHeight;
};
