import {StyleSheet} from 'react-native';
import { COLOR_BLACK, FONT_CUSTOM_FIELD, FONT_PRIMARY_HEADER, FONT_PRIMARY_COLOR, FONT_CUSTOM_BODY, COLOR_FIELD, FONT_PRIMARY_BODY, FONT_CUSTOM_INPUT, FONT_PRIMARY_HEADLINE } from '../../styles';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    marginTop: 40,
  },
  imgConfirm: {
    alignSelf: 'center',
    marginTop: 140,
  },
  textBody: {
    ...FONT_PRIMARY_BODY,
    alignSelf: 'center',
    color: FONT_PRIMARY_COLOR,
    marginTop: 10,
    maxWidth: '70%',
    textAlign: 'center',
  },
  textTitle: {
    ...FONT_PRIMARY_HEADLINE,
    alignSelf: 'center',
    marginTop: 20,
    maxWidth: '60%',
    textAlign: 'center',
  },
});

export default styles;
