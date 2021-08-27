import {StyleSheet} from 'react-native';
import { COLOR_BASE_PRIMARY_MAIN, COLOR_BLACK, COLOR_FIELD, COLOR_INACTIVE, COLOR_WHITE, FONT_PRIMARY_HEADER } from '../../styles';

const styles = StyleSheet.create({
  buttonLogin: {
    backgroundColor: '#EEECFD',
    width: 136,
    marginRight: 20,
    bottom: 60,
  },
  buttonRegister: {
    backgroundColor: COLOR_BASE_PRIMARY_MAIN,
    width: 136,
    bottom: 60,
  },
  subtitle: {
    color: COLOR_BLACK,
    fontSize: 16,
    marginTop: 10,
    maxWidth: '60%',
    textAlign: 'center',
    lineHeight: 23,
  },
  title: {
    color: COLOR_BLACK,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 80,
    textAlign: 'center',
  },
  textLogin: {
    color: COLOR_BASE_PRIMARY_MAIN,
  },
  indicator: {
    bottom: 40,
    height: 8,
    width: 8,
    backgroundColor: COLOR_INACTIVE,
    marginHorizontal: 3,
    borderRadius: 20,
  },
});

export default styles;
