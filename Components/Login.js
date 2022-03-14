import React, { useState } from 'react';
import { Text, StyleSheet, TextInput, ImageBackground, View, TouchableOpacity } from 'react-native';
import background from './images/SKY.jpg'
import { firebase } from './firebase/config';

function Login({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const Logged = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(username, password)
            .then((userCredential) => {
                alert('Logged in');
                var user = userCredential.user;
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (

        <ImageBackground source={background} style={styles.container}>

            <Text style={styles.name}> SKY ROOM HOTEL</Text>

            <View style={styles.box}>

                <TextInput
                    style={styles.input}
                    onChangeText={(email) => setUsername(email)}
                    placeholder="Username" />

                <TextInput
                    style={styles.input}
                    onChangeText={(password) => setPassword(password)}
                    placeholder="Password" />

                <Text onPress={() => navigation.navigate('ForgotPassword')} style={styles.textforgotpassword}> Forgot Password</Text>

                <Text style={styles.textsignup}> Don't Have Account?<Text onPress={() => navigation.navigate('SignUp')}> Sign Up</Text></Text>

                <TouchableOpacity onPress={Logged} style={styles.button}>
                    <Text style={styles.loginstyle}>Login</Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    );
}

export default Login;

const styles = StyleSheet.create({
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
        marginLeft: 40

    },
    button: {
        backgroundColor: '#366AAA',
        width: 150,
        height: 30,
        marginLeft: 70,
        paddingLeft: 50,
        borderRadius: 20,
        paddingTop: 5,
        marginTop: 15
    },
    container: {
        height: '100vh',

    },

    box: {
        marginTop: 120

    },

    textforgotpassword: {
        marginLeft: 165,
        color: 'white'

    },
    textsignup: {
        paddingLeft: 25,
        color: 'white'
    },

    name: {

        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',
        marginTop: 50,
        marginLeft: 25
    },

    loginstyle: {
        color: 'white'
    },

});