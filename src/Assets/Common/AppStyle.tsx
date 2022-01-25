import {StyleSheet} from 'react-native';
import {DimensionHelpers} from '../Helper/LayoutHelper';

export default StyleSheet.create({
  modalWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#0006',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  smallModalContainer: {
    width: DimensionHelpers.width,
    height: DimensionHelpers.height / 2,
    backgroundColor: 'transparent',
    overflow: 'hidden',
    alignItems: 'center',
  },
  modalContainer: {
    width: DimensionHelpers.width,
    height: DimensionHelpers.height / 2,
    backgroundColor: 'transparent',
    overflow: 'hidden',
    alignItems: 'center',
  },
  modalWrapper: {
    width: 2400,
    height: 2400,
    backgroundColor: '#fff',
    paddingTop: 40,
    borderRadius: 1200,
    alignItems: 'center',
    elevation: 2,
  },
  modalContent: {
    width: DimensionHelpers.width,
    paddingHorizontal: 24,
  },
});
