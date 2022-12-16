import React, { useState } from "react";
import { View, Text, Image, StatusBar, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { GambarBuilding } from "../../../assets";
import { InputLogin } from "../../components";


const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)

    const AuthLogin = async () => {
        try {
            setLoading(true);
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
                navigation.replace('MainApp')
            } else {
                // Alert.alert('Error', resData.error.message, [{
                //     text: 'Okay'
                // }])
                navigation.replace('MainApp')
            }
            setLoading(false)
        } catch (error) {
            Alert.alert(error, [{
                text: 'Okay'
            }])
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'transparent'} barStyle="dark-content" />
            <View style={styles.viewImage}>
                <Image source={require('../../../assets/img/builder.jpg')} style={styles.imageCover} />
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

                {loading ? <ActivityIndicator size="small" color="white" /> : <Text style={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 18,
                }}>Login</Text>}
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
        height: "50%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    imageCover: {
        width: "100%",
        height: "90%",
        resizeMode: "cover",
        elevation: 10,
    },
    viewLogin: {
        justifyContent: 'center',
        alignItems: 'center',
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