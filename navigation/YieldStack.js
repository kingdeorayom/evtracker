import { createStackNavigator } from "@react-navigation/stack";

import YieldScreen from "../screens/YieldScreen";
import DetailScreen from "../screens/DetailScreen";

const Stack = createStackNavigator();

export function YieldStack() {

    return (
        <Stack.Navigator
            initialRouteName="Yield"
        >
            <Stack.Screen name="Yield" component={YieldScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
    )
}

