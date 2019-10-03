import React, { Component } from 'react'
import { Container } from 'native-base'
import { View, Text, StyleSheet, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { Actions } from 'react-native-router-flux'
import AppHeader from '../common/header'
import ListTrans from '../common/listTrans'

const beveragesIcon = require('../assets/icon/ic_food_red.png')
const transportIcon = require('../assets/icon/ic_transport_red.png')
const salaryIcon = require('../assets/icon/ic_salary_green.png')

const leftArrow = require('../assets/icon/ic_back_black.png')

class TransPage extends Component {
    render () {
        return (
            <Container>
                <AppHeader
                    leftclick = {() => Actions.pop()}
                    leftbutton  = {leftArrow}
                />
                <View>
                    <Text style={styles.titleText}>
                        Transaction
                    </Text>
                </View>
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
                
                
                
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    titleText:{
        fontSize: 36,
        fontFamily:'PlayfairDisplay-Black',
        paddingLeft: 20,
    },
    searchBg:{
        backgroundColor: '#e8e8e9',
        height: 40,
        borderRadius: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        marginTop: 17,
    },
    searchTextInput:{
        color: '#8E8E93',
        opacity: 1,
        flex:1,
        fontSize: 17,
        lineHeight: 17
    },
    iconStyle:{
        fontSize: 20,
        alignSelf: 'center',
        marginHorizontal: 20,
        color: '#8E8E93',
    },
    dateView:{
        height: 42,
        paddingTop: 15,
        paddingLeft: 20,

    },
    dateView2:{
        height: 42,
        paddingLeft: 20,

    },
    dateText:{
        fontFamily: 'ProximaNova-Regular',
        color: '#8E8E93',
        paddingTop: 18,
    }
})

export default TransPage