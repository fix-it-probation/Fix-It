import {StyleSheet} from 'react-native';
import { COLOR_WHITE, FONT_PRIMARY_ICON } from '../../styles';

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  searchBar: {
    alignSelf: 'center',
    marginTop: 24,
    marginBottom: 20,
  },
  textDesc: {
    ...FONT_PRIMARY_ICON,
    marginLeft: 40,
  },
  textSumService: {
    ...FONT_PRIMARY_ICON,
    color: COLOR_WHITE,
    textAlign: 'center',
  }
});

export default styles;
