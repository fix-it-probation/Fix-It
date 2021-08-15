import {StyleSheet} from 'react-native';
import { COLOR_BASE_PRIMARY_MAIN, FONT_PRIMARY_HEADER } from '../../styles';

const styles = StyleSheet.create({
  textHeader: {
    ...FONT_PRIMARY_HEADER,
    color: COLOR_BASE_PRIMARY_MAIN,
    paddingVertical: 280,
    textAlign: 'center',
  },
});

export default styles;
