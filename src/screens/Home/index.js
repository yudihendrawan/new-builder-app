import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native'
import React, { Component } from 'react'
import { colors } from '../../../assets';
import { BannerSlider, HeaderHome } from '../../components';
import MenuHome from '../../components/besar/MenuHome';
import ListService from '../../components/besar/ListService';
import { menuService } from '../../data';

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            menuService: menuService
        }
    };
    render() {
        return (
            <View style={styles.page}>
                <StatusBar barStyle='dark-content' animated />
                <View style={styles.header}>
                    <HeaderHome />
                </View>
                <View style={styles.banner}>
                    <BannerSlider />
                </View>
                <View style={styles.container}>
                    <ListService menuService={menuService} navigation={this.props.navigation} />
                    {/* <ListService menuService={menuService} navigation={this.props.navigation} /> */}
                </View>
                {/* <MenuHome /> */}
            </View>

        );
    }
}


const styles = StyleSheet.create({
    page: {
        // width: "100%",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    banner: {
        marginTop: 20,
        width: 300,
        height: 300,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    container: {
        flex: 1,
        width: '100%',
        // flexDirection: 'row',
        padding: 20,
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    header: {
        flex: 1
    }

})