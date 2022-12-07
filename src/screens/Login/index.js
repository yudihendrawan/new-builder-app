import React, { useState } from "react";
import { View, Text, Image, StatusBar, StyleSheet, TouchableOpacity, Alert } from "react-native";
import InputLogin from "../../components/LoginButton/InputLogin";

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const AuthLogin = async () => {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCOTTiPBA9Kh3BLuyc6yuMbg0ls2mQXKDw', {
            method: 'POST',
            header: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            })
        })
        const resData = await response.json()
        if (response.ok) {
            navigation.replace('Welcome')
        } else {
            Alert.alert('Error', resData.error.message, [{
                text: 'okay'
            }])
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'transparent'} barStyle="dark-content" />
            <View style={styles.viewImage}>
                <Image source={require('../../img/builder.jpg')} style={styles.imageCover} />
            </View>
            <View style={styles.viewLogin}>
                <Text style={styles.textLogin}>Login</Text>
            </View>
            <InputLogin state={email} set={setEmail} icon='envelope' placeholder='Email' isPassword={false} />
            <InputLogin state={password} set={setPassword} icon='lock' placeholder='Password' isPassword={true} />

            <TouchableOpacity onPress={AuthLogin}
                style={{
                    backgroundColor: '#2396F2',
                    marginHorizontal: 20,
                    marginTop: 10,
                    borderRadius: 15,
                    elevation: 5,
                    padding: 10
                }}>

                <Text style={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 18,
                }}>Login</Text>
            </TouchableOpacity>
            <View style={{ marginLeft: 25, marginTop: 10, flex: 1, flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold' }}>Dont have an account?</Text>
                <TouchableOpacity onPress={() => navigation.replace('Register')}>
                    <Text style={{ fontWeight: 'bold', color: '#1d4ed8' }}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9D82B'
    },
    viewImage: {
        width: "100%",
        height: "50%"
    },
    imageCover: {
        width: "100%",
        height: "90%",
        resizeMode: "cover",
        elevation: 10,
    },
    viewLogin: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textLogin: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
        color: 'black'
    }

});

export default Login;