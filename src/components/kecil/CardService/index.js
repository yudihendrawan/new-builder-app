import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { width } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';


const CardService = ({ menu, navigation }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(menu.halaman)}>
            <View style={styles.menu}>
                {/* {menu.gambar} */}
                <Image style={styles.avatar} source={menu.gambar} />
                <Text style={styles.text}>{menu.nama}</Text>
            </View>
        </TouchableOpacity >
    )
}

export default CardService;

const styles = StyleSheet.create({
    container: {
        // height: 100,
        // flex: 2,
        // flexDirection: "row",
        // justifyContent: "space-around",
        // marginBottom: 100,
        flex: 1,
        flexDirection: 'row',
        // width: '100%'
    },
    menu: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        padding: 20,
        elevation: 5,
    },
    text: {
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 10,
        borderRadius: 35
    }
})