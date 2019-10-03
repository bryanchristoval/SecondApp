import React, { Component } from 'react'
import { Container } from 'native-base'
import { View, Text, StyleSheet } from 'react-native'

import HomeCard from '../common/homeCard';
import Carousel from '../common/carousel';
import AppHeader from '../common/header'


class LandingPage extends Component {
    render () {
        return (
            <Container>
            
                <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text1}>JANUARY 2018</Text>
                </View>
                <View style={styles.header2}>
                    <Text style={{fontSize:36, fontFamily:'PlayfairDisplay-Black'}}>Dashboard</Text>
                </View>
                <View>
                    <Carousel/>
                </View>
                <View>
                    <HomeCard
                        leftText= 'TODAY'
                        amount='0'
                        showRed={true}
                        click1 = {() => this.props.navigation.navigate("AddExpense")}
                    />
                    
                    <HomeCard
                        leftText= 'SAT'
                        amount='300.000'
                        minplus='-'
                        showColor={true}
                    />
                    <HomeCard
                        leftText= 'FRI'
                        amount='2.000.000'
                        minplus='-'
                        showColor={true}
                    />
                    <HomeCard 
                        leftText= 'THU'
                        amount='5.000.000'
                        minplus='+'
                    />
                    <HomeCard
                        leftText= 'WED'
                        amount='500.000'
                        minplus='-'
                        showColor={true}
                    />
                    <HomeCard
                        leftText= 'THU'
                        amount='500.000'
                        minplus='-'
                        showColor={true}
                    />
                    <HomeCard
                        leftText= 'MON'
                        amount='500.000'
                        minplus='-'
                        showColor={true}
                        
                    />
                
                </View>
                </View>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    text1:{
        fontSize: 19,
        fontFamily:'ProximaNova-Regular',
        color: '#8E8E93'
        
    },
    container:{
        paddingLeft: 20,
    },
    
    header:{
        marginTop: 26,
    },
    header2:{
    },


    Card1:{
        height: 80,
        width: 335,
        backgroundColor:"#D44624",
        borderRadius: 4,
        borderBottomWidth: null,
        
    },
})

export default LandingPage