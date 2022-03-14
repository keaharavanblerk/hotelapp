import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { firebase } from './firebase/config';

function Rooms() {

    return (
        <View>

            <TextInput
                style={styles.input}
                onChangeText={(search) => setEmail(search)}
                placeholder="Search"
            />

            <View style={styles.hotels}>

                <View>
                    <Image style={styles.Image} source={require('./images/Room1.jpg')} />
                </View>

                <View>
                    <Text style={styles.words}>Honeymoon Suite</Text>
                    <Text style={styles.words}>1 Bedroom For 2</Text>
                    <Text style={styles.words}>R450 Per Night</Text>
                    <Text style={styles.words}>Conservative Suite</Text>
                    <Text style={styles.words}>4 Stars</Text>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textview}>View More</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.hotels}>

                <Image style={styles.Image} source={require('../Components/images/Room2.jpg')} />

                <View>
                    <Text style={styles.words}>Honeymoon Suite</Text>
                    <Text style={styles.words}>1 Bedroom For 2</Text>
                    <Text style={styles.words}>R550 Per Night</Text>
                    <Text style={styles.words}>Adventurous Suite</Text>
                    <Text style={styles.words}>5 Stars</Text>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textview}>View More</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.hotels}>

                <Image style={styles.Image} source={require('../Components/images/Room3.jpg')} />

                <View>
                    <Text style={styles.words}>Honeymoon Suite</Text>
                    <Text style={styles.words}>1 Bedroom For 2</Text>
                    <Text style={styles.words}>R650 Per Night</Text>
                    <Text style={styles.words}>Romantic Suite</Text>
                    <Text style={styles.words}>6 Stars</Text>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textview}>View More</Text>
                </TouchableOpacity>

            </View>

        </View>

    );
};

export default Rooms;

const styles = StyleSheet.create({
    input: {
        marginBottom: 8,
        borderWidth: 1,
        borderColor: '#366AAA',
        borderRadius: 20,
        marginTop: 5,
        height: 40,
        paddingLeft: 10,

    },

    button: {
        flexDirection: "row",
        borderRadius: 25,
        marginTop: 80,
        paddingLeft: 4,
        borderWidth: 1,
        borderColor: '#366AAA',
        borderRadius: 20,
        width: 100

    },

    Image: {
        width: 100,
        height: 100,

    },

    hotels: {
        flexDirection: "row",
        marginTop: 12,
        paddingLeft: 20,

    },

    words: {
        paddingLeft: 10,


    },

    textview: {
        fontSize: 12,
        paddingLeft: 12,

    },


});