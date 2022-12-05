import React, { useState } from "react";
import { View, Text, Image, StatusBar, StyleSheet } from "react-native";
import ButtonLogin from "./src/components/Login/ButtonLogin";
import InputLogin from "./src/components/Login/InputLogin";
import Navigation from "./src/navigation/Navigation";
const App = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Navigation />
  )
}




export default App;