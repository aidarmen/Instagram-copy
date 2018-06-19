import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    FlatList,
    ScrollView,
     TextInput,
} from "react-native";

import { Container, Content, Icon, Header, Left, Body, Right, Segment, Button, Thumbnail } from 'native-base'
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { List, ListItem, SearchBar } from 'react-native-elements';
import { Constants, Video } from 'expo';
var { height, width } = Dimensions.get('window');

import CardComponent from '../CardComponent'

var images = [
  require('../../assets/feed_images/1.jpg'),
    require('../../assets/feed_images/2.jpg'),
    require('../../assets/feed_images/3.png'),
    require('../../assets/feed_images/4.jpg'),
    require('../../assets/feed_images/5.jpg'),
    require('../../assets/feed_images/6.jpg'),
    require('../../assets/feed_images/7.jpg'),
    require('../../assets/feed_images/8.png'),
    require('../../assets/feed_images/9.jpg'),
    require('../../assets/feed_images/10.jpg'),
    require('../../assets/feed_images/11.jpg'),
    require('../../assets/feed_images/12.jpg'),
]

class SearchTab extends Component {

    static navigationOptions = {


        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-search" style={{ color: tintColor }} />
        )
    }





    renderSectionOne() {
        return images.map((image, index) => {
            return (
                <View key={index} style={[ index % 5 == 0 ? {width: (width) * 2 / 3 } :  {width: (width) / 3 } , index % 5 == 0 ? { height: (width) / 2 } : { height: (width) / 4 }, { marginBottom: 0 }, index % 6 !== 0 ? { paddingLeft: 0 } : { paddingLeft: 0 }]}>
                    <Image style={{
                        flex: 1,
                        alignSelf: 'stretch',
                        width: undefined,
                        height: undefined,
                        borderColor: 'white', borderWidth: 2

                    }}
                        source={image}>
                    </Image>

                </View>
            )
        })

    }



    componentDidMount() {
        console.log(width)
    }

    render() {
        return (
            <Container style={styles.container}>


                <Content style={{marginTop: 15}}>

                    <View>
                    <View style={styles.searchSection}>
      <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
      <TextInput
          style={styles.input}
          placeholder="Search"
          onChangeText={(searchString) => {this.setState({searchString})}}
          underlineColorAndroid="transparent"
      />
  </View>

<View style={{padding: 2, backgroundColor:'white'}}>
                    <ScrollView

                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            alignItems: 'center',
                            paddingStart: 5,
                            paddingEnd: 5
                        }}

                    >
                        <Thumbnail
                            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                            source={require('../../assets/StoriesHeaderThumbnails/1.jpg')} />
                        <Thumbnail
                            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                            source={require('../../assets/StoriesHeaderThumbnails/2.jpg')} />
                        <Thumbnail
                            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                            source={require('../../assets/StoriesHeaderThumbnails/3.jpg')} />
                        <Thumbnail
                            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                            source={require('../../assets/StoriesHeaderThumbnails/4.jpg')} />

                        <Thumbnail
                            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                            source={require('../../assets/StoriesHeaderThumbnails/5.jpg')} />
                        <Thumbnail
                            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                            source={require('../../assets/StoriesHeaderThumbnails/6.jpg')} />
                        <Thumbnail
                            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                            source={require('../../assets/StoriesHeaderThumbnails/7.jpg')} />

                    </ScrollView>

                    </View>
                        {/** User Photo Stats**/}
                        <View style={{ flexDirection: 'row' }}>

                            {/**User photo takes 1/3rd of view horizontally **/}


                            {/**User Stats take 2/3rd of view horizontally **/}

                        </View>




                    </View>


                    <View  style={{flex: 2,
        flexDirection: 'row', marginTop: 10}}>




                        {/** Height =width/3 so that image sizes vary according to size of the phone yet remain squares **/}

                        <Video
                          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                          rate={1.0}
                          volume={1.0}
                          isMuted={true}
                          resizeMode="cover"
                          shouldPlay
                          isLooping
                          style={{width: (width) * 2 / 3, height: (width) *2 /3,marginRight: 1}}

                        />

                        <View  style={{flex: 1,
            flexDirection: 'column'}}>
