import {StyleSheet} from 'react-native';
import { FONT_CUSTOM_FIELD, FONT_PRIMARY_COLOR, FONT_CUSTOM_INPUT, COLOR_FIELD } from '../../styles';

const styles = StyleSheet.create({
  cardResult: {
    backgroundColor: COLOR_FIELD,
    borderRadius: 10,
    width: 330,
    bottom: 10,
    marginVertical: 20,
  },
  result: {
    ...FONT_CUSTOM_INPUT,
    marginLeft: 14,
    marginRight: 10,
    marginVertical: 12,
  },
  textResult: {
    ...FONT_CUSTOM_FIELD,
    color: FONT_PRIMARY_COLOR,
  },
});

export default styles;
