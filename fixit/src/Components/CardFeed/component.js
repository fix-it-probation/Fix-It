import React, {Component} from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const CardFeed = ({avatar, images, customCard, title, desc}) => {
  return (
    <View style={[styles.card, customCard]}>
      <TouchableOpacity>
        {avatar !== null && <Image source={images} style={styles.cardAvatar}  />}
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textDesk}>{desc}</Text>
        {images !== null && <Image source={images} style={styles.cardImage}  />}
      </TouchableOpacity>
    </View>
  );
};

Component.propTypes = {
  customContainer: PropTypes.object,
  customCard: PropTypes.object,
  avatar: PropTypes.number,
  images: PropTypes.number,
  title: PropTypes.string,
  city: PropTypes.string,
};

Component.defaultProps = {
  customContainer: null,
  customCard: null,
  avatar: null,
  images: null,
  title: 'Title Card',
  city: 'Kabupaten Cilacap'
};

export default CardFeed;
