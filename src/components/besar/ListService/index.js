import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { CardService } from '../../kecil'

const ListService = ({ menuService, navigation }) => {
    return (
        <View style={styles.container}>
            {menuService.map((menu) => {
                return <CardService menu={menu} key={menu.id} navigation={navigation} />
            })}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
})
export default ListService;