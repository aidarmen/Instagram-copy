import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, TextInput
} from "react-native";

import { Container, Content,  Thumbnail, Header, Left, Right, Body } from 'native-base'
import { Card, CardItem,    Button } from 'native-base'
import { Icon } from 'native-base'
import { Image, ScrollView } from "react-native"
import {HomeTab } from "./HomeTab"
import EntypoIcon from 'react-native-vector-icons/Entypo';

class Direct extends Component {

    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Text style={{ color: tintColor }} >You</Text>
        )
    }

    render() {
        return (
          <Container>
          <Header>
              <Left><EntypoIcon  onPress={() => this.props.navigation.navigate( 'HomeTab' )} name="chevron-thin-left" style={{ paddingLeft: 10, fontSize: 25 }} /></Left>
              <Body><Text style={{ fontSize: 20 }}>Direct</Text></Body>
              <Right><Icon    style={{ paddingRight: 10,  fontSize: 40 }} name="ios-add" /></Right>
          </Header>

          <Card>
          <View style={styles.searchSection}>
          <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
          <TextInput
          style={styles.input}
          placeholder="Search"
          onChangeText={(searchString) => {this.setState({searchString})}}
          underlineColorAndroid="transparent"
          />
          </View>
          <ScrollView
              vertical={true}
              showsVerticalScrollIndicator={true}
              indicatorStyle={'black'}
              contentContainerStyle={{
                  alignItems: 'center',
                  paddingStart: 5,
                  paddingEnd: 5
              }}

          >
              <CardItem style={{ flexDirection: 'row' }}>

                    <Left style={{padding: 0}}> <Thumbnail style={{ borderColor: 'pink', borderWidth: 2 }} source={require('../../assets/StoriesHeaderThumbnails/2.jpg')} /> </Left>
                      <View style={{width: '65%', marginLeft:'0%'}}>
                         <Text style={{ fontWeight: "800" }}>Will Smith </Text>
                          <Text> How are you,bro? </Text>
                          <Text style={{ color: 'grey' }}>1 days ago </Text>
                      </View>
                    <Right  style={{padding: 0 }}> <Icon
                          style={{ color: '#000', fontSize: 40}}
                          name="ios-camera-outline"
                        />
                      </Right>
              </CardItem>

              <CardItem style={{ flexDirection: 'row' }}>

                    <Left style={{padding: 0}}> <Thumbnail style={{ borderColor: 'pink', borderWidth: 2 }} source={require('../../assets/StoriesHeaderThumbnails/1.jpg')} /> </Left>
                      <View style={{width: '65%', marginLeft:'0%'}}>
                         <Text style={{ fontWeight: "800" }}>SilentAssasin</Text>
                          <Text>You are gonna die today</Text>
                          <Text style={{ color: 'grey' }}>1 second ago </Text>
                      </View>
                      <Right  style={{padding: 0 }}> <Icon
                          style={{ color: '#000', fontSize: 40}}
                          name="ios-camera-outline"
                        />
                      </Right>
              </CardItem>
             <CardItem style={{ flexDirection: 'row' }}>

                    <Left style={{padding: 0}}> <Thumbnail style={{ borderColor: 'pink', borderWidth: 2 }} source={require('../../assets/StoriesHeaderThumbnails/4.jpg')} /> </Left>
                      <View style={{width: '65%', marginLeft:'0%'}}>
                         <Text style={{ fontWeight: "800" }}>Doodle</Text>
                          <Text> How are you,bro? </Text>
                          <Text style={{ color: 'grey' }}>1 days ago </Text>
                      </View>
                      <Right  style={{padding: 0 }}> <Icon
                          style={{ color: '#000', fontSize: 40}}
                          name="ios-camera-outline"
                        />
                      </Right>
              </CardItem>
              <CardItem style={{ flexDirection: 'row' }}>

                    <Left style={{padding: 0}}> <Thumbnail style={{ borderColor: 'pink', borderWidth: 2 }} source={require('../../assets/StoriesHeaderThumbnails/3.jpg')} /> </Left>
                      <View style={{width: '65%', marginLeft:'0%'}}>
                         <Text style={{ fontWeight: "800" }}>Jessica</Text>
                          <Text> How are you,bro? </Text>
                          <Text style={{ color: 'grey' }}>1 days ago </Text>
                      </View>
                    <Right  style={{padding: 0 }}> <Icon
                          style={{ color: '#000', fontSize: 40}}
                          name="ios-camera-outline"
                        />
                      </Right>
              </CardItem>
              <CardItem style={{ flexDirection: 'row' }}>

                    <Left style={{padding: 0}}> <Thumbnail style={{ borderColor: 'pink', borderWidth: 2 }} source={require('../../assets/StoriesHeaderThumbnails/5.jpg')} /> </Left>
                      <View style={{width: '65%', marginLeft:'0%'}}>
                         <Text style={{ fontWeight: "800" }}>Gaucho</Text>
                          <Text> Mexico is great</Text>
                          <Text style={{ color: 'grey' }}>1 year ago </Text>
                      </View>
                    <Right  style={{padding: 0 }}> <Icon
                          style={{ color: '#000', fontSize: 40}}
                          name="ios-camera-outline"
                        />
                      </Right>
              </CardItem>
              <CardItem style={{ flexDirection: 'row' }}>

                    <Left style={{padding: 0}}> <Thumbnail style={{ borderColor: 'pink', borderWidth: 2 }} source={require('../../assets/StoriesHeaderThumbnails/6.jpg')} /> </Left>
                      <View style={{width: '65%', marginLeft:'0%'}}>
                         <Text style={{ fontWeight: "800" }}>DADADA </Text>
                          <Text> LoL? </Text>
                          <Text style={{ color: 'grey' }}>1 days ago </Text>
                      </View>
                    <Right  style={{padding: 0 }}> <Icon
                          style={{ color: '#000', fontSize: 40}}
                          name="ios-camera-outline"
                        />
                      </Right>
              </CardItem>
              <CardItem style={{ flexDirection: 'row' }}>

                    <Left style={{padding: 0}}> <Thumbnail style={{ borderColor: 'pink', borderWidth: 2 }} source={require('../../assets/StoriesHeaderThumbnails/7.jpg')} /> </Left>
                      <View style={{width: '65%', marginLeft:'0%'}}>
                         <Text style={{ fontWeight: "800" }}>Jacob</Text>
                          <Text> LOl wut</Text>
                          <Text style={{ color: 'grey' }}>1 days ago </Text>
                      </View>
                    <Right  style={{padding: 0 }}> <Icon
                          style={{ color: '#000', fontSize: 40}}
                          name="ios-camera-outline"
                        />
                      </Right>
              </CardItem>
</ScrollView>

              </Card>
              </Container>
        );
    }
}
export default Direct;

const styles = StyleSheet.create({

    searchSection: {

    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
},
searchIcon: {
    padding: 10,
},
input: {
    flex: 1,
    paddingTop: 0,
    paddingRight: 10,
    paddingBottom: 0,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
}
});
