import React from 'react';
import Room1 from './Images/Room1.jpg';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import { firebase } from './firebase/config';

function Amenities() {
    return (

        <View style={styles.container}>

            <View>
                <Image style={styles.Image} source={require('./images/Room1.jpg')} />
            </View>


            <Text >Amenities</Text>

            <Text>Wifi</Text>
            <Text>Air Conditioning</Text>
            <Text>Bar Fridge</Text>
            <Text>Swimming Pool</Text>
            <Text>Cable TV</Text>
            <Text>Shower</Text>

            <Button title="Book Now" />

        </View>

    );
};

export default Amenities;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    Image: {
        width: 100,
        height: 100,

    },

});

