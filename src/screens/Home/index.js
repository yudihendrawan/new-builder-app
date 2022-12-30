import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../../../assets';
import { BannerSlider, HeaderHome } from '../../components';
import MenuHome from '../../components/besar/MenuHome';

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    };
    render() {
        return (
            <View style={styles.page}>
                <HeaderHome />
                <View style={styles.banner}>
                    <BannerSlider />
                </View>
                <MenuHome />
            </View>

        );
    }
}


const styles = StyleSheet.create({
    page: {
        width: "100%",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    banner: {
        marginTop: 20,
        width: 300,
        height: 300,
        flex: 1,
        alignContent: 'center',
        // justifyContent: 'center',
        backgroundColor: 'red'
    }

})