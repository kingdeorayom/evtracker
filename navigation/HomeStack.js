import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { AppHeader } from "../components";

import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

export function HomeStack() {

    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                header: (props) => <AppHeader {...props} />,
                ...TransitionPresets.FadeFromBottomAndroid,
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} initialParams={{ title: '' }} />
        </Stack.Navigator>
    )
}

