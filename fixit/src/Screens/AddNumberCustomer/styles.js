import {StyleSheet} from 'react-native';
import { COLOR_BASE_PRIMARY_MAIN, COLOR_BLACK, FONT_CUSTOM_INPUT, FONT_PRIMARY_BODY, FONT_PRIMARY_COLOR, FONT_PRIMARY_HEADER, FONT_PRIMARY_HEADLINE, FONT_PRIMARY_HEADLINE2 } from '../../styles';

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
  inputName: {
    alignSelf: 'center',
    marginTop: 24,
    width: 328,
  },
  inputPass: {
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
    alignSelf: 'center'
  },
  textHeader: {
    ...FONT_PRIMARY_HEADER,
    color: COLOR_BLACK,
    marginLeft: 40,
    marginTop: 28,
  },
  textWarning: {
    ...FONT_PRIMARY_BODY,
    color: FONT_PRIMARY_COLOR,
    marginLeft: 50,
    marginTop: 2,
  },
  textIndicator: {
    ...FONT_PRIMARY_BODY,
    marginLeft: 260,
    top: 36,
  }, 
});

export default styles;
