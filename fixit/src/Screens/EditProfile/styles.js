import {StyleSheet} from 'react-native';
import { COLOR_BLACK, FONT_PRIMARY_BODY, FONT_PRIMARY_HEADER, FONT_CUSTOM_BOLD, FONT_CUSTOM_INPUT } from '../../styles';

const styles = StyleSheet.create({
  avatar: {
    alignSelf: 'center',
    borderRadius: 40,
    height: 72,
    width: 72,
    marginBottom: 24,
  },
  button: {
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  backButton: {
    marginTop: 40,
    marginLeft: 40,
  },
  inputField: {
    alignSelf: 'center',
    marginBottom: 20,
    width: 328,
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
    marginTop: 24,
    textAlign: 'center',
  },
  textHeader: {
    ...FONT_PRIMARY_HEADER,
    color: COLOR_BLACK,
    marginBottom: 24,
    marginLeft: 20,
    marginTop: 30,
  },
});

export default styles;
