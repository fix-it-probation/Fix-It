import {StyleSheet, Platform, Dimensions} from 'react-native';
import { COLOR_BLACK, COLOR_FIELD, FONT_CUSTOM_BODY, FONT_CUSTOM_BOLD, FONT_PRIMARY_BODY, FONT_PRIMARY_COLOR, FONT_PRIMARY_HEADER, FONT_PRIMARY_HEADLINE, FONT_PRIMARY_ICON } from '../../styles';
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
  card: {
    backgroundColor: COLOR_FIELD,
    borderRadius: 20,
    marginLeft: 300,
    flexDirection: 'row',
    marginTop: 32,
    height: 40,
    width: 88,
  },
  cardMitra: {
    marginTop: 20,
    right: 40,
  },
  cardFeed: {
    marginTop: 20,
    right: 150,
  },
  textBody: {
    ...FONT_PRIMARY_ICON,
    color: FONT_PRIMARY_COLOR,
    marginLeft: 36,
    marginTop: 10,
  },
  textHeader: {
    ...FONT_PRIMARY_HEADLINE,
    marginLeft: 36,
  },
  textProfile: {
    ...FONT_CUSTOM_BODY,
    marginLeft: 8,
    marginTop: 10,
  },
});

export default styles;
