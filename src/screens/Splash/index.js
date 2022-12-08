import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login');
        }, 2000)
    });
    return (
        <View style={styles.imageContainer}>
            <Image source={require('../../../assets/img/logoapp.png')} style={styles.imageSplash} />
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        backgroundColor: '#F9D82B',
        height: "100%",
        width: "100%",
        flex: 1,
        justifyContent: "center"
    },
    imageSplash: {
        justifyContent: "center",
        alignItems: "center",
        width: 400,
        height: 450,
        marginLeft: 8
    }
})
export default Splash;