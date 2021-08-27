import React, {Component} from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const CardAdmin = ({images, customContainer, title, label}) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity style={[styles.container, customContainer]}>
      {images !== null && <Image source={images} resizeMode='contain' style={styles.iconImage}  />}
      <Text style={styles.textTitle}>{title}</Text>
      <Text style={styles.textLabel}>{label}</Text>
      <Text style={styles.textFooter}>Klik untuk melihat</Text>
    </TouchableOpacity>
    </View>
  );
};

Component.propTypes = {
  customContainer: PropTypes.object,
  images: PropTypes.number,
  title: PropTypes.string,
  label: PropTypes.string,
};

Component.defaultProps = {
  customContainer: null,
  images: null,
  title: 'Title Card',
  label: 'Label Card'
};

export default CardAdmin;
