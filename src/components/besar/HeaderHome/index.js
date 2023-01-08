import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import { colors, GambarModel } from '../../../../assets'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { RFValue } from "react-native-responsive-fontsize";
export default class HeaderHome extends Component {
    constructor(props) {
        super(props)

        this.state = {
            image: GambarModel
        }
    }
    render() {
        return (
            <View style={styles.banner}>
                <View style={styles.bannerText}>
                    <Text style={styles.tagline}>Find Our </Text>
                    <Text style={styles.tagline}>Profesional</Text>
                    <Text style={styles.tagline}>Talent</Text>
                </View>
                <View style={styles.bannerImage}>
                    <Image source={this.state.image} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    banner: {
        backgroundColor: colors.primary,
        height: responsiveHeight(25),
        width: "100%",
        borderBottomLeftRadius: 100,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flex: 1
    },
    bannerText: {
        height: 100,
        width: "70%",
        flex: 1,
        // marginLeft: responsiveWidth,
        paddingTop: responsiveHeight(5),
        alignItems: 'flex-end'

    },
    bannerImage: {
        width: "30%",
        height: '20%'
    },
    tagline: {
        fontSize: RFValue(36),
    },
})