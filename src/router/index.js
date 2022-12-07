import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Splash } from "../screens";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Register from '../screens/Register';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
};

export default Router;