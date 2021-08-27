import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {noop} from '../../utils';
import { COLOR_BASE_PRIMARY_MAIN, COLOR_FIELD } from '../../styles';

const Button = ({title, customContainer, onPress, customText, disabled}) => {
  let color
  if (disabled === true) {
    color = COLOR_FIELD;
  } else {
    color = COLOR_BASE_PRIMARY_MAIN;
  }

  return (
    <TouchableOpacity
      style={[styles.container, customContainer]}
      onPress={onPress}
      disabled={disabled}
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
