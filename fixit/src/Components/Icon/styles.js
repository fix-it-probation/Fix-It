import {StyleSheet} from 'react-native';
import { COLOR_BASE_PRIMARY_MAIN, FONT_PRIMARY_ICON } from '../../styles';

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    flexDirection: 'column',
    height: 80,
    width: 90,
  },
  iconImage: {
    alignSelf: 'center',
  },
  container: {
    alignSelf: 'center',
  },
  textBody: {
    ...FONT_PRIMARY_ICON,
    textAlign: 'center',
    marginTop: 3,
  },
});

export default styles;
