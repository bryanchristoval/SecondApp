import React, { Component } from 'react'
import { Container } from 'native-base'
import { Router, Scene } from 'react-native-router-flux'
import AppNavigator from '../router/Router'
import SettingPage from '../screens/settingScreen'
import TransPage from '../screens/transactionScreen'
import AddExpense from '../screens/addExpenseScreen'

class RouterFlux extends Component {
    render(){
        return(
            <Container>
                <Router>
                    <Scene key='root'>
                        <Scene key='index' hideNavBar component={AppNavigator}/>
                        <Scene key='setting' hideNavBar component={SettingPage}/>
                        <Scene key='transaction' hideNavBar component={TransPage}/>  
                        <Scene key='addexpense' hideNavBar component={AddExpense}/>
                    </Scene>                        
                </Router>
            </Container>
        )
    }
}

export default RouterFlux