import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const OnlineBooking = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.ImageContainer}>
                <Image style={styles.heroImage} source={require('../../assets/OnlineAppointment/Success.png')} />
            </View>
            <View style={styles.ContentContainer}>
                <Text style={styles.title}>Booking Successful</Text>
                <Text style={styles.conText}>Appointment has been successfully scheduled. After
                    receiving confirmation, please proceed to
                    complete the payment process.
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default OnlineBooking

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#1F2587',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ImageContainer: {
        display: 'flex',
        alignItems: 'center',
        top: -35
    },
    heroImage: {
        top: -70,
        width: 180,
        height: 180,
        resizeMode: 'stretch',
    },
    ContentContainer: {
        top: -50,
        width: '90%',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 700,
        textAlign: 'center',
    },
    conText: {
        marginTop: 25,
        width: "87%",
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 400,
        color: '#fff',
        lineHeight:20,
        letterSpacing:0.8
    },
})