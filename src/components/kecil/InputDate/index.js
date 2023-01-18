import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, StatusBar, TextInput, SliderBase, Button } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import moment from 'moment';
import { colors } from "../../../../assets";
const InputDate = (props) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [tampilTanggal, setTampilTanggal] = useState(false);
    const [tanggalMulai, setTanggalMulai] = useState()
    const [tanggalSelesai, setTanggalSelesai] = useState()
    const [dayLength, setDayLength] = useState()
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleConfirm = (date) => {
        setTanggalMulai(date)
        hideDatePicker();
    };
    // ====================
    const showDatePickerSelesai = () => {
        setTampilTanggal(true);
    };
    const hideDatePickerSelesai = () => {
        setTampilTanggal(false);
    };
    const handleConfirmSelesai = (date) => {
        setTanggalSelesai(date)
        hideDatePickerSelesai();
    };

    useEffect(() => {
        !tanggalMulai ? console.log('waitmulai') : console.log(tanggalMulai.toLocaleDateString())
        !tanggalSelesai ? console.log('waitselesai') : console.log(tanggalSelesai.toLocaleDateString())
        let mulai = tanggalMulai
        let outputMulai = moment(mulai).format("DD ")
        let akhir = tanggalSelesai
        let outputAkhir = moment(akhir).format("DD ")
        let selisih = outputAkhir - outputMulai
        console.log('formated', outputMulai)
        setDayLength(selisih)

    }, [handleConfirmSelesai])
    return (

        <View style={styles.container}>
            {/* mulai */}
            <View style={styles.containerLabel}>
                <Text style={styles.label}>Tanggal Mulai</Text>
            </View>
            <TouchableOpacity activeOpacity={1} onPress={showDatePicker}>
                <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                    <View style={styles.containerIcon}>
                        <Icon name='calendar-alt' size={30} color="black" />
                    </View>
                    <TextInput style={styles.dateDisplay}
                        placeholder="Pilih Tanggal"
                        editable={false}
                        value={tanggalMulai ? tanggalMulai.toLocaleDateString() : <></>}
                    />
                </View>
            </TouchableOpacity>

            {/* selesai */}
            <View style={styles.containerLabel}>
                <Text style={styles.label}>Tanggal Estimasi Selesai</Text>
            </View>
            <TouchableOpacity activeOpacity={1} onPress={showDatePickerSelesai}>
                <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                    <View style={styles.containerIcon}>
                        <Icon name='calendar-alt' size={30} color="black" />
                    </View>
                    <TextInput style={styles.dateDisplay}
                        placeholder="Pilih Tanggal"
                        editable={false}
                        value={tanggalSelesai ? tanggalSelesai.toLocaleDateString() : <></>}
                    />
                </View>

            </TouchableOpacity>

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <DateTimePickerModal
                isVisible={tampilTanggal}
                mode="date"
                onConfirm={handleConfirmSelesai}
                onCancel={hideDatePickerSelesai}
            />
            <View style={styles.containerFooter}>
                <View style={styles.footerLeft}>
                    {!dayLength ? <Text style={styles.textFooter}>...</Text> : <Text style={styles.textFooter}>{dayLength} Hari</Text>}
                </View>
                <View style={styles.footerRight}>
                    <View style={styles.tombolLanjut}>
                        <TouchableOpacity>
                            <Text style={styles.buttonText} > Lanjut </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View >

    )
}
const styles = StyleSheet.create({
    container: {
        // flex: 1
        height: '100%'
    },
    label: {
        padding: 5,
        fontSize: 18,
        fontWeight: 'bold'
    },
    containerLabel: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    containerIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        width: 50,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        marginVertical: 10,
        elevation: 5
    },
    dateDisplay: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        paddingVertical: 13,
        elevation: 5,
        marginVertical: 10
    },
    containerFooter: {
        width: '100%',
        position: 'absolute',
        zIndex: 99,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
        bottom: 0,
        height: '12%',
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    footerLeft: {
        width: '50%',
        height: '100%',
        // backgroundColor: 'blue'
    },
    footerRight: {
        width: "50%",
        height: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
        // backgroundColor: 'red'
    },
    textFooter: {
        margin: 15,
        fontSize: 18,
        fontWeight: 'bold'
    },
    tombolLanjut: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
        width: '55%',
        backgroundColor: colors.primary,
        borderRadius: 30,
    },
    buttonText: {
        fontWeight: 'bold',
        // textAlign: 'center',
        alignSelf: 'center',
        fontSize: 16
    },
})
export default InputDate;