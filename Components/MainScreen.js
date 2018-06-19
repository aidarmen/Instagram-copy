import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform
} from "react-native";

import Main from './AppTabNavigator/Main'
import SearchTab from './AppTabNavigator/SearchTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'

import { TabNavigator } from 'react-navigation'
import { Icon } from 'native-base'


class MainScreen extends Component {

static navigationOptions = {
  header:null
}

    render() {
        return (
            <AppTabNavigator />
        );
    }
}
export default MainScreen;

const AppTabNavigator = TabNavigator({

    Main: {
        screen: Main
    },
    SearchTab: {
        screen: SearchTab

    },
    AddMediaTab: {
        screen: AddMediaTab
    },
    LikesTab: {
        screen: LikesTab
    },
    ProfileTab: {
        screen: ProfileTab
    }

}, {
        animationEnabled: true,
        swipeEnabled: false,
        tabBarPosition: "bottom",
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
