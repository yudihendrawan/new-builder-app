import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('MainApp');
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
        flex: 3,
        justifyContent: "center",
    },
    imageSplash: {
        justifyContent: "center",
        alignItems: "center",
        width: 180,
        height: 200,
        marginLeft: 120,
        objectFit: "cover"
    }
})
export default Splash;