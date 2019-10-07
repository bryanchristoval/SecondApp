import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Container, Card } from 'native-base'

import styles  from '../styles/index'

import CalcContainer from '../common/calculator/calcContainer'
import Carousels2 from '../common/carousel2'


class AddExpense extends Component {
    render () {
        return (
            <Container>
                <View style={{paddingLeft: 20}}>
                    <View style={styles.topView}>
                        <TouchableOpacity onPress={() => this.props.navigation.popToTop()}>
                            <Image source={require('../assets/icon/ic_close_black.png')}/>
                        </TouchableOpacity>
                        <View style={{paddingLeft: 20}}>
                            <Text style={{fontSize: 13, fontFamily:'ProximaNova-Regular'}}>DATE</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{fontSize: 17, fontFamily:'ProximaNova-Semibold'}}>12 Jan 2018</Text>
                                <Image source={require('../assets/icon/ic_dropdown_black.png')}/>
                            </View>
                            
                        </View>
                    </View>
                    <View>
                        <Carousels2/>
                    </View>
                </View>
                
                <View>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={styles.bottomSwiper}>
                            <Image height='53' source={require('../assets/icon/ic_category_general_red.png')}/>
                            <Text>General</Text>
                        </View>
                        <View style={styles.bottomSwiper}>
                            <Image source={require('../assets/icon/ic_personal_red.png')}/>
                            <Text>Personal</Text>
                        </View>
                        <View style={styles.bottomSwiper}>
                            <Image style={{width: 55, height: 55}}source={require('../assets/icon/ic_food_red.png')}/>
                            <Text>Food & Drinks</Text>
                        </View>
                        <View style={styles.bottomSwiper}>
                            <Image source={require('../assets/icon/ic_transport_red.png')}/>
                            <Text>Transport</Text>
                        </View>
                        <View style={styles.bottomSwiper}>
                            <Image source={require('../assets/icon/ic_home_red.png')}/>
                            <Text>House</Text>
                        </View>
                    </ScrollView>
                    
                    
                        
                </View>
                <CalcContainer/>
            </Container>
        )
    }
}


export default AddExpense