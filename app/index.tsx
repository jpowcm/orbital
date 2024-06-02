import { View, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './Register';
import Login from './Login';


const Stack = createStackNavigator();

export default function Index() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Register">
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}