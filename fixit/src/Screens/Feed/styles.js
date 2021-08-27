import {StyleSheet} from 'react-native';
import { COLOR_BLACK, FONT_PRIMARY_HEADER } from '../../styles';

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  textHeader: {
    ...FONT_PRIMARY_HEADER,
    color: COLOR_BLACK,
    marginTop: 32,
    textAlign: 'center',
  },
});

export default styles;
