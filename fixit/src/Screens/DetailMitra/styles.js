import {StyleSheet} from 'react-native';
import { COLOR_BLACK, FONT_CUSTOM_FIELD, FONT_PRIMARY_BODY, FONT_PRIMARY_HEAD, FONT_PRIMARY_HEADLINE, FONT_PRIMARY_TITLE } from '../../styles';

const styles = StyleSheet.create({
  address: {
    ...FONT_PRIMARY_TITLE,
    marginLeft: 50,
    marginTop: 20,
  },
  button: {
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 40,
  }, 
  container: {
    flexDirection: 'row',
    marginLeft: 36, 
    marginTop: 40,
  },
  favorites: {
    bottom: 8,
    tintColor: COLOR_BLACK,
    marginLeft: 220,
  },
  headDesk: {
    ...FONT_PRIMARY_TITLE,
    marginLeft: 50,
    marginTop: 34,
  },
  image: {
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 24,
    height: 176,
    width: 320,
  },
  profileMitra: {
    marginLeft: 50,
  },
  textAddress: {
    ...FONT_PRIMARY_BODY,
    marginLeft: 50,
  },
  textDesk: {
    ...FONT_PRIMARY_BODY,
    marginHorizontal: 50,
    marginTop: 8,
  },
  textTitle: {
    ...FONT_PRIMARY_HEADLINE,
    bottom: 8,
    marginLeft: 16,
  },
  textPrice: {
    ...FONT_PRIMARY_HEAD,
    marginLeft: 50,
    marginTop: 20,
  },
  textService: {
    ...FONT_CUSTOM_FIELD,
    marginLeft: 50,
    marginTop: 16,
  }
});

export default styles;
