import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import Modal from 'react-native-modal';
import IMAGES from '../../configs';
import styles from './styles';

const Popup = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };
  return (
    <View>
     <TouchableOpacity onPress={openModal}></TouchableOpacity>
      <Modal
        animationIn="slideInUp"
        animationOut="slideOutDown"
        onBackdropPress={closeModal}
        onSwipeComplete={closeModal}
        swipeDirection="left"
        isVisible={isModalVisible}
        style={styles.modal}>
        <View>
        <TouchableOpacity onPress={closeModal}>
          <Image source={IMAGES.close} style={styles.closeBtn} />
        </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Popup;