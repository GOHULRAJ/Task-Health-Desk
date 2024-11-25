import { SafeAreaView, StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const Walkthrough2 = () => {
    const navigation=useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.elipseTopLeft} source={require('../../assets/splash/Walkthrough-elipse-top.png')} />
            <TouchableOpacity onPress={()=>navigation.navigate('Walkthrough3')}>
                <Text style={styles.link}>Skip</Text>
            </TouchableOpacity>
            <View style={styles.ImageContainer}>
                <Image style={styles.heroImage} source={require('../../assets/splash/walkthrough-hero-2.png')} />
            </View>
            <View style={styles.ContentContainer}>
                <Text style={styles.title}>Never Miss a Dose</Text>
                <Text style={styles.conText}>Set up personalized medicine reminders to ensure
                    you never miss a dose. Stay on top of your
                    treatment plan with timely notifications.
                </Text>
                <Image style={styles.slide} source={require('../../assets/splash/walkthrough-slide-2.png')} />
                <Image style={styles.elipseBottomRight} source={require('../../assets/splash/walkthrough-elipse-bottom.png')} />
                <TouchableOpacity onPress={()=>navigation.navigate('Walkthrough3')}>
                    <Image style={styles.forwordArrow} source={require('../../assets/splash/forward-arrow.png')} />
                </TouchableOpacity>
            </View>

            <StatusBar style='light' backgroundColor={'black'} />
        </SafeAreaView>
    )
}

export default Walkthrough2

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
        top: -60,
        width: 250,
        height: 250,
        resizeMode: 'stretch',
    },
    ContentContainer: {
        top: -35,
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
        marginTop: 25,
        width: "90%",
        textAlign: 'center',
        fontSize: 18,
    },
    slide: {
        marginTop: 30,
    },
    elipseBottomRight: {
        right: -90,
        bottom: -60,
        height: 250,
        width: 250,
        resizeMode: 'stretch'
    },
    forwordArrow: {
        position: 'absolute',
        height: 65,
        width: 65,
        resizeMode: 'stretch',
        bottom: 50,
        left: '25%'
    }
})