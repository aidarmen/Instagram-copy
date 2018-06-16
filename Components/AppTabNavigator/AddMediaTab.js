import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Camera, Permissions } from 'expo'

import { Container, Content, Header, Item, Icon, Input, Button } from 'native-base'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

class AddMediaTab extends Component {

static navigationOptions ={
  tabBarIcon: ({ tintColor }) => (<Icon name="ios-add-circle" style={{ color: tintColor }} /> )
}



    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back
    }

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' })
    }

    render() {
        const { hasCameraPermission } = this.state

        if (hasCameraPermission === null) {
            return <View />
        }
        else if (hasCameraPermission === false) {
            return <Text> No access to camera</Text>
        }
        else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera style={{ flex: 1, justifyContent: 'space-between' }} type={this.state.type} >

                        <Header
                            style={{
                                position: 'absolute', backgroundColor: 'transparent',
                                left: 0, top: 0, right: 0, zIndex: 100, alignItems: 'center', borderBottomWidth: 0
                            }}
                        >


                            <View style={{ flexDirection: 'row', flex: 2, justifyContent: 'space-around' }}>
                                <Icon name="ios-flash" style={{ color: 'white', fontWeight: 'bold' }} />
                                <Icon
                                    onPress={() => {
                                        this.setState({
                                            type: this.state.type === Camera.Constants.Type.back ?
                                                Camera.Constants.Type.front :
                                                Camera.Constants.Type.back
                                        })
                                    }}
                                    name="ios-reverse-camera" style={{ color: 'white', fontWeight: 'bold' }} />
                            </View>
                        </Header>

                        <View style={{  paddingHorizontal: 10, marginBottom: 15 }}>


                            <View style={{ alignSelf: 'center' }}>
                                <MaterialCommunityIcons name="circle-outline"
                                    style={{ color: 'white', fontSize: 100 }}
                                ></MaterialCommunityIcons>
                                </View>

                             <View style={{ alignSelf: 'flex-end' }}>
                                <Icon name="ios-images" style={{ color: 'white', fontSize: 36 }} />
                                </View>



                        </View>
                    </Camera>
                </View>
            )
        }
    }
}
export default AddMediaTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
