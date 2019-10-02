import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs'
import LandingPage from '../screens/landingScreen'
import { Container, Icon } from "native-base";
import TransPage from '../screens/transactionScreen'
import SettingPage from '../screens/settingScreen'


const AppNavigator = createBottomTabNavigator(
    {
        Home: { screen: LandingPage},
        Settings: {screen : SettingPage},
        Transaction : {screen: TransPage},
    },
    {
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        tabBarOptions: {
        activeTintColor: '#f2f2f2',
        activeBackgroundColor: "#F08080",
        inactiveTintColor: '#666',
        labelStyle: {
            fontSize: 18,
            padding: 12
        }
      }
    });
const TabNav = createAppContainer(AppNavigator);

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