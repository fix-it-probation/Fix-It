import React, {Component} from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { COLOR_BORDER, COLOR_SILVER } from '../../styles';

const CardDetailAdmin = ({ customContainer, customCard, status, date, person}) => {
  return (
    <View style={[styles.card, customCard]}>
      <TouchableOpacity style={styles.container, customContainer}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.indicator} />
        <Text style={styles.textStatus}>{status}</Text>
      </View>
      <View style={{ marginLeft: 14, backgroundColor: COLOR_BORDER, height: 2, }} />
        <View style={{flexDirection: 'row', marginTop: 8, marginLeft: 10,}}>
          <Text style={styles.textBody}>Nama User</Text>
          <Text style={styles.textPerson}>{person}</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 8, marginLeft: 10,}}>
          <Text style={styles.textBody}>Tanggal Request</Text>
          <Text style={styles.textDate}>{date}</Text>
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
  person: PropTypes.string,
};

Component.defaultProps = {
  customContainer: null,
  customCard: null,
  images: null,
  status: 'Text status',
  date: 'Text date',
  person: 'Text person',
};

export default CardDetailAdmin;
