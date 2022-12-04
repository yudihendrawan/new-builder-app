import React, { useState } from "react";
import { View, Text, Image, StatusBar } from "react-native";
import ButtonLogin from "./src/components/Login/ButtonLogin";
import InputLogin from "./src/components/Login/InputLogin";

const App = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return <View style={{ flex: 1, backgroundColor: '#F9D82B' }}>
    <StatusBar backgroundColor={'transparent'} barStyle="dark-content" />
    <View style={{ width: "100%", height: "50%" }}>
      <Image source={require('./src/img/builder.jpg')} style={{
        width: "100%",
        height: "90%",
        resizeMode: "cover",
        elevation: 10,
      }} />
    </View>
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
        color: 'black'
      }}>Login</Text>
    </View>
    <InputLogin state={email} set={setEmail} icon='envelope' placeholder='Email' isPassword={false} />
    <InputLogin state={password} set={setPassword} icon='lock' placeholder='Password' isPassword={true} />

    <ButtonLogin text="Login" />
  </View>
}

export default App;