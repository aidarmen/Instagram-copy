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

    constructor(props) {
        super(props)

        this.state = {
            activeIndex: 0
        }
    }

    segmentClicked(index) {
        this.setState({
            activeIndex: index
        })
    }
    checkActive = (index) => {
        if (this.state.activeIndex !== index) {
            return (
                { color: 'grey' }
            )
        }
        else {
            return (
                {}
            )
        }

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

    renderSection() {

        if (this.state.activeIndex == 0) {

            return (
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

                    {this.renderSectionOne()}
                </View>
            )

        }
        else if (this.state.activeIndex == 1) {
            return (
                <View>
                    <CardComponent imageSource="1" likes="101" />
                    <CardComponent imageSource="2" likes="101" />
                    <CardComponent imageSource="3" likes="101" />
                </View>
            )
        }
    }

    componentDidMount() {
        console.log(width)
    }

    render() {
        return (
            <Container style={styles.container}>


                <Content>

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


                    <View >




                        {/** Height =width/3 so that image sizes vary according to size of the phone yet remain squares **/}

                        {this.renderSection()}

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
        backgroundColor: 'green'
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
