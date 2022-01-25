import {StatusBar, Dimensions, Platform} from 'react-native';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';

export const isIOS = Platform.OS === 'ios';

export const getDimensions = (flag: 'window' | 'screen' = 'screen') => {
  let {width, height} = Dimensions.get(flag);
  if (width > height) {
    height = width;
    width = height;
  }
  return {width, height};
};

export const DimensionHelpers = {
  width: getDimensions().width,
  height: getDimensions().height,
};

export const statusBarHeight = (safe: boolean = true) => {
  return isIOS ? getStatusBarHeight(safe) : StatusBar.currentHeight || 0;
};

export const bottomSpaceHeight = () => {
  return isIOS ? getBottomSpace() / 2 : 0;
};

export const getSize = (size: number) => (DimensionHelpers.width * size) / 375;
