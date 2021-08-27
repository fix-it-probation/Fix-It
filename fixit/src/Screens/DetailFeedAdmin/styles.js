import {StyleSheet, Platform, Dimensions} from 'react-native';
import { COLOR_BASE_PRIMARY_MAIN, COLOR_BLACK, COLOR_CUSTOM_SILVER, COLOR_FIELD, COLOR_WHITE, FONT_CUSTOM_BODY, FONT_CUSTOM_BOLD, FONT_PRIMARY_BODY, FONT_PRIMARY_COLOR, FONT_PRIMARY_HEADER, FONT_PRIMARY_HEADLINE, FONT_PRIMARY_ICON } from '../../styles';
const ios = Platform.OS === 'ios';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 20,
    height: 24,
    width: 24,
    marginLeft: 10,
    marginVertical: 8,
  },
  backButton: {
    marginTop: 40,
    marginLeft: 40,
  },
  buttonTolak: {
    backgroundColor: '#EEECFD',
    width: 136,
    marginRight: 20,
    height: 48,
    bottom: 60,
  },
  buttonTerima: {
    backgroundColor: COLOR_BASE_PRIMARY_MAIN,
    width: 136,
    height: 48,
    bottom: 60,
  },
  cardDetail: {
    alignSelf: 'center',
    marginBottom: 30,
  },
  imgReview: {
    borderRadius: 10,
    marginLeft: 46,
    marginBottom: 20,
    height: 72,
    width: 72,
  },
  imgFeed: {
    alignSelf: 'center',
    borderRadius: 10,
    height: 144,
    marginBottom: 20,
    width: 320,
  },
  pay: {
    alignSelf: 'center',
    borderRadius: 10,
    height: 144,
    width: 320,
  },
  textButton: {
    color: COLOR_BASE_PRIMARY_MAIN,
  },
  textStatus: {
    ...FONT_PRIMARY_BODY,
    color: COLOR_WHITE,
    textAlign: 'center',
    marginVertical: 4,
  },
  textHeader: {
    ...FONT_PRIMARY_HEADER,
    color: COLOR_BLACK,
    marginBottom: 24,
    marginLeft: 20,
    marginTop: 28,
  },
  textTitle: {
    ...FONT_PRIMARY_BODY,
    color: COLOR_CUSTOM_SILVER,
    marginBottom: 20,
    marginLeft: 46,
  },
  result: {
    alignSelf: 'center',
  },
});

export default styles;
