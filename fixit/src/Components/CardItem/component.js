import React, {Component} from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Card = ({images, customCard, title, price, year}) => {
  return (
    <View style={[styles.card, customCard]}>
      <TouchableOpacity>
        {images !== null && <Image source={images} resizeMode='contain' style={styles.cardImage}  />}
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textPrice}>{price}</Text>
        <Text style={styles.textYear}>{year}</Text>
      </TouchableOpacity>
    </View>
  );
};

Component.propTypes = {
  customContainer: PropTypes.object,
  customCard: PropTypes.object,
  images: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.string,
  year: PropTypes.string,
};

Component.defaultProps = {
  customContainer: null,
  customCard: null,
  images: null,
  title: 'Title Card',
  price: '5.000.000',
  year: '2021'
};

export default Card;
