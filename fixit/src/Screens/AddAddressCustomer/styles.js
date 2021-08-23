import {StyleSheet} from 'react-native';
import { COLOR_BLACK, FONT_PRIMARY_BODY, FONT_PRIMARY_HEADER, FONT_CUSTOM_BOLD, FONT_CUSTOM_INPUT } from '../../styles';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    marginTop: 40,
  },
  backButton: {
    marginTop: 40,
    marginLeft: 40,
  },
  fieldInput: {
    ...FONT_CUSTOM_INPUT,
  },
  footerWarning: {
    ...FONT_CUSTOM_BOLD,
    textAlign: 'center',
  },
  headWarning: {
    ...FONT_PRIMARY_BODY,
    marginTop: 10,
    textAlign: 'center',
  },
  inputAddress: {
    alignSelf: 'center',
    marginTop: 40,
    width: 328,
  },
  inputBody: {
    alignSelf: 'center',
    marginTop: 20,
    width: 328,
  },
  nameInput: {
    ...FONT_PRIMARY_BODY,
    color: COLOR_BLACK,
  },
  textFooter: {
    flexDirection: 'row', 
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
  textHeader: {
    ...FONT_PRIMARY_HEADER,
    color: COLOR_BLACK,
    marginLeft: 40,
    marginTop: 28,
  },
  textIndicator: {
    ...FONT_PRIMARY_BODY,
    marginLeft: 260,
    top: 36,
  },
});

export default styles;
