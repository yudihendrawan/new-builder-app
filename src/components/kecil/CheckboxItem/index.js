import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox'

const CheckboxItem = ({ label }) => {
    const [isChecked, setChecked] = useState(false);
    return (
        <View style={styles.checkboxContainer}>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
            <Text style={styles.textCheckbox}>{label}</Text>
        </View>

    )
}

export default CheckboxItem

const styles = StyleSheet.create({
    checkbox: {
        marginRight: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 18,
        margin: 18
    },
    textCheckbox: {
        alignSelf: 'center'
    }
})