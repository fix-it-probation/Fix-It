import {StyleSheet} from 'react-native';
import { FONT_LIGHT, COLOR_BLACK, FONT_PRIMARY_BODY, FONT_PRIMARY_HEADER } from '../../styles';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    marginTop: 50,
  },
  backButton: {
    marginTop: 40,
    marginLeft: 40,
  },
  inputName: {
    alignSelf: 'center',
    width: 328,
  },
  inputEmail: {
    alignSelf: 'center',
    marginTop: 20,
    width: 328,
  },
  fieldInput: {
    ...FONT_LIGHT,
    color: COLOR_BLACK,
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
    top: 34,
  },
});

export default styles;
