import React, { Component } from 'react'
import { Container } from 'native-base'
import { View, Text, ScrollView } from 'react-native'

import HomeCard from '../common/homeCard';
import Carousels from '../common/carousel';

import styles, {colors} from '../styles/index'


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
                </View>
                <ScrollView
                        horizontal={false}
                        showsHorizontalScrollIndicator={false}>
                    <View style={styles.container}>
                    <View>
                        <Carousels/>
                    </View>
                    <View style={{paddingTop: 16 }}>
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
                </ScrollView>
                
                
            </Container>
        )
    }
}

export default LandingPage