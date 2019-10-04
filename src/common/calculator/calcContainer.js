import React from 'react';
import { View } from 'react-native';
import CalcButton from './calcButton';

import styles from '../../styles/index'

class CalcContainer extends React.Component {
  render() {

    return (
      <View style={styles.calcContainer2}>

        <View style={styles.row}>
          <CalcButton operator={'1'}/>
          <CalcButton operator={'4'}/>
          <CalcButton operator={'7'}/>
          <CalcButton operator={','}/>
 
        </View>

        <View style={styles.row}>
          <CalcButton operator={'2'}/>
          <CalcButton operator={'5'}/>
          <CalcButton operator={'8'}/>
          <CalcButton operator={'0'}/>
        </View>

        <View style={styles.row}>
          <CalcButton operator={'3'}/>
          <CalcButton operator={'6'}/>
          <CalcButton operator={'9'}/>
          <CalcButton operator={''}/>
        </View>

        <View style={styles.row}>
        <CalcButton style={{alignSelf:'scretch'}} operator={'Save'}/>
        </View> 
        
        
      </View>
    );
  }
}
export default CalcContainer;