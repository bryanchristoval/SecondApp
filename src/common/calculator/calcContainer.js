import React from 'react';
import { View, StyleSheet } from 'react-native';
import CalcButton from './calcButton';

class CalcContainer extends React.Component {
  render() {

    return (
      <View style={styles.container}>

        <View style={styles.row}>
          <CalcButton operator={'1'}/>
          <CalcButton operator={'2'}/>
          <CalcButton operator={'3'}/>
        <CalcButton style={{height:100, alignSelf:'scretch'}} operator={'Save'}/>
 
        </View>

        <View style={styles.row}>
          <CalcButton operator={'4'}/>
          <CalcButton operator={'5'}/>
          <CalcButton operator={'6'}/>
        </View>

        <View style={styles.row}>
          <CalcButton operator={'7'}/>
          <CalcButton operator={'8'}/>
          <CalcButton operator={'9'}/>
        </View>

        <View style={styles.row}>
          <CalcButton operator={','}/>
          <CalcButton operator={'0'}/>
          <CalcButton operator={''}/>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    paddingBottom: 34
  },

  row: {
    height: 56,
    flexDirection: 'row',
  },
});

export default CalcContainer;