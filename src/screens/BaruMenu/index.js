import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import Modal from 'react-native-modal'
import { TouchableOpacity } from 'react-native-gesture-handler'
export default class Baru extends Component {
    render() {
        return (
            <View>
                <Modal>
                    <View style={{ flex: 1, backgroundColor: 'red' }}>
                        <Text>I am the modal content!</Text>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({})