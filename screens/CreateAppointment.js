import { SafeAreaView, StyleSheet, Text, View ,StatusBar,Image} from 'react-native'
import React from 'react'

export default function CreateAppointment() {
  return (
    <SafeAreaView style={styles.container}>
     <StatusBar style="auto" />
      <View style={styles.listBox}> 
            <Image 
                style={styles.img}
                source={require('../assets/createAppointment/Group.png')}
            />
            <Text style={styles.textCon}>Online Consultation</Text>
      </View>
      <View style={styles.listBox}>
      <Image 
                style={styles.img}
                source={require('../assets/createAppointment/Group1.png')}
            />
            <Text style={styles.textCon}>Online Consultation</Text>
            <Text style={styles.textCon}>Online Consultation</Text>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        backgroundColor:'white',
        alignItems:'center',
        paddingTop:'10%'
        
    },
    listBox:{
        width:'90%',
        height:100,
        marginTop:'8%',
        borderColor:"#555",
        borderWidth:1,
        shadowColor:'#555',
        borderRadius:5,
        backgroundColor:'white',
        position:'relative',
        justifyContent:'center'
    },
    img:{
        width:75,
        height:50,
        position:'absolute',
        top:25,
        left:20
    },
    textCon:{
        position:'absolute',
        fontSize:24,
        right:23,
        top:35,
        color:'#1F2587',
        fontWeight:400
    }

})