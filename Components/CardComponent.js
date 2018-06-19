import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'







class CardComponent extends Component {

state ={
  completed: false
}


toggleToDo =() =>{
  this.setState({ completed: !this.state.completed })
}
onDoublePress = (date) => {
        const time = new Date().getTime();
    const delta = time - this.lastPress;

    const DOUBLE_PRESS_DELAY = 400;
    if (delta < DOUBLE_PRESS_DELAY) {
        this.toggleToDo;
    }
    this.lastPress = time;
}

    render() {

        const images = {

            "1": require('../assets/feed_images/1.jpg'),
            "2": require('../assets/feed_images/2.jpg'),
            "3": require('../assets/feed_images/3.png')
        }

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/me.jpg')} />
                        <Body>
                            <Text>Aidar </Text>
                            <Text note>Jan 15, 2018</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image onPress={this.onDoublePress} source={images[this.props.imageSource]} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem style={{ height: 45 }}>
                    <Left>

                        <Button  transparent>
                        <TouchableOpacity onPress={this.toggleToDo}>
                            <Icon name= {this.state.completed ?  "ios-heart" : "ios-heart-outline" }  style={{color: ( this.state.completed ? 'red' : 'black'  )}} />
                            </TouchableOpacity >

                        </Button>

                        <Button transparent>
                            <Icon name="ios-chatbubbles-outline" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send-outline" style={{ color: 'black' }} />
                        </Button>


                    </Left>
                </CardItem>

                <CardItem style={{  }}>
                    <Text>{  (this.props.likes) + (this.state.completed ? "1" : "0" )  } likes</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            <Text style={{ fontWeight: "900" }}>Aidar </Text>
                            Ea do Lorem occaecat laborum do. Minim ullamco ipsum minim eiusmod dolore cupidatat magna exercitation amet proident qui. Est do irure magna dolor adipisicing do quis labore excepteur. Commodo veniam dolore cupidatat nulla consectetur do nostrud ea cupidatat ullamco labore. Consequat ullamco nulla ullamco minim.
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}
export default CardComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    }
});
