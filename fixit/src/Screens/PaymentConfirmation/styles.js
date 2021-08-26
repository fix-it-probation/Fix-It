import {StyleSheet} from 'react-native';
import { COLOR_BLACK, FONT_CUSTOM_FIELD, FONT_PRIMARY_HEADER, FONT_PRIMARY_COLOR, FONT_CUSTOM_BODY, COLOR_FIELD, FONT_PRIMARY_BODY, FONT_CUSTOM_INPUT } from '../../styles';

const styles = StyleSheet.create({
  addImage: {
    alignSelf: 'center',
    marginBottom: 20,
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
  cardPrice: {
    alignSelf: 'center',
    backgroundColor: COLOR_FIELD,
    borderRadius: 10,
    height: 48,
    width: 330,
    marginVertical: 20,
  },
  price: {
    ...FONT_CUSTOM_INPUT,
    marginLeft: 14,
    marginVertical: 12,
  },
  textPrice: {
    ...FONT_CUSTOM_FIELD,
    color: FONT_PRIMARY_COLOR,
    marginLeft: 40,
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
