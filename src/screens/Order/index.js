import { StyleSheet, Text, Button, View } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";
// import { useState } from 'react'
import DropDownPicker from "react-native-dropdown-picker";
import { Picker } from '@react-native-picker/picker';
const Order = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const [popUpModal, setPopUpModal] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);
    return (
        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
            <Button title="Show modal" />
            <DropDownPicker
                // open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                onPress={toggleModal}

            />
            <Modal isVisible={isModalVisible} style={{ margin: 0 }} animationType="slide">
                <View style={{
                    height: '25%',
                    marginTop: 'auto',
                    backgroundColor: 'white'
                }}>
                    <Button title="Hide modal" onPress={toggleModal} />
                    <Text style={{ color: 'black' }}>Hello!</Text>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    // onPress={toggleModal}
                    />
                </View>
            </Modal>

        </View>
    )
}

export default Order

const styles = StyleSheet.create({})