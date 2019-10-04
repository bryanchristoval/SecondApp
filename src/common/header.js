import React, { Component } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { Header, Left, Body, Right, Button, Title } from 'native-base'


class AppHeader extends Component {
    render(){
        return (
            <Header>
                <Left>
                    <TouchableOpacity transparent onPress = {this.props.leftclick}>
                        <Image source={ this.props.leftbutton }/>
                    </TouchableOpacity> 
                </Left>
                <Body>
                    <Title>
                        {this.props.title}
                    </Title>
                </Body>
                <Right>
                    <Button transparent onPress = {this.props.rightclick}>
                        
                    </Button>
                </Right>
            </Header>

        )
    }
}

export default AppHeader;