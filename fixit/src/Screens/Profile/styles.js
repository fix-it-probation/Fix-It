import {StyleSheet} from 'react-native';
import { COLOR_BASE_PRIMARY_MAIN, COLOR_BLACK, FONT_CUSTOM_BODY, FONT_PRIMARY_BODY, FONT_PRIMARY_HEADLINE, FONT_PRIMARY_TITLE } from '../../styles';

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 40,
    height: 58,
    marginLeft: 34,
    marginTop: 30,
    width: 58,
  },
  button: {
    alignSelf: 'center',
    marginTop: 60,
  },
  Icon: {
    marginLeft: 34,
    marginTop: 16,
  },
  textName: {
    ...FONT_PRIMARY_TITLE,
    color: COLOR_BLACK,
    marginLeft: 110,
    bottom: 60
  },
  textBody: {
    ...FONT_PRIMARY_BODY,
    bottom: 60,
    marginTop: 4,
    left: 110,
    color: COLOR_BLACK,
  },
  textEdit: {
    ...FONT_PRIMARY_TITLE,
    marginLeft: 20,
    marginTop: 16,
  },
  textTitle: {
    ...FONT_PRIMARY_HEADLINE,
    marginLeft: 34,
    marginTop: 16
  },
  textVersion: {
    ...FONT_PRIMARY_BODY,
    marginTop: 8,
    marginLeft: 300,
  },
});

export default styles;
