import {StyleSheet} from 'react-native';
import { COLOR_BASE_PRIMARY_MAIN, COLOR_WHITE, FONT_PRIMARY_BUTTON } from '../../styles';

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    height: 48,
    width: 320,
    backgroundColor: COLOR_BASE_PRIMARY_MAIN,
  },
  button: {
    backgroundColor: 'green',
  },
  textStyle: {
    ...FONT_PRIMARY_BUTTON,
    color: COLOR_WHITE,
    textAlign: 'center',
    paddingVertical: 10,
  },
});

export default styles;
