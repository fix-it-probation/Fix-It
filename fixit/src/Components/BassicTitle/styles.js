import {StyleSheet} from 'react-native';
import { FONT_PRIMARY_HEADLINE, COLOR_FIELD, FONT_PRIMARY_COLOR, FONT_LIGHT } from '../../styles';

const styles = StyleSheet.create({
  container: {
    width: 280,
  },
  input: {
    ...FONT_LIGHT,
    backgroundColor: COLOR_FIELD,
    borderRadius: 10,
    height: 50,
    padding: 16,
  },
  titleText: {
    ...FONT_PRIMARY_HEADLINE,
    color: FONT_PRIMARY_COLOR,
    marginBottom: 10,
  },
});

export default styles;