<Image resizeMode="cover" style={{width: (width) / 3, height: (width) /3, marginBottom: 1 }} source={require('../../assets/feed_images/1.jpg')} />
<Image resizeMode="cover" style={{width: (width) / 3, height: (width)  /3 }}  source={require('../../assets/feed_images/2.jpg')} />

            </View>


                    </View>


                    <View  style={{flex: 1,
                  flexDirection: 'row', marginTop:1}}>
                  <Image resizeMode="cover" style={{width: (width) / 3, height: (width) /3, marginRight: 1 }} source={require('../../assets/feed_images/3.png')} />
                  <Image resizeMode="cover" style={{width: (width) / 3, height: (width)  /3, marginRight: 1  }}  source={require('../../assets/feed_images/4.jpg')} />
                  <Image resizeMode="cover" style={{width: (width) / 3, height: (width)  /3 }}  source={require('../../assets/feed_images/5.jpg')} />
                  </View>
                  <View  style={{flex: 1,
                  flexDirection: 'row',  marginTop:1}}>
                  <Image resizeMode="cover" style={{width: (width) / 3, height: (width) /3, marginRight: 1 }} source={require('../../assets/feed_images/8.png')} />
                  <Image resizeMode="cover" style={{width: (width) / 3, height: (width)  /3, marginRight: 1 }}  source={require('../../assets/feed_images/9.jpg')} />
                  <Image resizeMode="cover" style={{width: (width) / 3, height: (width)  /3 }}  source={require('../../assets/feed_images/10.jpg')} />
                  </View>


                    <View  style={{flex: 2,
        flexDirection: 'row', marginTop:1}}>




                        {/** Height =width/3 so that image sizes vary according to size of the phone yet remain squares **/}


                        <View  style={{
                      flexDirection: 'column'}}>
                      <Image resizeMode="cover" style={{width: (width) / 3, height: (width) /3,  marginBottom: 1,  marginRight: 1 }} source={require('../../assets/feed_images/6.jpg')} />
                      <Image resizeMode="cover" style={{width: (width) / 3, height: (width)  /3,  marginRight: 1 }}  source={require('../../assets/feed_images/7.jpg')} />

                      </View>
                        <Video
                          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                          rate={1.0}
                          volume={1.0}
                          isMuted={true}
                          resizeMode="cover"
                          shouldPlay
                          isLooping

                          style={{width: (width) * 2 / 3, height: (width) *2 /3 }}
                        />




                    </View>

                    <View  style={{flex: 1,
                  flexDirection: 'row', marginTop:1}}>
                  <Image resizeMode="cover" style={{width: (width) / 3, height: (width) /3, marginRight: 1 }} source={require('../../assets/feed_images/11.jpg')} />
                  <Image resizeMode="cover" style={{width: (width) / 3, height: (width)  /3, marginRight: 1  }}  source={require('../../assets/feed_images/12.jpg')} />
                  <Image resizeMode="cover" style={{width: (width) / 3, height: (width)  /3 }}  source={require('../../assets/feed_images/8.png')} />
                  </View>

                </Content>
            </Container >
        );
    }
}
export default SearchTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    searchSection: {
    flex: 1,
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
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
}
});

{/**  // <FlatList
            //     horizontal={false}
            //     numColumns={3}
            //     data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'e' }, { key: 'f' }, { key: 'g' }, { key: 'h' }, { key: 'i' }, { key: 'j' }, { key: 'k' }, { key: 'l' }, { key: 'm' }, { key: 'n' }, { key: 'o' }]}
            //     renderItem={({ item, index }) =>
            //         <View style={[{ width: (width) / 3 }, { height: (width) / 3 }, { marginBottom: 2 }, index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }]}>
            //             <Image style={{
            //                 flex: 1,
            //                 alignSelf: 'stretch',
            //                 width: undefined,
            //                 height: undefined,
            //             }}
            //                 source={images[index]}>
            //             </Image>
            //         </View>
            //     }//end render item
            // />
 **/}
