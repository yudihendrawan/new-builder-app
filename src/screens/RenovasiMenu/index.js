import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { InputanDropdown } from '../../components/kecil';
import Modal from 'react-native-modal'

export default class RenovasiMenu extends Component {

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
