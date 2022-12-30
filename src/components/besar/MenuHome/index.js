import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react';


export default class MenuHome extends Component {
  render() {
    return (
      <View style={styles.containerMenu}>
        <TouchableOpacity>
          <View style={styles.menu1}>
            <Image source={require('../../../../assets/img/renovation.png')} />
            <Text style={styles.textMenu}>Renovasi</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.menu2}>
            <Image source={require('../../../../assets/img/newbuilding.png')} />
            <Text style={styles.textMenu}>Pembuatan Baru</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerMenu: {
    height: 100,
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 50,
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