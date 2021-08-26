import {StyleSheet} from 'react-native';
import { COLOR_BLACK, FONT_CUSTOM_FIELD, FONT_PRIMARY_HEADER, FONT_PRIMARY_COLOR, FONT_CUSTOM_BODY } from '../../styles';

const styles = StyleSheet.create({
  addImage: {
    marginBottom: 20,
    marginLeft: 40,
    marginTop: 20,
  },
  backButton: {
    marginTop: 40,
    marginLeft: 40,
  },
  button: {
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 32,
  },
  fieldInput: {
    height: 80,
  },
  form: {
    marginLeft: 40,
    marginTop: 20,
    width: 328,
  },
  textBody: {
    ...FONT_CUSTOM_FIELD,
    color: FONT_PRIMARY_COLOR,
    marginLeft: 40,
  },
  textHeader: {
    ...FONT_PRIMARY_HEADER,
    color: COLOR_BLACK,
    marginBottom: 24,
    marginLeft: 40,
    marginTop: 30,
  },
  textWarning: {
    ...FONT_CUSTOM_BODY,
    color: FONT_PRIMARY_COLOR,
    marginLeft: 60,
    marginTop: 6,
  }
});

export default styles;
