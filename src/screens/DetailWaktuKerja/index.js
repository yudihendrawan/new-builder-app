import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'

import { InputDate, InputLogin } from '../../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
const DetailWaktuKerja = ({ navigation }) => {

    // console.log(handleConfirm(date))
    useEffect(() => {
        navigation.setOptions({ headerBackTitle: 'Detail Pekerjaan' })
    }, [])
    return (
        <View>
            <InputDate />

        </View>
    )
}
export default DetailWaktuKerja

const styles = StyleSheet.create({})