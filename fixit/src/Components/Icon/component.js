import React, {Component} from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Icon = ({images, label, customContainer}) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.container, customContainer}>
      {images !== null && <Image source={images} resizeMode='contain' style={styles.iconImage} />}
      <Text style={styles.textBody}>{label}</Text>
    </TouchableOpacity>
    </View>
  );
};

Component.propTypes = {
  customContainer: PropTypes.object,
  images: PropTypes.number,
  label: PropTypes.string,
};

Component.defaultProps = {
  customContainer: null,
  images: null,
  label: 'Field'
};

export default Icon;
