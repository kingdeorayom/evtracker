import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { HomeStack } from './HomeStack';
import { YieldStack } from './YieldStack';
import { AboutStack } from './AboutStack';
import { AppIcon, AppText } from '../components';

const Tab = createMaterialBottomTabNavigator();

export function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='HomeStack'
                component={HomeStack}
                options={{
                    tabBarLabel: <AppText variant='tabNavigation'>Home</AppText>,
                    tabBarIcon: ({ color }) => <AppIcon iconName="home-outline" iconColor={color} iconSize={22} />
                }}
            />
            <Tab.Screen
                name='YieldStack'
                component={YieldStack}
                options={{
                    tabBarLabel: <AppText variant='tabNavigation'>EV Yield</AppText>,
                    tabBarIcon: ({ color }) => <AppIcon iconName="format-list-numbered" iconColor={color} iconSize={22} />
                }}
            />
            <Tab.Screen
                name='AboutStack'
                component={AboutStack}
                options={{
                    tabBarLabel: <AppText variant='tabNavigation'>About</AppText>,
                    tabBarIcon: ({ color }) => <AppIcon iconName="information-outline" iconColor={color} iconSize={22} />
                }}
            />
        </Tab.Navigator>
    )
}
