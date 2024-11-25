import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const OnlineConsultation = () => {
    const navigation=useNavigation();
    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
           
            <TextInput
                placeholder="Search Specialities"
                placeholderTextColor="#d3d3d3"
                style={styles.input}
            />
            
            <View style={styles.profileList}>
                <View style={styles.card}>
                    <View style={styles.row}>
                        <Image
                            style={styles.image}
                            source={require('../assets/consultant/pngwing.png')}
                        />

                        <View style={styles.info}>
                            <Text style={styles.name}>Dr. Vijayakumar</Text>
                            <Text style={styles.speciality}>General Physician</Text>
                            <Text style={styles.experience}>11 years Exp</Text>
                            <Text style={styles.fee}>Consultation Fee ₹300</Text>
                            <Text style={styles.timing}>09.00 AM - 07.00 PM Today</Text>


                            <View style={styles.ratingRow}>
                                <Text style={styles.star}>⭐</Text>
                                <Text style={styles.rating}>4.5 ratings</Text>
                            </View>
                        </View>
                    </View>


                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.viewProfileButton} onPress={()=>navigation.navigate('DoctorDetails')}>
                            <Text style={styles.viewProfileText}>View profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bookButton} onPress={()=>navigation.navigate('DoctorAppointment')}>
                            <Text style={styles.bookText}>Book Appointment</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.profileList}>
                <View style={styles.card}>
                    <View style={styles.row}>
                        <Image
                            style={styles.image}
                            source={require('../assets/consultant/pngwing2.png')}
                        />

                        <View style={styles.info}>
                            <Text style={styles.name}>Dr. Swetha</Text>
                            <Text style={styles.speciality}>General Physician</Text>
                            <Text style={styles.experience}>15 years Exp</Text>
                            <Text style={styles.fee}>Consultation Fee ₹250</Text>
                            <Text style={styles.timing}>10.00 AM - 06.00 PM Today</Text>


                            <View style={styles.ratingRow}>
                                <Text style={styles.star}>⭐</Text>
                                <Text style={styles.rating}>4.5 ratings</Text>
                            </View>
                        </View>
                    </View>


                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.viewProfileButton}>
                            <Text style={styles.viewProfileText}>View profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bookButton}>
                            <Text style={styles.bookText}>Book Appointment</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
          
            <View style={styles.profileList}>
                <View style={styles.card}>
                    <View style={styles.row}>
                        <Image
                            style={styles.image}
                            source={require('../assets/consultant/pngwing3.png')}
                        />

                        <View style={styles.info}>
                            <Text style={styles.name}>Dr. Hardin</Text>
                            <Text style={styles.speciality}>General Physician</Text>
                            <Text style={styles.experience}>5 years Exp</Text>
                            <Text style={styles.fee}>Consultation Fee ₹250</Text>
                            <Text style={styles.timing}>10.00 AM - 06.00 PM Today</Text>


                            <View style={styles.ratingRow}>
                                <Text style={styles.star}>⭐</Text>
                                <Text style={styles.rating}>4.5 ratings</Text>
                            </View>
                        </View>
                    </View>


                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.viewProfileButton} on>
                            <Text style={styles.viewProfileText}>View profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bookButton}>
                            <Text style={styles.bookText}>Book Appointment</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.profileList}>
                <View style={styles.card}>
                    <View style={styles.row}>
                        <Image
                            style={styles.image}
                            source={require('../assets/consultant/pngwing4.png')}
                        />

                        <View style={styles.info}>
                            <Text style={styles.name}>Dr. Tessa</Text>
                            <Text style={styles.speciality}>General Physician</Text>
                            <Text style={styles.experience}>5 years Exp</Text>
                            <Text style={styles.fee}>Consultation Fee ₹250</Text>
                            <Text style={styles.timing}>10.00 AM - 06.00 PM Today</Text>


                            <View style={styles.ratingRow}>
                                <Text style={styles.star}>⭐</Text>
                                <Text style={styles.rating}>4.5 ratings</Text>
                            </View>
                        </View>
                    </View>


                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.viewProfileButton}>
                            <Text style={styles.viewProfileText}>View profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bookButton}>
                            <Text style={styles.bookText}>Book Appointment</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
        </ScrollView>
    )
}

export default OnlineConsultation

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: '100%',
        marginTop: 25,
        alignItems: 'center'
    },
    icon: {
        marginRight: 10,
    },
    input: {
        marginTop:35,
        width:'90%',
        borderColor:'#ddd',
        borderWidth:2,
        color: '#fff', 
        fontSize: 16,
        borderRadius:50,
        paddingLeft:10
    },
    profileList: {
        width: "90%",
        backgroundColor: 'white',
        justifyContent: "space-between"
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        margin: 15,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    row: {
        flexDirection: 'row',
    },
    image: {
        width: 70,
        height: 100,
        marginRight: 15,
    },
    info: {
        flex: 1,
        justifyContent: 'space-between',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    speciality: {
        fontSize: 14,
        color: '#666',
    },
    experience: {
        fontSize: 14,
        color: '#0066cc',
        marginVertical: 2,
    },
    fee: {
        fontSize: 14,
        color: '#666',
    },
    timing: {
        fontSize: 14,
        color: '#666',
    },
    ratingRow: {
        flexDirection: 'row',
        left:-90,
        marginTop: 10,
    },
    star: {
        fontSize: 16,
        color: '#ffcc00',
        marginRight: 5,
    },
    rating: {
        fontSize: 14,
        color: '#333',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    viewProfileButton: {
        borderColor: '#0066cc',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
    viewProfileText: {
        color: '#0066cc',
        fontSize: 14,
        fontWeight: 'bold',
    },
    bookButton: {
        backgroundColor: '#0066cc',
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
    bookText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
})