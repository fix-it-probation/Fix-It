import React, {Component} from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const CardProfileMitra = ({images, customCard, title, city}) => {
  return (
    <View style={[styles.card, customCard]}>
      <TouchableOpacity>
        {images !== null && <Image source={images} style={styles.cardImage}  />}
        <Text style={styles.textHead}>Profile Mitra</Text>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textCity}>{city}</Text>
      </TouchableOpacity>
    </View>
  );
};

Component.propTypes = {
  customContainer: PropTypes.object,
  customCard: PropTypes.object,
  images: PropTypes.number,
  title: PropTypes.string,
  city: PropTypes.string,
};

Component.defaultProps = {
  customContainer: null,
  customCard: null,
  images: null,
  title: 'Title Card',
  city: 'Kabupaten Cilacap'
};

export default CardProfileMitra;
