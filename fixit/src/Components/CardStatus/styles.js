import {StyleSheet} from 'react-native';
import { COLOR_BASE_PRIMARY_MAIN, COLOR_BLACK, COLOR_FIELD, COLOR_SILVER, COLOR_WHITE, FONT_CUSTOM_BOLD, FONT_CUSTOM_ICON, FONT_CUSTOM_LIGHT, FONT_PRIMARY_BODY, FONT_PRIMARY_HEADLINE, FONT_PRIMARY_ICON } from '../../styles';

const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    height: 118,
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
    height: 32,
    top: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: 4,
  },
  textButton: {
    ...FONT_PRIMARY_BODY,
    color: COLOR_BASE_PRIMARY_MAIN,
    fontWeight: 'bold',
    paddingVertical: 6,
  },
  textDate: {
    ...FONT_CUSTOM_LIGHT,
    marginBottom: 10,
    marginTop: 26,
    right: 68,
  },
  textLabel: {
    ...FONT_CUSTOM_ICON,
    marginLeft: 18,
    maxWidth: '70%'
  },
  textPerson: {
    ...FONT_CUSTOM_LIGHT,
    marginTop: 30,
    right: 212,
  },
  textStatus: {
    ...FONT_CUSTOM_ICON,
    marginBottom: 8,
    marginTop: 8,
    marginLeft: 20,
  }
});

export default styles;
