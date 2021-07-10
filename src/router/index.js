import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home, About, Splash } from '../pages';

const Stack = createStackNavigator();

export default function Router() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}  />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    )
}
