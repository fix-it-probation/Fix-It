import React, {Component} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import IMAGES from '../../configs';
import PropTypes from 'prop-types';
import styles from '../../screens/Home/styles';

const Icon = ({ custom, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={IMAGES.backButton} style={[styles.image, custom]} />
    </TouchableOpacity>
  );
};

Component.propTypes = {
  custom: PropTypes.object,
};

Component.defaultProps = {
  custom: null,
};

export default Icon;
