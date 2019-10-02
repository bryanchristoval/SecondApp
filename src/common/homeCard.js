import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Card } from 'native-base'

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
        </View>


    )
}
const styles = StyleSheet.create({

    Card2:{
        height: 80,
        width: 335,
        backgroundColor:"#75D424",
        borderRadius: 4,
    },

    viewBottom:{
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft:16,
        paddingRight: 15.8,
        
    },

    currencyView:{
        flexDirection:'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around'
    },

    currencyText:{
        marginLeft: 3,
        marginRight: 3,
        color:'#8E8E93'
    },
    cardBottom:{
        height: 64,
        backgroundColor:"#FFFFFF",
        borderRadius: 4,

    }
});

export default HomeCard;