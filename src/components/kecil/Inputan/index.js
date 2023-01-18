import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../../../../assets';

const Inputan = ({
    textarea,
    width,
    height,
    fontSize,
    placeholder,
    label,
    value,
    secureTextEntry,
    keyboardType,
    onChangeText,
    disabled
}) => {
    if (textarea) {
        return (
            <View style={styles.container}>
                <Text style={styles.label(fontSize)}>{label}</Text>
                <TextInput
                    style={styles.inputTextArea(fontSize)}
                    multiline={true}
                    numberOfLines={3}
                    value={value}
                    onChangeText={onChangeText}
                    editable={disabled ? false : true}
                    placeholder={placeholder}
                />
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label(fontSize)}>{label}</Text>
            <TextInput
                style={styles.input(width, height, fontSize)}
                value={value}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                onChangeText={onChangeText}
                editable={disabled ? false : true}
                placeholder={placeholder}
            />
        </View>
    );
};

export default Inputan;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginHorizontal: 15,

    },
    label: (fontSize) => ({
        fontSize: fontSize ? fontSize : 18,
    }),
    input: (width, height, fontSize) => ({
        fontSize: fontSize ? fontSize : 18,
        width: width,
        height: height,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.divider,
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        marginTop: 5,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
    }),
    inputTextArea: (fontSize) => ({
        fontSize: fontSize ? fontSize : 18,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.divider,
        paddingVertical: 50,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        textAlignVertical: 'top',
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
    }),
});
