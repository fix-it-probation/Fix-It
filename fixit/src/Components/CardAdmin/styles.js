import {StyleSheet} from 'react-native';
import { COLOR_WHITE, FONT_CUSTOM_INPUT, FONT_PRIMARY_HEADER, FONT_PRIMARY_HEADLINE, FONT_PRIMARY_ICON } from '../../styles';

const styles = StyleSheet.create({
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
  textTitle: {
    ...FONT_CUSTOM_INPUT,
    color: COLOR_WHITE,
    bottom: 88,
    marginLeft: 10,
  },
  textLabel: {
    ...FONT_PRIMARY_HEADER,
    color: COLOR_WHITE,
    bottom: 86,
    marginLeft: 10,
  },
  textFooter: {
    ...FONT_PRIMARY_ICON,
    color: COLOR_WHITE,
    bottom: 78,
    marginLeft: 10,
  }
});

export default styles;
