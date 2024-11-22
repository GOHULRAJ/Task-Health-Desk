import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function Splash() {
  
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.ImgContainer}>
                <Image 
                    style={styles.stretch}
                    source={require('../assets/splash/pose_6.png')}
                />
                <Image 
                    style={styles.Ellipse1}
                    source={require('../assets/splash/Ellipse 2.png')}
                />
                <Image 
                    style={styles.Ellipse2}
                    source={require('../assets/splash/Ellipse 2.png')}
                />
                <Text style={styles.text}>Health Desk</Text>
                

                 <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:"100%",
        backgroundColor: '#1F2587',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ImgContainer: {
       position:'relative',
       alignItems:'center',
       justifyContent:'center'
    }
    ,
    stretch: {
        position:'absolute',
        width: 150.54,
        height: 150,
        resizeMode: 'stretch',
        zIndex:3
      },
      Ellipse1:{
        position:'relative',
        width: 150.54,
        height: 140.2,
        zIndex:2,
        right:-65,
        bottom:-35
      }
      ,
      Ellipse2:{
        position:'relative',
        width: 75,
        height: 75,
        zIndex:1,
        bottom:100,
        left:-20,
      },
      text:{
        text:'center',
        color:'white',
        fontSize:26,
        fontWeight:700
      }
});
