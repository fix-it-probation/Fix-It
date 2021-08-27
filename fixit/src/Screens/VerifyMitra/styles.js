import {StyleSheet} from 'react-native';
import { COLOR_BASE_PRIMARY_MAIN, COLOR_BLACK, COLOR_SILVER, COLOR_WHITE, FONT_CUSTOM_BODY, 
          FONT_PRIMARY_BODY, FONT_PRIMARY_COLOR, FONT_PRIMARY_HEADER} from '../../styles';

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
  card: {
    backgroundColor: COLOR_BASE_PRIMARY_MAIN,
    borderRadius: 20,
    marginLeft: 10,
    height: 28,
    width: 100,
  },
  card2: {
    backgroundColor: COLOR_WHITE,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLOR_SILVER,
    marginLeft: 10,
    height: 28,
    width: 108,
  },
  card3: {
    backgroundColor: COLOR_WHITE,
    borderRadius: 20,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: COLOR_SILVER,
    height: 28,
    width: 88,
  },
  cardMitra: {
    marginTop: 26,
    right: 40,
  },
  cardFeed: {
    marginTop: 20,
    right: 150,
  },
  cardStatus: {
    alignSelf: 'center',
    marginTop: 20,
  },
  searchBar: {
    alignSelf: 'center',
  },
  textStatus: {
    ...FONT_PRIMARY_BODY,
    color: COLOR_WHITE,
    textAlign: 'center',
    marginVertical: 4,
  },
  textStatus2: {
    ...FONT_PRIMARY_BODY,
    color: FONT_PRIMARY_COLOR,
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
  textProfile: {
    ...FONT_CUSTOM_BODY,
    marginLeft: 8,
    marginTop: 10,
  },
});

export default styles;
