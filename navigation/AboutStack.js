import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AboutScreen from "../screens/AboutScreen";
import { AppHeader } from "../components";

const Stack = createNativeStackNavigator();

export function AboutStack() {

    return (
        <Stack.Navigator
            initialRouteName="About"
            screenOptions={{
                header: (props) => <AppHeader {...props} />,
                animation: 'default',
            }}
        >
            <Stack.Screen name="About" component={AboutScreen} initialParams={{ title: '' }} />
        </Stack.Navigator>
    )
}

