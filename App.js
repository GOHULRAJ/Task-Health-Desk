import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useState, useEffect } from "react";
import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from 'expo-status-bar';
import Ionicons from "react-native-vector-icons/Ionicons"; // Example for icons


import { StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native';
import CreateAppointment from './screens/CreateAppointment';
import OnlineConsultation from './screens/OnlineConsultation';
import DoctorDetails from './screens/DoctorDetails';
import Splash from './screens/walkthrough/Splash';
import Walkthrough1 from './screens/walkthrough/Walkthrough1';
import Walkthrough2 from './screens/walkthrough/Walkthrough2';
import Walkthrough3 from './screens/walkthrough/Walkthrough3';
import OnlineBooking from './screens/onlineAppointment/OnlineBooking';
import HomeScreen from "./screens/Home";
import CorporateLogin from './screens/CorporateLogin';
import DoctorAppointment from './screens/DoctorAppointment';
import PatientDetails from './screens/PatientDetails';
import ChoosePatient from './screens/ChoosePatient';
// TestScreens
import TestScreen1 from "./screens/MyTestScreens/TestScreen1";
import TestScreen2 from "./screens/MyTestScreens/TestScreen2";
import TestScreen3 from "./screens/MyTestScreens/TestScreen3";
import TestScreen4 from "./screens/MyTestScreens/TestScreen4";
import Devices from "./screens/MyTestScreens/Devices";
import Records from "./screens/MyTestScreens/Records";
import Profiles from "./screens/MyTestScreens/Profile";


//user defined components
const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// const HomeStack=createStackNavigator();
const AppointmentStack = createStackNavigator();
const SearchStack = createStackNavigator();

// const HomeStackScreen=()=>{
//   <HomeStack.Navigator>
//     <HomeStack.Screen
//       name="HomeScreen"
//       component={HomeScreen}
//     /> 
//     <HomeStack.Screen
//       name="TestScreen1"
//       component={TestScreen1}
//     /> 
//   </HomeStack.Navigator>
     
// }

// const AppointmentStackScreen = () => (
//   <AppointmentStack.Navigator>
  
//   <AppointmentStack.Screen
//       name="CorporateLogin"
//       component={CorporateLogin}
//     />
//     <AppointmentStack.Screen
//       name="CreateAppointment"
//       component={CreateAppointment}
//     />
//     <AppointmentStack.Screen
//       name="OnlineConsultation"
//       component={OnlineConsultation}
//     />

//     <AppointmentStack.Screen
//       name="DoctorDetails"
//       component={DoctorDetails}
//     />

//     <AppointmentStack.Screen
//       name="DoctorAppointment"
//       component={DoctorAppointment}
//     />

//     <AppointmentStack.Screen
//       name="PatientDetails"
//       component={PatientDetails}
//     />

//     <AppointmentStack.Screen
//       name="ChoosePatient"
//       component={ChoosePatient}
//     />

//     <AppointmentStack.Screen
//       name="OnlineBooking"
//       component={OnlineBooking}
//     />


//   </AppointmentStack.Navigator>
// );

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen
      name="TestScreen3"
      component={TestScreen3} />
    <SearchStack.Screen
      name="TestScreen4"
      component={TestScreen4} />
  </SearchStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator screenOptions={{
    headerShown: false,
  }}>
    <Tabs.Screen name="Home" 
    component={HomeScreen} 
    options={{
      tabBarIcon: ({ focused }) => (
        <Image
          source={
               require("./assets/Home/home (2).png") 
             
          }
          style={{
            width: 30,
            height: 30,
            resizeMode: "contain",
          }}
        />
      ),
      title: "Home",
    }}/>
    <Tabs.Screen 
    name="Report" 
    component={Records}
    options={{
      tabBarIcon: ({ focused }) => (
        <Image
          source={
               require("./assets/Home/records.png") 
             
          }
          style={{
            width: 30,
            height: 30,
            resizeMode: "contain",
          }}
        />
      ),
      title: "Records",
    }}
     />
    <Tabs.Screen 
    name="Devices"
     component={Devices}
     options={{
      tabBarIcon: ({ focused }) => (
        <Image
          source={
               require("./assets/Home/devices.png") 
             
          }
          style={{
            width: 30,
            height: 30,
            resizeMode: "contain",
          }}
        />
      ),
      title: "Devices",
    }}
    />
    <Tabs.Screen 
    name="Profiles" 
    component={Profiles}
    options={{
      tabBarIcon: ({ focused }) => (
        <Image
          source={
               require("./assets/Home/profile.png") 
             
          }
          style={{
            width: 30,
            height: 30,
            resizeMode: "contain",
          }}
        />
      ),
      title: "Profile",
    }} />
  </Tabs.Navigator>
);

function App() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >

  
      <Stack.Screen
        name="Splash"
        component={Splash}
      />

      <Stack.Screen
        name="Walkthrough1"
        component={Walkthrough1}
        Options={{
         headerShown:false
        }}
      />

      <Stack.Screen
        name="Walkthrough2"
        component={Walkthrough2}
        options={{
          title: "My Custom Details Title", // Custom title for Details screen
        }}
      />

      <Stack.Screen
        name="Walkthrough3"
        component={Walkthrough3}
      />

      <Stack.Screen
        name="Home"
        component={TabsScreen}
      />

      <Stack.Screen
        name="CorporateLogin"
        component={CorporateLogin}
        options={({ navigation }) => ({
          title: "Your Screen Title", // Custom title
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 10 }} // Adjust the spacing as needed
              onPress={() => navigation.goBack()} // Go Back Function
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      
      <Stack.Screen
        name="CreateAppointment"
        component={CreateAppointment}
        options={({ navigation }) => ({
          title: "Your Screen ", 
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 10 }} 
              onPress={() => navigation.goBack()} 
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
        
      />

      <Stack.Screen
        name="OnlineConsultation"
        component={OnlineConsultation}
        options={({ navigation }) => ({
          title: "Your Screen Title", 
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 10 }} 
              onPress={() => navigation.goBack()} 
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen
        name="DoctorDetails"
        component={DoctorDetails}
      />

      <Stack.Screen
        name="DoctorAppointment"
        component={DoctorAppointment}
      />

      <Stack.Screen
        name="PatientDetails"
        component={PatientDetails}
      />

      <Stack.Screen
        name="ChoosePatient"
        component={ChoosePatient}
      />
      <Stack.Screen
        name="OnlineBooking"
        component={OnlineBooking}
      />



    </Stack.Navigator>


  )
}

// return(
//   <Drawer.Navigator>
//     <Drawer.Screen 
//       name="Home" 
//       component={Home}
//       options={{
//         headerTitle:()=> <Header name="Gs JobPortal"/>,
//         headerStyle:{
//           height:150,
//           borderBottomLeftRadius:30,
//           borderBottomRightRadius:50,
//           backgroundColor:'#00e4d0',
//           shadowColor:'#000',
//           elevation:25
//         }
//       }}
//       />
//       <Drawer.Screen
//         name="Login"
//         component={JobSeekerLogin}

//       />
//   </Drawer.Navigator>


// )


export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}