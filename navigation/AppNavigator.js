import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import TodoListScreen from '../screens/TodoListScreen'

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Todo List' component={TodoListScreen}/>
    </Stack.Navigator>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})