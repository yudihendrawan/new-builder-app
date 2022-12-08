import React, { useEffect, useState } from "react";
import { View, Text, BackHandler, ScrollView } from "react-native";
import LottieView from 'lottie-react-native';

const Welcome = () => {
    const [data, setData] = useState();
    function Loading() {
        return (
            <View style={{ alignItems: "center" }} >
                <LottieView style={{ width: 200, height: 200, marginTop: "25%" }} source={require('../../../assets/animation/loadingapp.json')} autoPlay={true} loop={true} resizeMode="cover" />
            </View>
        )
    }
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => true)
        return () => {
            BackHandler.addEventListener('hardwareBackPress', () => true)
        }
    }, [])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => () => {
                return data
            })
            .then(data1 => setData(data1))
    }, [])

    return (
        <ScrollView >
            {/* {!data ? <Loading /> : data.map(album => (
                <Text key={album.id}>{album.title}</Text>
            ))} */}
            <Loading />
        </ScrollView>
    )
}





export default Welcome;