import {StyleSheet} from 'react-native';
import { COLOR_BASE_PRIMARY_MAIN } from '../../styles';

const styles = StyleSheet.create({
  textHeader: {
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderBottomColor: '#c4c4c4',
    color: COLOR_BASE_PRIMARY_MAIN,
    width: 500,
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 20,
    paddingLeft: 20,
  },
  textBody: {
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderBottomColor: '#c4c4c4',
    color: '#c4c4c4',
    width: 500,
    fontSize: 16,
    paddingLeft: 20,
    paddingVertical: 20,
  },
  textTelp: {
    backgroundColor: 'white',
    borderBottomWidth: 3,
    borderBottomColor: '#c4c4c4',
    color: '#c4c4c4',
    width: 500,
    fontSize: 16,
    paddingLeft: 20,
    paddingVertical: 20,
  },
});

export default styles;
