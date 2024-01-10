import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TodoListScreen from '../screens/TodoListScreen';
import TodoDetailsScreen from '../screens/TodoDetailsScreen';
import AddTodoScreen from '../screens/AddTodoScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="TodoList">
      <Stack.Screen name="TodoList" component={TodoListScreen} />
      <Stack.Screen name="TodoDetails" component={TodoDetailsScreen} />
      <Stack.Screen name="AddTodo" component={AddTodoScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;

const styles = StyleSheet.create({})