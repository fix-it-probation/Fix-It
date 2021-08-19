import {StyleSheet} from 'react-native';
import { COLOR_BLACK, FONT_PRIMARY_HEADER, FONT_PRIMARY_HEADLINE } from '../../styles';

const styles = StyleSheet.create({
  cardHome: {
    marginLeft: 40,
    marginTop: 16,
  },
  icon: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  iconAir: {
    marginTop: 20,
  },
  searchBar: {
    alignSelf: 'center',
    marginTop: 24,
  },
  textBody: {
    ...FONT_PRIMARY_HEADLINE,
    marginLeft: 40,
    marginTop: 40,
  },
  textHeader: {
    ...FONT_PRIMARY_HEADER,
    color: COLOR_BLACK,
    marginLeft: 44,
    marginTop: 32,
  },
});

export default styles;
