import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Splash, Home, Profile, Order, Login, Register, EditProfile, RenovasiMenu, BaruMenu } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigator } from "../components";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Order" component={Order} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}


const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false, title: false }} />
            <Stack.Screen name="EditProfile" component={EditProfile} options={{ title: 'Edit Profile' }} />
            <Stack.Screen name="Renovasi" component={RenovasiMenu} options={{ title: 'Renovasi' }} />
            <Stack.Screen name="Baru" component={BaruMenu} options={{ title: 'Baru' }} />
        </Stack.Navigator>
    );
};

export default Router;