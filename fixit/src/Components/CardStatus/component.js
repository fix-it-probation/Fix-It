import React, {Component} from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const CardStatus = ({images, customContainer, customCard, status, date, label, person}) => {
  return (
    <View style={[styles.card, customCard]}>
      <TouchableOpacity style={styles.container, customContainer}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.indicator} />
        <Text style={styles.textStatus}>{status}</Text>
        <Text style={styles.textDate}>{date}</Text>
      </View>
      <View style={{flexDirection: 'row', marginLeft: 14,}}>
        {images !== null && <Image source={images} resizeMode='contain' style={styles.iconImage}  />}
        <Text style={styles.textLabel}>{label}</Text>
        <Text style={styles.textPerson}>{person}</Text>
      </View>
    </TouchableOpacity>
    </View>
  );
};

Component.propTypes = {
  customContainer: PropTypes.object,
  customCard: PropTypes.object,
  images: PropTypes.number,
  status: PropTypes.string,
  date: PropTypes.string,
  label: PropTypes.string,
  person: PropTypes.string,
};

Component.defaultProps = {
  customContainer: null,
  customCard: null,
  images: null,
  status: 'Text status',
  date: 'Text date',
  label: 'Text label',
  person: 'Text person',
};

export default CardStatus;
