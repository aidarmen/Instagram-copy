import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Container, Content,  Thumbnail, Header, Left, Right, Body } from 'native-base'
import { Card, CardItem,    Button } from 'native-base'
import { Icon } from 'native-base'
import { Image, ScrollView } from "react-native"

class Following extends Component {

    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Text style={{ color: tintColor }} >You</Text>
        )
    }

    render() {
        return (


          <Card>
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

                    <Left style={{padding: 0}}> <Thumbnail style={{ borderColor: 'pink', borderWidth: 2 }} source={require('../../../assets/StoriesHeaderThumbnails/2.jpg')} /> </Left>
                      <View style={{width: '80%', marginLeft:'0%'}}>
                          <Text><Text style={{ fontWeight: "800" }}>Will Smith </Text> started following you <Text style={{ fontWeight: "800" }}>  </Text> </Text>
                          <Text style={{ color: 'grey' }}>1 days ago </Text>

                      </View>


              </CardItem>

              <CardItem style={{ flexDirection: 'row' }}>

                    <Left style={{padding: 0}}> <Thumbnail style={{ borderColor: 'pink', borderWidth: 2 }} source={require('../../../assets/StoriesHeaderThumbnails/1.jpg')} /> </Left>
                      <View style={{width: '80%', marginLeft:'0%'}}>
                          <Text><Text style={{ fontWeight: "800" }}>John Willy </Text> started following you <Text style={{ fontWeight: "800" }}>  </Text> </Text>
                          <Text style={{ color: 'grey' }}>1 days ago </Text>

                      </View>


              </CardItem>
              <CardItem style={{ flexDirection: 'row' }}>

                    <Left style={{padding: 0}}> <Thumbnail style={{ borderColor: 'pink', borderWidth: 2 }} source={require('../../../assets/StoriesHeaderThumbnails/3.jpg')} /> </Left>
                      <View style={{width: '80%', marginLeft:'0%'}}>
                          <Text><Text style={{ fontWeight: "800" }}>lenon_K</Text> started following you <Text style={{ fontWeight: "800" }}>  </Text> </Text>
                          <Text style={{ color: 'grey' }}>1 days ago </Text>

                      </View>


              </CardItem>
              <CardItem style={{ flexDirection: 'row' }}>

                    <Left style={{padding: 0}}> <Thumbnail style={{ borderColor: 'pink', borderWidth: 2 }} source={require('../../../assets/StoriesHeaderThumbnails/4.jpg')} /> </Left>
                      <View style={{width: '80%', marginLeft:'0%'}}>
                          <Text><Text style={{ fontWeight: "800" }}>Jason Greenwood </Text> started following you <Text style={{ fontWeight: "800" }}>  </Text> </Text>
                          <Text style={{ color: 'grey' }}>1 days ago </Text>

                      </View>


              </CardItem>
              <CardItem style={{ flexDirection: 'row' }}>

                    <Left style={{padding: 0}}> <Thumbnail style={{ borderColor: 'pink', borderWidth: 2 }} source={require('../../../assets/StoriesHeaderThumbnails/6.jpg')} /> </Left>
                      <View style={{width: '80%', marginLeft:'0%'}}>
                          <Text><Text style={{ fontWeight: "800" }}>William Steven </Text> started following you <Text style={{ fontWeight: "800" }}>  </Text> </Text>
                          <Text style={{ color: 'grey' }}>1 days ago </Text>

                      </View>


              </CardItem>
              <CardItem style={{ flexDirection: 'row' }}>

                    <Left style={{padding: 0}}> <Thumbnail style={{ borderColor: 'pink', borderWidth: 2 }} source={require('../../../assets/StoriesHeaderThumbnails/7.jpg')} /> </Left>
                      <View style={{width: '80%', marginLeft:'0%'}}>
                          <Text><Text style={{ fontWeight: "800" }}>Will Smith </Text> started following you <Text style={{ fontWeight: "800" }}>  </Text> </Text>
                          <Text style={{ color: 'grey' }}>1 days ago </Text>

                      </View>


              </CardItem>
              <CardItem style={{ flexDirection: 'row' }}>

                    <Left style={{padding: 0}}> <Thumbnail style={{ borderColor: 'pink', borderWidth: 2 }} source={require('../../../assets/StoriesHeaderThumbnails/5.jpg')} /> </Left>
                      <View style={{width: '80%', marginLeft:'0%'}}>
                          <Text><Text style={{ fontWeight: "800" }}>Sara_Conor </Text> started following you <Text style={{ fontWeight: "800" }}>  </Text> </Text>
                          <Text style={{ color: 'grey' }}>1 days ago </Text>

                      </View>


              </CardItem>
              <CardItem style={{ flexDirection: 'row' }}>

                    <Left style={{padding: 0}}> <Thumbnail style={{ borderColor: 'pink', borderWidth: 2 }} source={require('../../../assets/StoriesHeaderThumbnails/2.jpg')} /> </Left>
                      <View style={{width: '80%', marginLeft:'0%'}}>
                          <Text><Text style={{ fontWeight: "800" }}>Will Smith </Text> started following you <Text style={{ fontWeight: "800" }}>  </Text> </Text>
                          <Text style={{ color: 'grey' }}>1 days ago </Text>

                      </View>


              </CardItem>






</ScrollView>
              </Card>
        );
    }
}
export default Following;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
