import {StyleSheet} from 'react-native';
import { COLOR_BLACK, FONT_PRIMARY_BODY, FONT_PRIMARY_HEADER, FONT_CUSTOM_INPUT } from '../../styles';

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
  inputPass: {
    alignSelf: 'center',
    marginTop: 20,
    width: 328,
  },
  textFooter: {
    flexDirection: 'row', 
    alignSelf: 'center'
  },
  textHeader: {
    ...FONT_PRIMARY_HEADER,
    color: COLOR_BLACK,
    marginBottom: 16,
    marginLeft: 40,
    marginTop: 28,
  },
  textIndicator: {
    ...FONT_PRIMARY_BODY,
    marginLeft: 260,
    top: 34,
  },
});

export default styles;
