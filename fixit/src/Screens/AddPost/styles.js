import {StyleSheet} from 'react-native';
import { COLOR_FIELD, COLOR_WHITE, FONT_PRIMARY_HEADLINE } from '../../styles';

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLOR_FIELD,
    borderRadius: 14,
    height: 134,
    marginLeft: 34,
    marginTop: 20,
    width: 134,
  },
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  textCard: {
    ...FONT_PRIMARY_HEADLINE,
    marginVertical: 50,
    textAlign: 'center',
  },
  textHeader: {
    ...FONT_PRIMARY_HEADLINE,
    bottom: 3,
    marginLeft: 20,
  }
});

export default styles;
