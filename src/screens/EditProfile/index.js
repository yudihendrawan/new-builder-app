import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { dummyProfile } from '../../data'
import { ScrollView } from 'react-native-gesture-handler'
import { Inputan, Pilihan } from '../../components'
import { Picker } from '@react-native-picker/picker'

export default class EditProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dataProvinsi: [],
            dataKota: [],
            profile: dummyProfile
        }
    }
    render() {
        const { dataKota, dataProvinsi, profile } = this.state;
        return (
            <View style={styles.pages}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Inputan label="Nama" value={profile.nama} />
                    <Inputan label="Email" value={profile.email} />
                    <Inputan label="No. Handphone" value={profile.nomerHp} />
                    <Inputan label="Alamat" value={profile.alamat} />

                    <Pilihan label="Provinsi" />
                    <Pilihan label="Kota" />
                    {/* <Picker
                        selectedValue={dataKota}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker> */}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 30,
        paddingTop: 10
    }
})