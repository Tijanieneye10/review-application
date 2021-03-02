import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/Home'
import Details from './screens/Details'
const Stack = createStackNavigator()
import Header from './screens/Header'

export default function MainNavigator()
{
    return (
        <NavigationContainer >
        < Stack.Navigator initialRouteName='Home' >
             <Stack.Screen name="Home"  component={Home} options={{  header: (props) => < Header title="Interview Questions" 
             subtitle="Interview Questions and Answers" {...props} /> }} />
             <Stack.Screen name="Details"  component={Details} options={{  header: (props) => < Header title="Add Note" 
             subtitle="Add New Note" {...props} /> }} />
        </Stack.Navigator>
     </NavigationContainer>
    )
}

