import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppHeader } from "../components";

import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

export function HomeStack() {

    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                // headerShown: false,
                header: (props) => <AppHeader {...props} />,
                animation: 'default'
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} initialParams={{ title: '' }} />
        </Stack.Navigator>
    )
}

