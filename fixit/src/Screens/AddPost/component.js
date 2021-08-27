import React, {useState, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';

const App = () => {
  useEffect(() => {
    openModal()
  })
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };
  return (
    <View style={styles.container}>

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
    </View>
  );
};

export default App;