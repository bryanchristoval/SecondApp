import React, { Component } from 'react'
import { Container } from 'native-base'
import { View, Text, TextInput, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import AppHeader from '../common/header'

import ListTrans from '../common/listTrans'

import styles from '../styles/index'


const beveragesIcon = require('../assets/icon/ic_food_red.png')
const transportIcon = require('../assets/icon/ic_transport_red.png')
const salaryIcon = require('../assets/icon/ic_salary_green.png')

const leftArrow = require('../assets/icon/ic_back_black.png')

class TransPage extends Component {
    render () {
        return (
            <Container>
                <AppHeader
                    leftclick = {() => this.props.navigation.popToTop()}
                    leftbutton  = {leftArrow}
                />
                
                <View>
                    <Text style={styles.titleText}>
                        Transaction
                    </Text>
                </View>
                <ScrollView>
                    <View style={styles.searchBg}>
                        <Icon name='search1' style={styles.iconStyle}/>
                        <TextInput style={styles.searchTextInput} placeholder='Search'/>
                    </View>
                    <View style={styles.dateView}>
                        <Text style={styles.dateText}>TODAY, 10 JAN 2018</Text>
                    </View>
                    
                    <ListTrans
                        categories = 'Food & Drink'
                        amount = '300.000'
                        detail = 'Groceries'
                        minplus = '-'
                        image = {beveragesIcon}
                        showColor={true}
                    />
                    <ListTrans
                        categories = 'Transport'
                        amount = '300.000'
                        detail = 'Uber'
                        minplus = '-'
                        image = {transportIcon}
                        showColor={true}
                    />
                    <ListTrans
                        categories = 'Salary'
                        amount = '5.000.000'
                        detail = 'Antikode'
                        minplus = '+'
                        image = {salaryIcon}
                        showColor={false}
                    />
                    <View style={styles.dateView2}>
                        <Text style={styles.dateText}>SAT, 9 JAN 2018</Text>
                    </View>
                    <ListTrans
                        categories = 'Food & Drinks'
                        amount = '300.000'
                        detail = 'Groceries'
                        minplus = '-'
                        image = {beveragesIcon}
                        showColor={true}
                    />
                    <ListTrans
                        categories = 'Transport'
                        amount = '300.000'
                        detail = 'Uber'
                        minplus = '-'
                        image = {transportIcon}
                        showColor={true}
                    />
                </ScrollView>
                
                
                
                
            </Container>
        )
    }
}    

export default TransPage