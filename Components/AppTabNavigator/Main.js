import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform
} from "react-native";

import Direct from './Direct'
import HomeTab from './HomeTab'
import AddMediaTab from './AddMediaTab'

import { TabNavigator } from 'react-navigation'
import { Icon } from 'native-base'
import { createStackNavigator } from 'react-navigation';

class LikesTab extends Component {
  static navigationOptions = {

      tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" style={{ color: tintColor }} />
      )
  }





    render() {
        return (
            <RootStack  />
        );
    }
}
export default LikesTab;

const RootStack = createStackNavigator(
  {
    Direct: {
      screen: Direct,
      headerMode: 'none',
      header: null,
      navigationOptions: {
          header: null
      }
    },
    HomeTab: {
    screen: HomeTab,
    headerMode: 'none',
    header: null,
    navigationOptions: {
        header: null
    }
  },
  AddMediaTab: {
    screen: AddMediaTab,
    headerMode: 'none',
    header: null,
    navigationOptions: {
        header: null
    }
  },
  },
  {
    initialRouteName: 'HomeTab',
  }
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
