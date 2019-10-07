import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { Card } from 'native-base'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import styles from '../styles/index'
import { DATA1 } from '../static/data'
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'

export const sliderW = wp('90%')
export const itemW = wp('90%')

class Carousels2 extends Component {
    
    _renderItem({item, index}){
        if(index === 0){
            return(
            <Card style={styles.bigCarousel1}>
                <Text style={styles.cardText1}>Add Expense</Text>
                <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                    <Text style={styles.cardText2}>Rp</Text>
                    <Text style={styles.cardText3}>Tap here to add notes</Text>
                </View>       
            </Card>
            )
        }else{
            return(
                <Card style={styles.bigCarousel2}>
                    <Text style={styles.cardText1}>Add Income</Text>
                    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                        <Text style={styles.cardText2}>Rp</Text>
                        <Text style={styles.cardText3}>Tap here to add notes</Text>
                    </View>       
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
export default Carousels2;