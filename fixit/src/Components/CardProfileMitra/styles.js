import {StyleSheet} from 'react-native';
import { COLOR_BASE_PRIMARY_MAIN, COLOR_BLACK, COLOR_WHITE, FONT_PRIMARY_BODY, FONT_PRIMARY_HEADLINE, FONT_PRIMARY_ICON, FONT_PRIMARY_TITLE } from '../../styles';

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLOR_WHITE,
    borderRadius: 20,
    height: 100,
    width: 290,
  },
  cardImage: {
    height: 40,
    width: 40,
    top: 50,
    borderRadius: 100,
  },
  textTitle: {
    ...FONT_PRIMARY_TITLE,
    bottom: 16,
    marginLeft: 60,
    marginRight: 10,
  },
  textHead: {
    ...FONT_PRIMARY_TITLE,
    bottom: 24,
    marginRight: 10,
  },
  textCity: {
    ...FONT_PRIMARY_BODY,
    bottom: 14,
    marginLeft: 60,
    marginRight: 10,
  },
});

export default styles;
