import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

var reviews = [
    {
        id: 1,
        name:'Priya Anand',
        profile: 'https://via.placeholder.com/50', // Replace with actual avatar URL
        text: 'lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document',
        ratting:'4.5'
    },
    {
        id: 2,
        name:'Priya Anand',
        profile: 'https://via.placeholder.com/50', // Replace with actual avatar URL
        text: 'lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document',
        ratting:'4.5'
    },
];

export default function DoctorDetails() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <View style={styles.topcontainer}>
                    <Image
                        style={styles.elipse}
                        source={require('../assets/DoctorDetails/Ellipse 7.png')}
                    />
                    <Image
                        style={styles.stretch}
                        source={require('../assets/DoctorDetails/pngwing (1).png')}
                    />
                    <Image
                        style={styles.heart}
                        source={require('../assets/DoctorDetails/Group 2156.png')}
                    />

                </View>
                <View style={styles.doctorDetails}>
                    <View style={styles.DoctorProfile}>
                        <Text style={styles.profileText}>Dr. Vijayakumar</Text>
                        <Text style={styles.profileDes}>General Physician</Text>
                        <View style={styles.ratingRow}>
                            <Text style={styles.star}>⭐</Text>
                            <Text style={styles.rating}>4.5 ratings | 300 Reviews</Text>
                        </View>
                        <Text style={styles.Intro}>Introduction</Text>
                        <Text style={styles.text}>Lorem ipsum is a placeholder text commonly used to
                            demonstrate the visual form of a document or a typeface
                            without relying on meaningful content. </Text>
                        <View style={styles.specContainer}>
                            <Text style={styles.specTitle}>Specialization</Text>
                            <Text style={styles.specText}>. General Physician</Text>
                            <Text style={styles.specText}>. Diabetology</Text>
                            <Text style={styles.specText}>. Family Medicine</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <View style={styles.btnStyle}>
                                <Text>11 years</Text>
                                <Text>Experience</Text>
                            </View>
                            <View style={styles.btnStyle}>
                                <Text>11 years</Text>
                                <Text>Experience</Text>
                            </View>
                        </View>
                        <View style={styles.regContainer}>
                            <Text style={styles.regTitle}>Registration</Text>
                            <Text style={styles.regBottomText}>Tamil Nadu Medical Council 2012</Text>
                        </View>

                        <View style={styles.revContainer}>
                            <View style={styles.header}>
                                <Text style={styles.headerText}>Reviews</Text>
                                <TouchableOpacity>
                                    <Text style={styles.seeAll}>See all</Text>
                                </TouchableOpacity>
                            </View>

                            {/* Reviews */}
                            {reviews.map((review) => (
                                <View key={review.id} style={styles.reviewContainer}>
                                    <Image source={{ uri: review.profile }} style={styles.avatar} />
                                    <View style={styles.reviewContent}>
                                        <View style={styles.starContainer}>
                                        <Text style={styles.profileName}>{review.name}</Text>
                                            <Text style={styles.star}>⭐{review.id}{review.ratting} rattings</Text>
                                        </View>
                                        <Text style={styles.reviewText}>{review.text}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                        <TouchableOpacity style={styles.bookButton}>
                            <Text style={styles.bookText}>Book Appointment</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',
    },
    topcontainer: {
        position: 'relative',
        height: 320,
        marginTop: 40,
        backgroundColor: '#1F2587'
    },
    stretch: {
        position: "absolute",
        width: 235,
        height: 280,
        zIndex: 3,
        bottom: 0,
        left: 30,
        objectFit: "fit"
    },
    elipse: {
        position: 'absolute',
        width: 270,
        height: 280,
        zIndex: 2,
        bottom: -40,
        left: -8,
        objectFit: "cover"
    },
    heart: {
        height: 45,
        width: 45,
        position: 'relative',
        right: -345,
        top: 15
    },
    doctorDetails: {
        paddingLeft: 30,
        padding: 20,
        top: -20,
        width: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        zIndex: 4,
    },
    DoctorProfile: {
        width: '90%',
        height: '100%',
        backgroundColor: 'white',

    },
    profileText: {
        fontSize: 28,
        fontWeight: 600
    },
    profileDes: {
        color: '#1F2587',
        fontSize: 20,
        fontWeight: 600,
        // fontFamily:'Montserrat'
    },
    ratingRow: {
        flexDirection: 'row',
        left: 0,
        marginTop: 10,
    },
    star: {
        fontSize: 16,
        color: '#ffcc00',
        marginRight: 5,
    },
    rating: {
        fontSize: 14,
        color: '#333'
    },
    Intro: {
        marginTop: 35,
        color: '#1F2587',
        fontSize: 18,
        fontWeight: 600,
    },
    text: {
        textAlign: 'justify',
        flexWrap: 'wrap',
        fontSize: 14,
        lineHeight: '22',
        letterSpacing: 2
    },
    specContainer: {
        marginTop: 20,
        paddingTop: 20,
        paddingLeft: 20,
        width: '100%',
        height: 150,
        backgroundColor: 'white',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        borderRadius: 10,
        marginBottom: 20,
        justifyContent: 'center'
    },
    specTitle: {
        marginTop: 0,
        color: '#1F2587',
        fontSize: 18,
        fontWeight: 600,
    },
    specText: {
        textAlign: 'justify',
        flexWrap: 'wrap',
        fontSize: 14,
        fontWeight: 600,
        lineHeight: '30',
        letterSpacing: 1
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
    },
    btnStyle: {
        backgroundColor: '#1F25871A',
        paddingVertical: 10,
        paddingHorizontal: 20,

    },
    regContainer: {
        marginTop: 20,
        backgroundColor: '#61FFF6',
        width: '100%',
        height: 150,
        elevation: 3,
        shadowColor: '#000',
        borderColor: 'black'

    },
    regTitle: {
        paddingTop: 25,
        left: 20,
        color: '#1F2587',
        fontSize: 18,
        fontWeight: 600,
    },
    regBottomText: {
        position: 'relative',
        justifyContent: 'flex-end',
        alignItems: 'center',
        bottom: -70,
        left: 65
    },
    reviewContainer: {
        marginTop: 20,
        padding: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        borderRadius: 5,
        marginBottom: 20,
    },
    revContainerTop: {
        display: 'flex',
        justifyContent: "space-between"
    }
    ,
    seeMoreLink: {
        left: '90%',
        top: '-15',
        color: 'blue',
        textDecorationLine: 'underline'
    },
    revText: {
        fontSize: 24,
        fontWeight: 600,
    },
    revContainer: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
      },
      headerText: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
      },
      seeAll: {
        fontSize: 14,
        color: '#003DA5',
        fontWeight: '500',
      },
      reviewContainer: {
        marginTop:20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        marginBottom: 16,
      },
      avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
      },
      profileName:{
        fontSize:16,
        fontWeight:700
      },

      reviewContent: {
        flex: 1,
        fontSize:12
      },
      starContainer: {
        marginBottom: 4,
      },
      star: {
        fontSize: 12,
        color: '#000', // Gold color
      },
      reviewText: {
        fontSize: 14,
        color: '#555',
      },
      bookButton: {
        marginLeft:'5%',
        width:'85%',
        backgroundColor: '#1F2587',
        borderRadius: 25,
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
    bookText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign:'center',
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
})