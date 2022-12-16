import { StyleSheet, Text, View, Image } from 'react-native'
import React, { Component } from 'react';
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { dummyProfile, menus } from '../../data';
import { RFValue } from "react-native-responsive-fontsize";
import { heightMobileUI } from '../../../assets';
import { ListMenu } from '../../components';


export default class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            profile: dummyProfile,
            menus: menus
        }
    }
    render() {
        const { profile } = this.state;
        return (
            <View style={styles.page}>
                <View style={styles.container}>
                    <Image style={styles.avatar} source={profile.avatar} />
                    <View style={styles.profile}>
                        <Text style={styles.nama} >{profile.nama}</Text>
                        <Text style={styles.nomerHp} >{profile.nomerHp}</Text>
                        <Text style={styles.alamat} >{profile.alamat}</Text>
                    </View>
                    <ListMenu menus={menus} navigation={this.props.navigation} />
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
    },
    container: {
        backgroundColor: "#F9D82B",
        width: responsiveWidth(95),
        height: responsiveHeight(60),
        position: "absolute",
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        margin: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    avatar: {
        width: responsiveWidth(35),
        height: responsiveWidth(35),
        alignSelf: "center",
        marginTop: -responsiveWidth(15),
        borderRadius: 100,
        backgroundColor: "white"
    },
    profile: {
        marginTop: 10,
        alignItems: "center"
    },
    nama: {
        fontWeight: "bold",
        fontSize: RFValue(24, heightMobileUI)
    },
    nomerHp: {
        fontSize: RFValue(18, heightMobileUI)
    },
    alamat: {
        fontSize: RFValue(18, heightMobileUI)
    }
})