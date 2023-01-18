import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors } from '../../../assets';
import { CheckboxItem, Inputan } from '../../components';

const DetailPekerjaan = ({ navigation }) => {

    useEffect(() => {
        navigation.setOptions({ headerBackTitle: 'Detail Pekerjaan' })
    }, [])
    return (
        <View style={styles.container}>
            <View>

            </View>
            <View>
                {/* <Text>{props.des}</Text> */}
                <Inputan label='Detail Lokasi' placeholder='Contoh: Nomor 10 , blok M, samping masjid' />
                <Inputan label='Nama Proyek' placeholder='Contoh: Perbaikan Plafon' />
                <Inputan textarea label='Catatan (Opsional)' />
                <CheckboxItem label='Saya menyediakan tempat tinggal untuk pekerja' />

            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity onPress={() => navigation.navigate('DetailWaktuKerja')}>
                    <Text style={styles.buttonText} > Lanjut </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DetailPekerjaan;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    containerButton: {
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 99,
        height: '6%',
        width: '25%',
        bottom: 100,
        backgroundColor: colors.primary,
        right: 20,
        borderRadius: 30,
    },
    buttonText: {
        fontWeight: 'bold',
        // textAlign: 'center',
        alignSelf: 'center',
        fontSize: 18
    },

})