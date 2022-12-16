import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const CardMenu = ({ menu, navigation }) => {
    return (
        <TouchableOpacity style={styles.container} >
            <View style={styles.menu}>
                {menu.gambar}
                <Text style={styles.text}>{menu.nama}</Text>
            </View>
            <Icon name='chevron-right' size={30} color={'black'} />
        </TouchableOpacity>
    )
}

export default CardMenu;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between',
        backgroundColor: '#F9D82B',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginHorizontal: 30,
        padding: responsiveHeight(1),
        borderRadius: 10,
        alignItems: 'center'
    },
    menu: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        marginLeft: 20
    }
})