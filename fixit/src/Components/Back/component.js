import React, {Component} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import IMAGES from '../../configs';
import PropTypes from 'prop-types';
import styles from '../../Screens/Home/styles';

const Icon = ({ navigation, custom }) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source={IMAGES.backButton} style={[styles.image, custom]} />
    </TouchableOpacity>
  );
};

Component.propTypes = {
  navigation: PropTypes.object.isRequiared,
  custom: PropTypes.object,
};

Component.defaultProps = {
  custom: null,
};

export default Icon;
