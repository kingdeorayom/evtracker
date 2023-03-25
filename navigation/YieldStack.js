import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import YieldScreen from "../screens/YieldScreen";
import DetailScreen from "../screens/DetailScreen";
import { AppHeader } from "../components";

const Stack = createStackNavigator();

export function YieldStack() {

    return (
        <Stack.Navigator
            initialRouteName="Yield"
            screenOptions={{
                header: (props) => <AppHeader {...props} />,
                ...TransitionPresets.FadeFromBottomAndroid
            }}
        >
            <Stack.Screen name="Yield" component={YieldScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Detail" component={DetailScreen} initialParams={{ title: '' }} />
        </Stack.Navigator>
    )
}

