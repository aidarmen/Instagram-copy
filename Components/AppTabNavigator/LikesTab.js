import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform
} from "react-native";

import Follow from './InsideLikeTab/Follow'
import Following from './InsideLikeTab/Following'



import { TabNavigator } from 'react-navigation'
import { Icon } from 'native-base'

class LikesTab extends Component {
  static navigationOptions ={
    tabBarIcon: ({ tintColor }) => (<Icon name="ios-heart" style={{ color: tintColor }} /> )
  }


    render() {
        return (
            <LikesTabNavigator />
        );
    }
}
export default LikesTab;

const LikesTabNavigator = TabNavigator({

  Following: {
      screen: Following

  },
    Follow: {
        screen: Follow

    }

}, {
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: "top",
        tabBarOptions: {
            style: {
                ...Platform.select({
                    android: {
                        backgroundColor: 'white'
                    },
                    ios: {
                        backgroundColor: 'white'
                    }
                })
            },
            activeTintColor: '#000',
            inactiveTintColor: '#d1cece',
            showLabel: false,
            showIcon: true
        }
    })

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
