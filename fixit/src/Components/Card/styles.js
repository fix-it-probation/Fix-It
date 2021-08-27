import {StyleSheet} from 'react-native';
import { COLOR_BASE_PRIMARY_MAIN, COLOR_WHITE, FONT_PRIMARY_BODY, FONT_PRIMARY_HEADLINE, FONT_PRIMARY_ICON } from '../../styles';

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLOR_WHITE,
    bottom: 48,
    height: 32,
    marginLeft: 170,
    width: 96,
  },
  card: {
    borderRadius: 10,
    height: 168,
    width: 290,
  },
  container: {
    alignSelf: 'center',
  },
  iconImage: {
    borderRadius: 6,
  },
  textButton: {
    ...FONT_PRIMARY_BODY,
    color: COLOR_BASE_PRIMARY_MAIN,
    fontWeight: 'bold',
    paddingVertical: 6,
  },
});

export default styles;
