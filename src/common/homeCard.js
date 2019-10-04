import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { Card } from 'native-base'
import styles from '../styles/index'

const HomeCard = (props) => {
    if (props.showRed){
        colorString = '#D44624'
    } else{
        colorString = '#8E8E93'
    }

    if (props.showColor){
        colorString2 = '#D44624'
    } else {
        colorString2 = '#75D424'
    }

    return(
        <View>
            <TouchableOpacity  button onPress = {props.click1}>
                <View key='bottomview'>
                    <Card style={styles.cardBottom}>
                        <View style={styles.viewBottom}>
                            <Text style={{color: colorString}}>{props.leftText}</Text>
                            <View style={styles.currencyView}>
                                <View style={styles.currencyView}>
                                    <Text style={{color: colorString2}}>{props.minplus}</Text>
                                    <Text style={styles.currencyText}>Rp</Text>
                                    <Text style={{fontSize:32, color:'#001118', fontFamily:'Spectral-Bold'}}>{props.amount}</Text>
                                </View>
                                
                            </View>
                        </View>
                    </Card>
                </View>

            </TouchableOpacity>
            
        </View>


    )
}

export default HomeCard;