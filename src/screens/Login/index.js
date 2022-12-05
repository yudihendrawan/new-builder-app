import React, { useState } from "react";
import { View, Text, Image, StatusBar, StyleSheet } from "react-native";
import ButtonLogin from "../../components/Login/ButtonLogin";
import InputLogin from "../../components/Login/InputLogin";



const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return <View style={styles.container}>
        <StatusBar backgroundColor={'transparent'} barStyle="dark-content" />
        <View style={styles.viewImage}>
            <Image source={require('../../img/builder.jpg')} style={styles.imageCover} />
        </View>
        <View style={styles.viewLogin}>
            <Text style={styles.textLogin}>Login</Text>
        </View>
        <InputLogin state={email} set={setEmail} icon='envelope' placeholder='Email' isPassword={false} />
        <InputLogin state={password} set={setPassword} icon='lock' placeholder='Password' isPassword={true} />

        <ButtonLogin text="Login" />
    </View>
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