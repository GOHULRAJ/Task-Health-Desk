import { SafeAreaView, StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Walkthrough1 = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.elipseTopLeft} source={require('../../assets/splash/Walkthrough-elipse-top.png')} />
            <TouchableOpacity>
                <Text style={styles.link} onPress={()=>navigation.navigate('Walkthrough2')}>Skip</Text>
            </TouchableOpacity>
            <View style={styles.ImageContainer}>
                <Image style={styles.heroImage} source={require('../../assets/splash/walkthrough-hero.png')} />
            </View>
            <View style={styles.ContentContainer}>
                <Text style={styles.title}>Schedule Doctor Appointments</Text>
                <Text style={styles.conText}>Book appointments with your preferred doctors
                    hassle-free. Choose from a list of experienced
                    healthcare professionals.
                </Text>
                <Image style={styles.slide} source={require('../../assets/splash/walkthrough-slide-1.png')}/>
                <Image style={styles.elipseBottomRight} source={require('../../assets/splash/walkthrough-elipse-bottom.png')} />
                <TouchableOpacity onPress={()=>navigation.navigate('Walkthrough2')}>
                    <Image style={styles.forwordArrow} source={require('../../assets/splash/forward-arrow.png')} />
                </TouchableOpacity>
            </View>

            <StatusBar style='light' backgroundColor={'black'} />
        </SafeAreaView>
    )
}

export default Walkthrough1

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
    },
    elipseTopLeft: {
        height: 300,
        width: 300,
        left: -150,
        top: -10,
        resizeMode: 'stretch'
    },
    link: {
        position: 'absolute',
        color: '#00539C',
        fontSize: 18,
        fontWeight: 600,
        top: -200,
        right: "15%",
        zIndex: 1
    },
    ImageContainer: {
        display: 'flex',
        alignItems: 'center',
        top: -35
    },
    heroImage: {
        top:-60,
        width: 250,
        height: 250,
        resizeMode: 'stretch',
    },
    ContentContainer: {
        top:-35,
        width: '100%',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#1F2587',
        fontSize: 24,
        fontWeight: 700,
        textAlign: 'center',
    },
    conText: {
        marginTop:25,
        width: "90%",
        textAlign: 'center',
        fontSize: 18,
    },
    slide:{
        marginTop:30,
    },
    elipseBottomRight: {
        right: -90,
        bottom: -60,
        height: 250,
        width: 250,
        resizeMode: 'stretch'
    },
    forwordArrow: {
        position:'absolute',
        height: 65,
        width: 65,
        resizeMode: 'stretch',
        bottom:50,
        left:'25%'
    }
})