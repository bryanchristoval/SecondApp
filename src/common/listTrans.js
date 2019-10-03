import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'



const ListTrans = (props) =>  {
    

    if (props.showColor){
        colorString2 = '#D44624'
    } else {
        colorString2 = '#75D424'
    }
        return (
            <View>
                <View style={styles.listView}>
                    <View style={styles.imageStyle}>
                        <Image source={props.image}/>
                    </View>
                    <View style={{justifyContent: 'space-between', flexDirection:'row', flex: 1, paddingRight: 16}}>
                        <View style={styles.upperText}> 
                            <Text style={{fontSize: 20, fontFamily:'ProximaNova-Semibold'}}>{props.categories}</Text>
                            <Text style={{fontSize: 17, fontFamily:'ProximaNova-Regular', color:'#8E8E93'}}>{props.detail}</Text>
                        </View>
                        <View style={styles.currencyView}>
                            <View style={{flexDirection: 'row', alignItems:'flex-end'}}>
                                <Text style={{color: colorString2}}>{props.minplus}</Text>
                                <Text style={styles.currencyText}>Rp</Text>
                                <Text style={{fontSize:24, color:'#001118', fontFamily:'Spectral-Bold'}}>{props.amount}</Text>
                            </View>   
                        </View>
                    </View>
                    
                </View>
            </View>
        )
    }

const styles = StyleSheet.create({
    listView:{
        height: 80,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,

    },
    imageStyle:{
        marginHorizontal: 16,
        marginLeft: 20,
        width: 80,
    },
    upperText:{
        flexDirection: 'column',

    },
    currencyView:{
        flexDirection:'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around'
    },

    currencyText:{
        marginLeft: 3,
        marginRight: 3,
        color:'#8E8E93'
    },

})
export default ListTrans