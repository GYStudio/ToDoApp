import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TodoListScreen = () => {
  return (
    <View style={styles.hello}>
      <Text>TodoListScreen</Text>
    </View>
  )
}

export default TodoListScreen

const styles = StyleSheet.create({
  hello: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})