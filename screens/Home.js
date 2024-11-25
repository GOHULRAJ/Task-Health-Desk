import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const services = [
  { id: 1, title: "Find a Doctor", image: require("../assets/doctor.png") },
  { id: 2, title: "Book Labtest", image: require("../assets/labtest.png") },
  { id: 3, title: "Health Tracker", image: require("../assets/healthtracker.png") },
  { id: 4, title: "Appointments", image: require("../assets/doctor.png") },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#001E6C" />
      <ScrollView Style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.horizontalContainer}>
            <View>
              <Text style={styles.greeting}>Hi Deepa!</Text>
            </View>
            <View style={styles.headerIcons}>
              <TouchableOpacity>
                <Image
                  style={styles.img}
                  source={require("../assets/Home/Group 2876.png")}
                  width={25}
                  height={25}
                  resizeMode='stretch'
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.img}
                  source={require("../assets/bell.png")}
                  width={25}
                  height={25}
                  resizeMode='stretch'
                />
              </TouchableOpacity>
            </View>
          </View>

        </View>

        {/* Individual Plan Section */}
        <View style={styles.individualPlan}>
          <View>
            <Text style={styles.planTitle}>Individual Plan</Text>
            <Text style={styles.planSubtitle}>Book your health checkup</Text>
            <TouchableOpacity>
              <Text style={styles.knowBenefits}>Know your Benefits</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require("../assets/Home/pose_7.png")}
            style={styles.planImage}
          />
          <View style={styles.VectorImage}>
            <Image
              style={styles.vecImage}
              source={require("../assets/Home/Vector_6.png")}
            />
          </View>
        </View>

        {/* Our Services Section */}
        <View style={styles.servicesSection}>
          <Text style={styles.sectionTitle}>Our Services</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.servicesScroll}
          >
            {services.map((service) => (
              <TouchableOpacity key={service.id} style={styles.serviceCard}>
                <Image source={service.image} style={styles.serviceImage} />
                <Text style={styles.serviceText}>{service.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Annual Checkup Section */}
        <View style={styles.checkupSection}>
          <View style={styles.checkupContent}>
            <Text style={styles.checkupTitle}>Book Annual Health Checkups</Text>
            <Text style={styles.checkupSubtitle}>
              Diabetes • Thyroid • Heart • Kidney
            </Text>
            <TouchableOpacity style={styles.bookNowButton} onPress={() => navigation.navigate('CreateAppointment')}>
              <Text style={styles.bookNowText}>Book Now</Text>
            </TouchableOpacity>
          </View>
          <View >
            <Image
              source={require("../assets/Home/Group 91.png")}
              style={styles.epm}
            />
            </View>
        </View>

        {/* Quick Access Section */}
        <Text style={styles.quickAccessTitle}>Quick Access</Text>
        <View style={styles.quickAccess}>
          <TouchableOpacity style={styles.quickAccessCard}>
            <Image
              source={require("../assets/Home/list.png")}
              style={styles.quickAccessIcon}
            />
            <Text style={styles.quickAccessText}>My Doctors</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAccessCard}>
            <Image
              source={require("../assets/Home/calendar.png")}
              style={styles.quickAccessIcon}
            />
            <Text style={styles.quickAccessText}>Create Appointment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAccessCard}>
            <Image
              source={require("../assets/Home/report.png")}
              style={styles.quickAccessIcon}
            />
            <Text style={styles.quickAccessText}>My Reports</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    width: '100%',
    backgroundColor: "#fffff",
  },
  container: {
    width: '100%',
    paddingBottom: 20,
  },
  header: {
    backgroundColor: "#001E6C",
    height: 200,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomLeftRadius: '35%',
    borderBottomRightRadius: '35%'
  },
  horizontalContainer: {
    width: '100%',
    height: 70,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  img: {
    width: 35,
    height: 35,
    resizeMode: 'stretch',
    marginLeft: 10
  }
  ,
  greeting: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  individualPlan: {
    position: 'relative',
    bottom: 100,
    width: '90%',
    height: 180,
    backgroundColor: "white",
    borderRadius: 20,
    marginHorizontal: 'auto',
    flexDirection: "row",
    paddingTop: 35,
    paddingHorizontal: 10,
    // alignItems: "center",
    justifyContent: 'space-between',
    zIndex: 6
  },
  planTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#001E6C",
  },
  planSubtitle: {
    color: "#001E6C",
    marginVertical: 5,
  },
  knowBenefits: {
    position: 'relative',
    color: "#007AFF",
    marginTop: '50%',
  },
  planImage: {
    width: 80,
    height: 80,
    marginRight: 20,
    resizeMode: 'stretch'
  },
  VectorImage: {
    top: 100,
    position: 'absolute',
    height: 50,
    display: 'flex'
  },
  vecImage: {
    width: '100%',
    height: 40,
    resizeMode: 'contain',
    zIndex: 5,
    backgroundColor: 'red'
  },
  servicesSection: {
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2587",
    marginBottom: 10,
    marginLeft: 10,
  },
  servicesScroll: {
    flexDirection: "row",
  },
  serviceCard: {

  },
  serviceImage: {
    height: 150,
    width: 120,
    borderRadius: 10,
    alignItems: "center",
    marginRight: 15,
    shadowColor: "#000",
  },
  serviceText: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
  },
  checkupSection: {
    width:'95%',
   display:'flex',
   alignItems:'center',
   flexDirection:'row',
   justifyContent:'space-between',
  },
  checkupContent:{
    marginVertical: 20,
    backgroundColor: "#fffff",
    marginHorizontal: 15,
    borderRadius: 10,
    padding: 20,
    alignItems:'flex-start'
  },
  epm:{
    width:120,
    height:120,
    resizeMode:'contain',
    justifyContent:'flex-end',
     
  },
  checkupTitle: {
    width: 200,
    fontSize: 18,
    fontWeight: "bold",
    color: "#001E6C",
    marginBottom: 10,
    borderColor: '#555'
  },
  checkupSubtitle: {
    color: "#333",
    marginBottom: 20,
  },
  bookNowButton: {
    backgroundColor: "#1F2587",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  bookNowText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  quickAccess: {
    flexDirection: "row-reverse",
    justifyContent: 'space-evenly',
    marginTop: 20,
    paddingHorizontal: 15,
  },
  quickAccessTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1F2587",
    marginBottom: 10,
    marginLeft: 25
  },
  quickAccessCard: {
    alignItems: "center",
    backgroundColor: '#EAF9F9',
    paddingTop: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 30
  },
  quickAccessIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,

  },
  quickAccessText: {
    fontSize: 12,
    color: "#333",
    textAlign: "center",
  },
  customBottom: {
    width: '100%',
    height: 60,
    backgroundColor: 'red',
    position: 'static',
    display: 'flex',
    justifyContent: 'space-around',

  },
  bottomImg: {
    width: 45,
    height: 45,
    resizeMode: 'stretch',
    marginLeft: 25,
  }
});

export default HomeScreen;
