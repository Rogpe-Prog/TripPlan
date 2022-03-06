import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native'

class TripsScreen extends Component {
    static navigationOptions = {
        header: null
    }
    render(){
        const dim = Dimensions.get('window')
        return (
            <View style={{
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'stretch'
            }}>
                <View style={{
                backgroundColor: 'red',
                flex: 1,
            }}>
                    <Text>Mapa</Text>
                </View>
                <View style={{
                backgroundColor: 'pink'
            }}>
                <View style={{
                        backgroundColor: 'white',
                        marginTop: 16,
                        marginLeft: 16
                }}>
                    <View style = {{
                        backgroundColor: 'green',
                        width: dim.width-32,
                        height: 160,
                        marginBottom: 6
                    }}>
                        <Text>Image</Text>
                    </View>
                    <Text>Eurotrip</Text>
                    <Text style = {{
                        position: 'absolute',
                        top: 144-16,
                        right: 30,
                        textAlign: 'right',
                        backgroundColor: '#24C6DC',
                        paddingTop: 4,
                        paddingBottom: 4,
                        paddingRight: 4,
                        paddingLeft: 4,
                        color: 'white',
                    }}>5.000 USD</Text>
                </View>
                </View>
            </View>
        )
    }
}

export default TripsScreen