import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { Card } from 'native-base'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import styles from '../styles/index'
import { DATA1 } from '../static/data'
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'

export const sliderW = wp('90%')
export const itemW = wp('90%')

class Carousels extends Component {
    
    _renderItem({item, index}){
        if(index === 0){
            return(
            <Card style={styles.Card1}>
                <Text style={styles.cardText1}>Expense</Text>
                <Text style={styles.cardText4}>20.500.000</Text>
            </Card>
            )
        }else{
            return(
                <Card style={styles.Card2}>
                    <Text style={styles.cardText1}> Income </Text>
                    <Text style={styles.cardText4}> 0 </Text>
                </Card>
            )
        } 
    }
    render () {
        return (
            <View>
                <Carousel
                    data={DATA1}
                    renderItem={this._renderItem}
                    sliderWidth= {sliderW}
                    itemWidth={itemW}
                />
            </View>
        )
    }
}
export default Carousels;