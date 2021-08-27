import {StyleSheet} from 'react-native';
import { COLOR_BLACK, FONT_PRIMARY_HEADER, FONT_PRIMARY_BODY, FONT_PRIMARY_INPUT } from '../../styles';

const styles = StyleSheet.create({
  backButton: {
    marginTop: 40,
    marginLeft: 40,
  },
  img: {
    alignSelf: 'center',
    marginTop: 20,
    height: 156,
    width: 334,
  },
  textBody: {
    ...FONT_PRIMARY_BODY,
    marginLeft: 36,
    marginTop: 20,
    marginRight: 40,
  },
  textHeader: {
    ...FONT_PRIMARY_HEADER,
    color: COLOR_BLACK,
    marginLeft: 20,
    marginTop: 30,
  },
  textTitle: {
    ...FONT_PRIMARY_INPUT,
    marginLeft: 36,
    marginTop: 20,
  }
});

export default styles;
