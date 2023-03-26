import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import AboutScreen from "../screens/AboutScreen";
import { AppHeader } from "../components";

const Stack = createStackNavigator();

export function AboutStack() {

    return (
        <Stack.Navigator
            initialRouteName="About"
            screenOptions={{
                header: (props) => <AppHeader {...props} />,
                ...TransitionPresets.FadeFromBottomAndroid
            }}
        >
            <Stack.Screen name="About" component={AboutScreen} initialParams={{ title: '' }} />
        </Stack.Navigator>
    )
}

