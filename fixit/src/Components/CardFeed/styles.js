import {StyleSheet} from 'react-native';
import { COLOR_WHITE, FONT_PRIMARY_BODY, FONT_PRIMARY_TITLE } from '../../styles';

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLOR_WHITE,
    borderRadius: 20,
    elevation: 2,
    height: 300,
    width: 320,
  },
  cardAvatar: {
    height: 34,
    width: 34,
    marginLeft: 16,
    top: 14,
    borderRadius: 100,
  },
  cardImage: {
    alignSelf: 'center',
    borderRadius: 10,
    height: 158,
    marginTop: 20,
    width: 290,
  },
  textTitle: {
    ...FONT_PRIMARY_TITLE,
    bottom: 16,
    marginLeft: 70,
    marginRight: 10,
  },
  textDesk: {
    ...FONT_PRIMARY_BODY,
    marginLeft: 16,
    marginTop: 10,
  },
});

export default styles;
