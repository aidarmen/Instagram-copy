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
            <Text style={{ color: tintColor }} >Following</Text>
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
                      <View style={{width: '70%', padding: '2%'}}>
                          <Text><Text style={{ fontWeight: "800" }}>Will Smith </Text> liked your post <Text style={{ fontWeight: "800" }}> Lulaikah. </Text> </Text>
                          <Text style={{ color: 'grey' }}>1 days ago </Text>

                      </View>
                      <Right  style={{padding: 0}}> <Image
    style={{
      width: 56,
      height: 56
    }}
    source={require('../../../assets/feed_images/3.png')
    }
  />  </Right>

              </CardItem>

              <CardItem style={{ flexDirection: 'row' }}>

                    <Left style={{padding: 0}}> <Thumbnail style={{ borderColor: 'pink', borderWidth: 2 }} source={require('../../../assets/StoriesHeaderThumbnails/2.jpg')} /> </Left>
                      <View style={{width: '70%', padding: '2%'}}>
                          <Text><Text style={{ fontWeight: "800" }}>Will Smith </Text> liked your post <Text style={{ fontWeight: "800" }}> I am the best. </Text> </Text>
                          <Text style={{ color: 'grey' }}>6 days ago </Text>

                      </View>
                      <Right  style={{padding: 0}}> <Image
    style={{
      width: 56,
      height: 56
    }}
    source={require('../../../assets/feed_images/1.jpg')
    }
  />  </Right>

              </CardItem>

              <CardItem style={{ flexDirection: 'row' }}>

                    <Left style={{padding: 0}}> <Thumbnail style={{ borderColor: 'pink', borderWidth: 2 }} source={require('../../../assets/StoriesHeaderThumbnails/2.jpg')} /> </Left>
                      <View style={{width: '70%', padding: '2%'}}>
                          <Text><Text style={{ fontWeight: "800" }}>Will Smith </Text> liked your post <Text style={{ fontWeight: "800" }}> Rolyth. </Text> </Text>
                          <Text style={{ color: 'grey' }}>7 days ago </Text>

                      </View>
                      <Right  style={{padding: 0}}> <Image
    style={{
      width: 56,
      height: 56
    }}
    source={require('../../../assets/feed_images/2.jpg')
    }
  />  </Right>

              </CardItem>


              <CardItem style={{ flexDirection: 'row' }}>

                    <Left style={{padding: 0}}> <Thumbnail style={{ borderColor: 'pink', borderWidth: 2 }} source={require('../../../assets/StoriesHeaderThumbnails/2.jpg')} /> </Left>
                      <View style={{width: '70%', padding: '2%'}}>
                          <Text><Text style={{ fontWeight: "800" }}>Will Smith </Text> liked your post <Text style={{ fontWeight: "800" }}> mojojo </Text></Text>
<Text style={{ color: 'grey' }}>7 days ago </Text>
                      </View>
                      <Right  style={{padding: 0}}> <Image
    style={{
      width: 56,
      height: 56
    }}
    source={require('../../../assets/feed_images/4.jpg')
    }
  />  </Right>

              </CardItem>


              <CardItem style={{ flexDirection: 'row' }}>

                    <Left style={{padding: 0}}> <Thumbnail style={{ borderColor: 'pink', borderWidth: 2 }} source={require('../../../assets/StoriesHeaderThumbnails/2.jpg')} /> </Left>
                      <View style={{width: '70%', padding: '2%'}}>
                          <Text><Text style={{ fontWeight: "800" }}>Will Smith </Text> liked your post <Text style={{ fontWeight: "800" }}> I am awesome. </Text> </Text>
                          <Text style={{ color: 'grey' }}>8 days ago </Text>

                      </View>
                      <Right  style={{padding: 0}}> <Image
    style={{
      width: 56,
      height: 56
    }}
    source={require('../../../assets/feed_images/5.jpg')
    }
  />  </Right>

              </CardItem>


              <CardItem style={{ flexDirection: 'row' }}>

                    <Left style={{padding: 0}}> <Thumbnail style={{ borderColor: 'pink', borderWidth: 2 }} source={require('../../../assets/StoriesHeaderThumbnails/2.jpg')} /> </Left>
                      <View style={{width: '70%', padding: '2%'}}>
                          <Text><Text style={{ fontWeight: "800" }}>Will Smith </Text> liked your post <Text style={{ fontWeight: "800" }}> automato. </Text> </Text>
                          <Text style={{ color: 'grey' }}>9 days ago </Text>

                      </View>
                      <Right  style={{padding: 0}}> <Image
    style={{
      width: 56,
      height: 56
    }}
    source={require('../../../assets/feed_images/6.jpg')
    }
  />  </Right>

              </CardItem>


              <CardItem style={{ flexDirection: 'row' }}>

                    <Left style={{padding: 0}}> <Thumbnail style={{ borderColor: 'pink', borderWidth: 2 }} source={require('../../../assets/StoriesHeaderThumbnails/2.jpg')} /> </Left>
                      <View style={{width: '70%', padding: '2%'}}>
                          <Text><Text style={{ fontWeight: "800" }}>Will Smith </Text> liked your post <Text style={{ fontWeight: "800" }}> keleikah. </Text> </Text>
                          <Text style={{ color: 'grey' }}>10 days ago </Text>

                      </View>
                      <Right  style={{padding: 0}}> <Image
    style={{
      width: 56,
      height: 56
    }}
    source={require('../../../assets/feed_images/7.jpg')
    }
  />  </Right>

              </CardItem>


              <CardItem style={{ flexDirection: 'row' }}>

                    <Left style={{padding: 0}}> <Thumbnail style={{ borderColor: 'pink', borderWidth: 2 }} source={require('../../../assets/StoriesHeaderThumbnails/2.jpg')} /> </Left>
                      <View style={{width: '70%', padding: '2%'}}>
                          <Text><Text style={{ fontWeight: "800" }}>Will Smith </Text> liked your post <Text style={{ fontWeight: "800" }}> Bujaja. </Text> </Text>
                          <Text style={{ color: 'grey' }}>мин </Text>

                      </View>
                      <Right  style={{padding: 0}}> <Image
    style={{
      width: 56,
      height: 56
    }}
    source={require('../../../assets/feed_images/8.png')
    }
  />  </Right>

              </CardItem>


              <CardItem style={{ flexDirection: 'row' }}>

                    <Left style={{padding: 0}}> <Thumbnail style={{ borderColor: 'pink', borderWidth: 2 }} source={require('../../../assets/StoriesHeaderThumbnails/2.jpg')} /> </Left>
                      <View style={{width: '70%', padding: '2%'}}>
                          <Text><Text style={{ fontWeight: "800" }}>Will Smith </Text> liked your post <Text style={{ fontWeight: "800" }}> Bahiria. </Text> </Text>
                          <Text style={{ color: 'grey' }}>3 days ago </Text>

                      </View>
                      <Right  style={{padding: 0}}> <Image
    style={{
      width: 56,
      height: 56
    }}
    source={require('../../../assets/feed_images/9.jpg')
    }
  />  </Right>

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
