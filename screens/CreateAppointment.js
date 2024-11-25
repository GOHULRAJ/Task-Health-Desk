import { SafeAreaView, StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function CreateAppointment() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <TouchableOpacity style={styles.listBox} onPress={() => navigation.navigate('OnlineConsultation')}>
                <View style={styles.card}>
                    <Image
                        source={require("../assets/createAppointment/Group.png")} // Replace with your image path
                        style={styles.image}
                    />
                    <Text style={styles.text}>Online Consultation</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listBox} onPress={() => navigation.navigate('OnlineConsultation')}>
                <View style={styles.card}>
                    <Image
                        source={require("../assets/createAppointment/Group.png")} // Replace with your image path
                        style={styles.image}
                    />
                    <Text style={styles.text}>Offline Consultation</Text>
                </View>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
        paddingTop: '25%'
    },

    card: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent:'space-between',
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        padding: 10,
        paddingHorizontal:20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        margin: 10,
      },
      image: {
        width: 75,
        height: 75,
        resizeMode: "contain",
        marginRight: 10,
      },
      text: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#1A237E", 
      },
})