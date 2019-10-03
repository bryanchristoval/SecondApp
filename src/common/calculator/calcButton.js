import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

class CalcButton extends React.Component {
  render() {
    const { operator, handleButtonPress } = this.props;

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => handleButtonPress(operator)}
      >
        <Text style={styles.item}>
          { operator }
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 1,
  },

  item: {
    color: 'black',
    fontSize: 26,
  },
});

export default CalcButton;