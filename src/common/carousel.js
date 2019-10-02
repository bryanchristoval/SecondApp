import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { Card } from 'native-base'

class Carousel extends Component {
    render () {
        return (
            <View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <Card style={styles.Card1}>
                        <Text style={styles.cardText1}>Expense</Text>
                        <Text style={styles.cardText2}>20.500.000</Text>
                    </Card>
                    <Card style={styles.Card2}>
                        <Text style={styles.cardText1}> Income </Text>
                        <Text style={styles.cardText2}> 0 </Text>
                    </Card>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    
    Card1:{
        height: 80,
        width: 335,
        backgroundColor:"#D44624",
        borderRadius: 4,
        
    },
    Card2:{
        height: 80,
        width: 335,
        backgroundColor:"#D44624",
        borderRadius: 4,
        
    },
    cardText1:{
        color: 'white',
        fontSize: 13,
        paddingLeft: 20,
        paddingTop: 14,
    },
    cardText2:{
        color:'white',
        paddingLeft: 140,
        paddingBottom: 6,
        fontSize: 34,
    },


})

export default Carousel;