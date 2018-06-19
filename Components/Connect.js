import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform
} from "react-native";

import MainScreen from './MainScreen'
import Login from './Login'


import { TabNavigator } from 'react-navigation'
import { Icon } from 'native-base'
import { createStackNavigator } from 'react-navigation';

class Connect extends Component {

  static navigationOptions = {
    header:null
  }




    render() {
        return (
            <ConnectStack  />
        );
    }
}
export default Connect;

const ConnectStack = createStackNavigator(
  {
    MainScreen: {
      screen: MainScreen,
      headerMode: 'none',
      header: null,
      navigationOptions: {
          header: null
      }
    },
    Login: {
    screen: Login,
    headerMode: 'none',
    header: null,
    navigationOptions: {
        header: null
    }
  },

  },
  {
    initialRouteName: 'Login',
  }
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
