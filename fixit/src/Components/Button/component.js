import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {noop} from '../../utils';

const Button = ({title, customContainer, onPress, customText}) => {
  return (
    <TouchableOpacity
      style={[styles.container, customContainer]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={[styles.textStyle, customText]}>{title}</Text>
    </TouchableOpacity>
  );
};

Component.propTypes = {
  title: PropTypes.string,
  labelText: PropTypes.object,
  customText: PropTypes.object,
  customContainer: PropTypes.object,
  onPress: PropTypes.func,
};

Component.defaultProps = {
  title: 'Field Input',
  labelText: null,
  customText: null,
  customContainer: null,
  onPress: noop,
};

export default Button;
