import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';

const Profile = () => {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Image style={styles.avatar} source={require('../../../assets/img/logoapp.png')} />
                <View style={styles.profile}>
                    <Text style={styles.nama} >Yudi Hendrawan</Text>
                    <Text >085374402553</Text>
                    <Text >Jln. Putra Panca</Text>
                </View>
            </View>
        </View >
    )
}

export default Profile

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    container: {
        backgroundColor: "#FFF1A6",
        width: "100%",
        height: "75%",
        position: "absolute",
        borderBottomLeftRadius: 40,
        borderTopLeftRadius: 40,
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginBottom: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    avatar: {
        width: "40%",
        height: "30%",
        alignSelf: "center",
        marginTop: -50,
        borderRadius: 100,
        backgroundColor: "white"
    },
    profile: {
        marginTop: 10,
        alignItems: "center"
    },
    nama: {
        fontSize: "bold",
        fontSize: 24
    }
})