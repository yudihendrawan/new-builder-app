import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, StatusBar, TextInput, SliderBase } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const InputLogin = (props) => {

    return (

        <View>
            <View style={{
                flexDirection: 'row',
                marginHorizontal: 20,
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#FFFFFF',
                    width: 50,
                    borderTopLeftRadius: 15,
                    borderBottomLeftRadius: 15,
                    marginVertical: 10,
                    elevation: 5
                }}>
                    <Icon name={props.icon} size={30} color="black" />
                </View>

                <TextInput value={props.state} style={{
                    backgroundColor: '#FFFFFF',
                    flex: 1,
                    borderBottomRightRadius: 15,
                    borderTopRightRadius: 15,
                    paddingVertical: 13,
                    elevation: 5,
                    marginVertical: 10
                }}
                    placeholder={props.placeholder}
                    onChangeText={text => props.set(text)}
                    secureTextEntry={props.isPassword}
                    autoCapitalize='none'
                />
            </View>
        </View>
    )
}

export default InputLogin;