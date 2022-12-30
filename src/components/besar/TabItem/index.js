import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../../../assets';
import Icon from 'react-native-vector-icons/FontAwesome5';


const TabItem = ({ isFocused, onLongPress, onPress, label }) => {
    const IconDashboard = () => {
        if (label === "Home") return isFocused ? <Icon name="home" size={35} color={colors.activeButton} /> : <Icon name="home" size={20} color="black" />
        if (label === "Order") return isFocused ? <Icon name="shopping-cart" size={35} color={colors.activeButton} /> : <Icon name="shopping-cart" size={20} color="black" />
        if (label === "Profile") return isFocused ? <Icon name="user" size={35} color={colors.activeButton} /> : <Icon name="user" size={20} color="black" />
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}>
            <IconDashboard />
            <Text style={styles.text(isFocused)}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        alignItems: "center",
    },
    text: (isFocused) => ({
        fontSize: 13,
        size: 30,
        textAlign: "center",
    })
})