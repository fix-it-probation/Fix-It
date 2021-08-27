import React, {Component} from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Button from '../Button';

const Card = ({images, customContainer}) => {
  return (
    <View style={styles.card}>
      <View style={styles.container, customContainer}>
      {images !== null && <Image source={images} resizeMode='contain' style={styles.iconImage}  />}
      <Button title="Cari Tukang" customContainer={styles.button} customText={styles.textButton} />
    </View>
    </View>
  );
};

Component.propTypes = {
  customContainer: PropTypes.object,
  images: PropTypes.number,
};

Component.defaultProps = {
  customContainer: null,
  images: null,
};

export default Card;
