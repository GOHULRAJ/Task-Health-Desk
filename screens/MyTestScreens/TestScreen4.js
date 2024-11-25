import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TestScreen4 = () => {
  return (
    <View style={styles.container}>
      <Text>TestScreen4</Text>
    </View>
  )
}

export default TestScreen4

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center',
        fontSize:46,
        fontWeight:44,
}
})