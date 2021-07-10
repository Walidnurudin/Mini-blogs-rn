import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, About, Splash, Detail, Create } from '../pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    )
}

function AppTabScreen(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Create" component={Create} />
            <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
    )
}

export default function Router() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}  />
            <Stack.Screen name="Home" component={AppTabScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}
