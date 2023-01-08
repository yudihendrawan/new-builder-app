import React, { useState, useRef, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Banner1, Banner2 } from '../../../../assets';

const screenWidth = Math.round(Dimensions.get('window').width);
const images = [
    'https://i.ibb.co/hmzn4hS/banner1.jpg',
    'https://i.ibb.co/7QRnP8d/banner2.jpg'
]

const BannerSlider = () => {

    const [activePage, setActivePage] = useState(0);
    const autoPlayRef = useRef();
    const prevCountRef = useRef();

    prevCountRef.current = { activePage, setActivePage };

    const changePage = (event) => {
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        const contentOffset = event.nativeEvent.contentOffset.x;
        const index = Math.floor(contentOffset / viewSize);
        setActivePage(index);
    };

    function move(next) {
        if (autoPlayRef.current != null) {
            autoPlayRef.current.scrollTo({
                y: 0,
                x: screenWidth * next,
                animated: true,
            });
        }
    }

    useEffect(() => {
        setInterval(() => {
            const next = prevCountRef.current.activePage < images.length - 1 ? prevCountRef.current.activePage + 1 : 0;
            move(next);
        }, 5000);
    }, []);

    return (
        <View style={styles.bannerImage}>
            <ScrollView
                scrollEventThrottle={32}
                horizontal
                pagingEnabled
                ref={autoPlayRef}
                onScroll={changePage}
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={changePage}
            >
                {images.map((image) => (
                    <Image key={image} source={{ uri: image }} style={styles.bannerImage} />
                ))}
            </ScrollView>
            <View style={styles.bannerPageContainer}>
                {images.map((image, i) => (
                    <View
                        key={image}
                        style={[styles.bannerSliderIcon, { backgroundColor: i === activePage ? '#fff' : 'rgba(255,255,255,0.5)' }]}
                    />
                ))}
            </View>
        </View>
    );
}

export default BannerSlider;

const styles = StyleSheet.create({
    bannerImage: {
        width: responsiveWidth(75),
        height: responsiveHeight(15),
        alignItems: 'center',
        justifyContent: 'center'
    },
    bannerPageContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
    },
    bannerSliderIcon: {
        backgroundColor: '#fff',
        width: 35,
        height: 5,
        borderRadius: 0,
        marginHorizontal: 5,
    },
});