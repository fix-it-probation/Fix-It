import React, {useState} from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';

const ios = Platform.OS === 'ios';
const {width, height} = Dimensions.get('window');

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const openModal = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openModal}>
      </TouchableOpacity>

      <Modal
        animationIn="slideInUp"
        animationOut="slideOutDown"
        onBackdropPress={closeModal}
        onSwipeComplete={closeModal}
        swipeDirection="left"
        isVisible={isModalVisible}
        style={styles.modal}>
        <View style={styles.contentContainer}>
          <Text style={styles.modalContent}>Modal Content</Text>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.okButton}>
                <Text style={styles.text}>Ok</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={closeModal}>
                <Text style={styles.text}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Text>Haloo</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 28,
  },
  modal: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginHorizontal: 0,
    marginBottom: 0,
    marginTop: height * 0.3,
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
  okButton: {backgroundColor: 'green', width: '50%'},
  cancelButton: {backgroundColor: 'red', width: '50%'},
});