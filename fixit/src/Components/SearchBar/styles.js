import {StyleSheet} from 'react-native';
import { FONT_PRIMARY_HEADLINE, COLOR_FIELD, FONT_PRIMARY_COLOR, FONT_LIGHT } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_FIELD,
    borderRadius: 10,
    flexDirection: 'row',
    height: 38,
    width: 320,
  },
  image: {
    marginLeft: 14,
    marginTop: 6,
    marginRight: 18,
    height: 24,
  },
  input: {
    ...FONT_LIGHT,
  },
  titleText: {
    ...FONT_PRIMARY_HEADLINE,
    color: FONT_PRIMARY_COLOR,
    marginBottom: 10,
  },
});

export default styles;
