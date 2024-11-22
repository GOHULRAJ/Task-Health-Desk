import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CreateAppointment from './screens/CreateAppointment';
import OnlineConsultation from './screens/OnlineConsultation';
import DoctorDetails from './screens/DoctorDetails';
import Splash from './screens/Splash';
// import { useEffect} from 'react';



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Splash/> 
      {/* <CreateAppointment/> */}
      {/* <OnlineConsultation/> */}
       {/* <DoctorDetails/>  */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
