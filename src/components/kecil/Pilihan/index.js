import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, responsiveHeight } from '../../../../assets';
import { Picker } from '@react-native-picker/picker'

const Pilihan = ({ label, datas, width, height, fontSize }) => {
    const [selectedValue, setSelectedValue] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.label(fontSize)}>{label} :</Text>

            <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)
                }>
                <Picker.Item label="--Pilih--" value="Kota" />
                <Picker.Item label="--Pilih--" value="Provinsi" />
                {/* {datas.map((item, index) => {
                        return <Picker.Item label={item} value={item} key={index} />
                    })} */}
            </Picker>

        </View>
    );
};

export default Pilihan;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    label: (fontSize) => ({
        fontSize: fontSize ? fontSize : 18,
    }),
    // picker: {
    //     marginTop: -80
    // },
    picker: {
        marginTop: -50,
        marginBottom: 10
    },
    wrapperPicker: {
        borderWidth: 1,
        borderColor: colors.divider,
    }
});
