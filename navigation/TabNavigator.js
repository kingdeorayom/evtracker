import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { HomeStack } from './HomeStack';
import { YieldStack } from './YieldStack';
import { AboutStack } from './AboutStack';

const Tab = createMaterialBottomTabNavigator();

export function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='HomeStack' component={HomeStack} />
            <Tab.Screen name='YieldStack' component={YieldStack} />
            <Tab.Screen name='AboutStack' component={AboutStack} />
        </Tab.Navigator>
    )
}
