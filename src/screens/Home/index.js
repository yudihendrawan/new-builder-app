import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { BannerSlider } from '../../components/'
import React, { Component } from 'react'
import { GambarModel, GambarRenov } from '../../../assets';

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            images: [GambarModel, GambarRenov]
        }
    }
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.banner}>
                    <View style={styles.bannerText}>
                        <Text style={styles.tagline}>Find Our </Text>
                        <Text style={styles.tagline}>Profesional</Text>
                        <Text style={styles.tagline}>Talent</Text>
                    </View>
                    <View style={styles.bannerImage}>

                    </View>
                </View>
                <View>
                </View>
                <View style={styles.containerMenu}>
                    <TouchableOpacity>
                        <View style={styles.menu1}>
                            <Image source={require('../../../assets/img/renovation.png')} />
                            <Text style={styles.textMenu}>Renovasi</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.menu2}>
                            <Image source={require('../../../assets/img/newbuilding.png')} />
                            <Text style={styles.textMenu}>Pembuatan Baru</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

// const Home = () => {
//     return (
//         <View style={styles.container} >
//             <View style={styles.banner}>
//                 <View style={styles.bannerText}>
//                     <Text style={styles.tagline}>Find Our </Text>
//                     <Text style={styles.tagline}>Profesional</Text>
//                     <Text style={styles.tagline}>Talent</Text>
//                 </View>
//                 <View style={styles.bannerImage}>
//                     <Image source={require('../../../assets/img/modelHome.png')} />
//                 </View>
//             </View>
//             <View>
//                 <BannerSlider/>
//             </View>
//             <View style={styles.containerMenu}>
//                 <TouchableOpacity>
//                     <View style={styles.menu1}>
//                         <Image source={require('../../../assets/img/renovation.png')} />
//                         <Text style={styles.textMenu}>Renovasi</Text>
//                     </View>
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                     <View style={styles.menu2}>
//                         <Image source={require('../../../assets/img/newbuilding.png')} />
//                         <Text style={styles.textMenu}>Pembuatan Baru</Text>
//                     </View>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     )
// }

// export default Home

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flex: 1
    },
    banner: {
        backgroundColor: "#F9D82B",
        height: "30%",
        width: "100%",
        borderBottomLeftRadius: 100,
        flex: 1,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    bannerText: {
        height: 100,
        width: "70%",
        flex: 1,
        marginLeft: 50,
        paddingTop: 40
    },
    bannerImage: {
        width: "30%"
    },
    tagline: {
        fontSize: "50vh",
    },
    containerMenu: {
        height: 100,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 200
    },
    menu1: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    menu2: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textMenu: {
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 10,
        borderRadius: 35
    }
})