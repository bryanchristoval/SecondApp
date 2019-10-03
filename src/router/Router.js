import React, { Component } from "react";
import { Image } from 'react-native'
import { createAppContainer} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import { Container } from 'native-base'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import LandingPage from '../screens/landingScreen'
import TransPage from '../screens/transactionScreen'
import SettingPage from '../screens/settingScreen'
import AddExpense from '../screens/addExpenseScreen'

const focusHomeIcon = require('../assets/menu_icon/ic_menu_selected_home.png')
const unfocusHomeIcon = require('../assets/menu_icon/ic_menu_unselected_home.png')
const focusTransIcon = require('../assets/menu_icon/ic_menu_selected_transaction.png')
const unfocusTransIcon = require('../assets/menu_icon/ic_menu_unselected_transaction.png')
const focusSettingIcon = require('../assets/menu_icon/ic_menu_selected_settings.png')
const unfocusSettingIcon = require('../assets/menu_icon/ic_menu_unselected_settings.png')

const AppNavigator = createBottomTabNavigator(
    {
        Home: {
          screen: LandingPage,
          navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor, focused }) => (
              ( focused ? <Image source={focusHomeIcon}/> : <Image source={unfocusHomeIcon}/>)
            )
          }
        },
        Transaction : {
          screen: TransPage,
          navigationOptions: {
            tabBarLabel: 'Transaction',
            tabBarIcon: ({ tintColor, focused }) => (
              ( focused ? <Image source={focusTransIcon}/> : <Image source={unfocusTransIcon}/>)
            )
          }
        },
        Settings: {
          screen : SettingPage,
          navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: ({ tintColor, focused }) => (
              ( focused ? <Image source={focusSettingIcon}/> : <Image source={unfocusSettingIcon}/>)
            )
          }
        },
        
    },
    {
        initialRouteName: 'Home',
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: '#666',
        
      }
    }
  );

    const GlobalNavigator = createStackNavigator(
      {
        AddExpense : { screen: AddExpense },
        bottomNav : { screen: AppNavigator}
      },
      { 
        headerMode: 'none',
        initialRouteName: 'bottomNav',
      }
    )
const TabNav = createAppContainer(GlobalNavigator);

class AppTab extends Component {
  render() {
    return (
      <Container>
        <TabNav />
      </Container>
    );
  }
}
export default AppTab;