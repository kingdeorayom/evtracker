import { createNativeStackNavigator } from "@react-navigation/native-stack";

import YieldScreen from "../screens/YieldScreen";
import DetailScreen from "../screens/DetailScreen";
import { AppHeader } from "../components";

const Stack = createNativeStackNavigator();

export function YieldStack() {

    return (
        <Stack.Navigator
            initialRouteName="Yield"
            screenOptions={{
                header: (props) => <AppHeader {...props} />,
                animation: 'default'
            }}
        >
            <Stack.Screen name="Yield" component={YieldScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Detail" component={DetailScreen} initialParams={{ title: '' }} />
        </Stack.Navigator>
    )
}

