import {StyleSheet} from 'react-native';
import { COLOR_BLACK, FONT_PRIMARY_BODY, FONT_PRIMARY_HEADER, FONT_CUSTOM_INPUT, FONT_PRIMARY_INPUT, FONT_WARNING_LIGHT, COLOR_BASE_PRIMARY_MAIN } from '../../styles';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    marginTop: 20,
  },
  backButton: {
    marginTop: 40,
    marginLeft: 40,
  },
  textBody: {
    ...FONT_CUSTOM_INPUT,
    marginLeft: 40,
    bottom: 16,
  },
  textEmail: {
    ...FONT_PRIMARY_INPUT,
    bottom: 20,
    marginLeft: 40,
  },
  textHeader: {
    ...FONT_PRIMARY_HEADER,
    color: COLOR_BLACK,
    marginBottom: 24,
    marginLeft: 40,
    marginTop: 30,
  },
  textIndicator: {
    ...FONT_PRIMARY_BODY,
    marginLeft: 260,
    top: 36,
  },
  textTry: {
    ...FONT_WARNING_LIGHT,
    color: COLOR_BASE_PRIMARY_MAIN,
  },
  textWarning: {
    ...FONT_WARNING_LIGHT,
  }
});

export default styles;
