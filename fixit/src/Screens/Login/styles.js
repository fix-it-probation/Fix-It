import {StyleSheet} from 'react-native';
import { COLOR_BLACK, FONT_CUSTOM_INPUT, FONT_PRIMARY_BODY, FONT_PRIMARY_HEADER } from '../../styles';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    marginTop: 40,
  },
  backButton: {
    marginTop: 40,
    marginLeft: 40,
  },
  inputEmail: {
    alignSelf: 'center',
    marginTop: 16,
    width: 328,
  },
  inputPass: {
    alignSelf: 'center',
    marginTop: 20,
    width: 328,
  },
  fieldInput: {
    ...FONT_CUSTOM_INPUT,
    color: COLOR_BLACK,
  },
  textFooter: {
    flexDirection: 'row', 
    alignSelf: 'center'
  },
  textHeader: {
    ...FONT_PRIMARY_HEADER,
    color: COLOR_BLACK,
    marginBottom: 24,
    marginLeft: 40,
    marginTop: 28,
  },
  textWarning: {
    ...FONT_PRIMARY_BODY,
    marginLeft: 40
  },
});

export default styles;
