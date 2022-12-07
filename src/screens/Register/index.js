import React, { useState } from "react";
import { View, Text, Image, StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import InputLogin from "../../components/LoginButton/InputLogin";

const Register = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const AuthSign = async () => {
        const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCOTTiPBA9Kh3BLuyc6yuMbg0ls2mQXKDw", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            })
        })
        const restData = await response.json()
        console.log(restData)
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'transparent'} barStyle="dark-content" />
            <View style={styles.viewImage}>
                <Image source={require('../../img/register.jpg')} style={styles.imageCover} />
            </View>
            <View style={styles.viewLogin}>
                <Text style={styles.textLogin}>Register</Text>
            </View>

            <InputLogin state={email} set={setEmail} icon='envelope' placeholder='Email' isPassword={false} />
            <InputLogin state={password} set={setPassword} icon='lock' placeholder='Password' isPassword={true} />
            <TouchableOpacity onPress={AuthSign}
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
                }} >Register</Text>
            </TouchableOpacity>

            <View style={{ marginLeft: 25, marginTop: 10, flex: 1, flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold' }}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.replace('Login')}>
                    <Text style={{ color: '#1d4ed8', fontWeight: 'bold' }}>Login</Text>
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

export default Register;