import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from '../../styles/index'

class CalcButton extends React.Component {
  render() {
    const { operator, handleButtonPress } = this.props;

    return (
      <TouchableOpacity
        style={styles.calcContainer}
        onPress={() => handleButtonPress(operator)}
      >
        <Text style={styles.item}>
          { operator }
        </Text>
      </TouchableOpacity>
    );
  }
}

export default CalcButton;