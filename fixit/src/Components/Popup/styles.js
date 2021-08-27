import {StyleSheet, Dimensions, Platform} from 'react-native';
const ios = Platform.OS === 'ios';
const {width, height} = Dimensions.get('window');


const styles = StyleSheet.create({
  buttonText: {
    textAlign: 'center',
    fontSize: 28,
  },
  closeBtn: {
    bottom: 214,
    left: 298,
  },
  modal: {
    alignSelf: 'center',
    left: 0,
    right: 0,
    height: 480,
    width: 340,
    backgroundColor: 'white',
    borderRadius: 20,
    marginVertical: 90,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContent: {
    textAlign: 'center',
    fontSize: 28,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    bottom: ios ? 30 : 0,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  okButton: {
    backgroundColor: 'green', width: '50%'
  },
  cancelButton: {
    backgroundColor: 'red', width: '50%'
  },
});

export default styles;
