import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Devices = () => {
    const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <Text>Devices</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('TestScreen2')}>
        <Text style={styles.Button}>TestScreen2</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Devices

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
        fontSize:46,
        fontWeight:44,
    },
    Button: {
        backgroundColor: "blue",
        paddingTop: 10,
        paddingHorizontal: 20,
        textAlign: 'center'
    }
})