import {StyleSheet} from 'react-native';
import { COLOR_BASE_PRIMARY_MAIN, COLOR_BLACK, COLOR_WHITE, FONT_PRIMARY_BODY, FONT_PRIMARY_HEADLINE, FONT_PRIMARY_ICON, FONT_PRIMARY_TITLE } from '../../styles';

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    backgroundColor: COLOR_WHITE,
    borderRadius: 4,
    borderColor: COLOR_BLACK,
    borderRadius: 20,
    elevation: 4,
    height: 112,
    width: 320,
  },
  cardImage: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  textTitle: {
    ...FONT_PRIMARY_TITLE,
    bottom: 94,
    marginLeft: 160,
    marginRight: 10,
  },
  textPrice: {
    ...FONT_PRIMARY_BODY,
    bottom: 84,
    marginLeft: 160,
    marginRight: 10,
  },
  textYear: {
    ...FONT_PRIMARY_BODY,
    bottom: 78,
    marginLeft: 160,
    marginRight: 10,
  },
});

export default styles;
