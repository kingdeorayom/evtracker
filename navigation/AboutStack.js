import { createStackNavigator } from "@react-navigation/stack";

import AboutScreen from "../screens/AboutScreen";

const Stack = createStackNavigator();

export function AboutStack() {

    return (
        <Stack.Navigator
            initialRouteName="About"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
    )
}

