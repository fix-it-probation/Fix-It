import {StyleSheet} from 'react-native';
import { COLOR_BASE_PRIMARY_MAIN, COLOR_BLACK, COLOR_CUSTOM_SILVER, COLOR_SILVER, COLOR_WHITE, FONT_CUSTOM_BODY, FONT_CUSTOM_BOLD, FONT_CUSTOM_ICON, FONT_CUSTOM_LIGHT, FONT_PRIMARY_BODY, FONT_PRIMARY_HEADLINE, FONT_PRIMARY_ICON } from '../../styles';

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    height: 90,
    width: 320,
    borderWidth: 1,
    borderColor: COLOR_SILVER,
  },
  container: {
    alignSelf: 'center',
  },
  iconImage: {
    borderRadius: 6,
    height: 48,
    width: 48,
  },
  indicator: {
    backgroundColor: COLOR_BASE_PRIMARY_MAIN,
    height: 22,
    top: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: 4,
  },
  textBody: {
    ...FONT_PRIMARY_ICON,
    color: COLOR_CUSTOM_SILVER,
  },
  textDate: {
    ...FONT_PRIMARY_ICON,
    color: COLOR_BLACK,
    marginLeft: 100,
  },
  textPerson: {
    ...FONT_PRIMARY_ICON,
    color: COLOR_BLACK,
    marginLeft: 124,
  },
  textStatus: {
    ...FONT_CUSTOM_BODY,
    marginBottom: 8,
    marginTop: 10,
    marginLeft: 10,
  }
});

export default styles;
