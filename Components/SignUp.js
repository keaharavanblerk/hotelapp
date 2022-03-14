import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import background from './images/SKY.jpg'

function Signup() {

    return (
        <View>
            <ImageBackground source={background} style={styles.container} >

                <Text style={styles.name}> SKY ROOM HOTEL</Text>

                <TextInput style={styles.input} placeholder="Name" />
                <TextInput style={styles.input} placeholder="Email" />
                <TextInput style={styles.input} placeholder="Password" />
                <TextInput style={styles.input} placeholder="ConfirmPassword" />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.signstyle}>Sign Up</Text>
                </TouchableOpacity>

            </ImageBackground>

        </View>
    );
}

export default Signup;

const styles = StyleSheet.create({


    container: {
        height: '100vh'

    },

    input: {
        marginBottom: 8,
        borderWidth: 1,
        borderColor: '#366AAA',
        marginTop: 5,
        width: 250,
        height: 40,
        paddingLeft: 10,
        backgroundColor: '#E5E5E5',
        borderRadius: 20,
        marginLeft: 40,
    },

    button: {
        backgroundColor: '#366AAA',
        width: 150,
        height: 30,
        marginLeft: 70,
        paddingLeft: 50,
        borderRadius: 20,
        paddingTop: 5,
        marginTop: 15,

    },

    signstyle: {
        color: 'white',

    },

    name: {

        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',
        marginTop: 50,
        marginLeft: 25
    },


});