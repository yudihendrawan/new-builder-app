import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, ActivityIndicator, StatusBar, Button } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import * as Location from 'expo-location';
import MapView, { Callout, Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { MAP_API_KEY } from '../../../environment';
import Geocoder from 'react-native-geocoder'
import axios from 'axios';
import LottieView from 'lottie-react-native';

// import RNGooglePlaces from 'react-native-google-places';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../../assets';


function RenovasiMenu({ navigation }) {
    let myMap;
    // 0.4514704943723571 101.46608403933996
    const [pin, setPin] = useState({ pinLat: 0, pinLng: 0 })
    const [des, setDes] = useState({
        deskripsi: ''
    })
    const [current, setCurrent] = useState({
        latitude: 0.4514704943723571,
        longitude: 101.46608403933996,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0922
    })
    const [region, setRegion] = useState({
        latitude: 0.4514704943723571,
        longitude: 101.46608403933996,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0922
    })
    const [a, setA] = useState({
        latitude: 0.45150665782809263,
        longitude: 101.46708123385906,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0922
    })
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [address, setAddress] = useState();
    useEffect(() => {
        const getPermissions = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            let ad = await Location.reverseGeocodeAsync(location.coords)
            setLocation(location)
            setAddress(ad)
            setRegion({
                ...region,
                latitude: JSON.stringify(location.coords.latitude),
                longitude: JSON.stringify(location.coords.longitude)
            })
            setCurrent({
                ...current,
                latitude: JSON.stringify(location.coords.latitude),
                longitude: JSON.stringify(location.coords.longitude)
            })
        }; getPermissions();
    }, []);


    let text = 'Waiting..';
    let latLocation = 'Waiting';
    let lngLocation = 'Waiting';
    let desc = 'Waiting';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
        latLocation = JSON.stringify(location.coords.latitude)
        lngLocation = JSON.stringify(location.coords.longitude)
        desc = JSON.stringify(address)
        console.log(address)
        console.log(location)

        // console.log('latitute your', region.latitude)
        // console.log('longitude your', lngLocation)
    }

    useEffect(() => {
        navigation.setOptions({ headerBackTitle: 'Pilih Lokasi' })
    }, [])
    // const geocode = async () => {
    //     const geocodedLocation = await Location.geocodeAsync(address);
    //     console.log('geocoded', geocodedLocation)
    //     return geocodedLocation
    // }

    // const reverseGeocode = async () => {
    //     const reverseGeocodeAddress = await Location.reverseGeocodeAsync({
    //         latitude: location.coords.latitude,
    //         latitude: location.coords.longitude
    //     })
    //     console.log('rev', reverseGeocodeAddress)
    // }
    // const b = await(address)
    return (
        <View style={{ flex: 1 }} >
            {!location ? <Text></Text> : <View style={styles.searchConainer}>
                <GooglePlacesAutocomplete
                    style={{ textInput: styles.input }}
                    placeholder='Search'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        setRegion({
                            ...region,
                            latitude: details.geometry.location.lat,
                            longitude: details.geometry.location.lng,
                        })
                        setDes({
                            ...des,
                            deskripsi: data.description
                        })
                        console.log('detail name', details.name)
                        console.log(des)
                        // console.log(details.address_components)
                    }}
                    onFail={error => console.log(error)}
                    onNotFound={() => console.log('no results')}
                    listEmptyComponent={() => (
                        <View style={{ flex: 1 }}>
                            <Text>No results were found</Text>
                        </View>
                    )}

                    GooglePlacesDetailsQuery={{
                        fields: ['name', 'address_components', 'geometry']
                    }}
                    GooglePlacesSearchQuery={{
                        rankby: 'distance'
                    }}
                    fetchDetails={true}
                    query={{
                        key: MAP_API_KEY,
                        language: 'en',
                        components: 'country:id',
                        types: 'establishment',
                        radius: 10,
                    }}
                />
            </View>}
            {!location ? <View style={{ alignItems: "center" }} >
                <LottieView style={{ width: 200, height: 200, marginTop: "25%" }} source={require('../../../assets/animation/loadingapp.json')} autoPlay={true} loop={true} resizeMode="cover" />
            </View> : <View>
                <MapView style={{ width: '100%', height: '100%' }}
                    ref={ref => myMap = ref}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: latLocation,
                        longitude: lngLocation,
                    }}
                    showsUserLocation={true}
                    onUserLocationChange={(e) => {
                        e.nativeEvent.coordinate
                    }}
                    region={{
                        latitude: latLocation,
                        longitude: lngLocation,
                        latitudeDelta: 0.001,
                        longitudeDelta: 0.001,
                    }}
                    onMarkerDragEnd={{
                        latitude: region.latitude,
                        longitude: region.longitude
                    }}
                // showsMyLocationButton={true}
                >
                    {/* <View style={{ top: '50%', left: '50%', marginLeft: -24, marginTop: -48, position: 'absolute', zIndex: 99 }}>
                        <Text>{ }</Text> */}
                    <Marker
                        coordinate={{
                            latitude: region.latitude,
                            longitude: region.longitude
                        }}
                        image={require('../../../assets/icon/homemarker.png')}
                        draggable={true}
                        onDragStart={(e) => {
                            console.log('DragStart', e.nativeEvent.coordinate)
                        }}
                        onDragEnd={(e) => {
                            setRegion({
                                ...region,
                                latitude: e.nativeEvent.coordinate.latitude,
                                longitude: e.nativeEvent.coordinate.longitude
                            })

                            // console.log('pinlat', region.latitude)
                            // console.log('pinlnt', region.longitude)
                            console.log('pinlnt', e.nativeEvent.coordinate)
                        }}


                    >
                        <Callout >
                            <Text>Your Selected Position</Text>
                        </Callout>
                    </Marker>
                    {/* </View> */}
                    {/* <Circle center={pin} strokeColor='black' radius={1000} /> */}
                </MapView>
                <View style={styles.deskripsi}>
                    <View>
                        {!des.deskripsi ? <Text>{region.latitude} {region.longitude}</Text> : <Text>{des.deskripsi}</Text>}
                    </View>
                    <View>
                        {!address ? <Text>Waiting..</Text> : address.map((item) => (
                            <Text key={item.city}>{item.name}, {item.city}, {item.country} </Text>
                        ))}
                    </View>
                </View>


                <View style={styles.tombolLanjut}>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailPekerjaan')}>
                        <Text style={styles.buttonText} > Lanjut </Text>
                    </TouchableOpacity>
                </View>
            </View>}
            <StatusBar barStyle='dark-content' />


        </View >
    );
}

const styles = StyleSheet.create({
    buttonText: {
        fontWeight: 'bold',
        // textAlign: 'center',
        alignSelf: 'center',
        fontSize: 16
    },
    tombolLanjut: {
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 99,
        height: '5%',
        width: '25%',
        bottom: 150,
        backgroundColor: colors.primary,
        right: 20,
        borderRadius: 30,

    },
    deskripsi: {
        alignSelf: 'center',
        position: 'absolute',
        width: '90%',
        height: 70,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
        padding: 8,
        borderRadius: 8,
        bottom: 70,
        zIndex: 99
    },
    searchConainer: {
        alignSelf: 'center',
        position: 'absolute',
        width: '90%',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
        padding: 8,
        borderRadius: 8,
        top: 10,
        zIndex: 99
    },
    loading: {
        justifyContent: 'center',
        alignContent: 'center'
    }
})

export default RenovasiMenu;