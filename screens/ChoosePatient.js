import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ChoosePatient = () => {
  const navigation=useNavigation();
  const [selectedPatient, setSelectedPatient] = useState('Vijay');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const patients = ['Vijay', 'Ajay', 'Ramesh', 'Suresh']; // Example patient list
  const [problem, setProblem] = useState('');

  return (
    <ScrollView style={styles.container}>

      {/* Choose Patient Section */}
      <View style={styles.content}>
        <Text style={styles.title}>Choose Patient</Text>
        <Text style={styles.subtitle}>
          Who're you booking an appointment for?
        </Text>

        {/* Dropdown */}
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <Text style={styles.dropdownText}>{selectedPatient}</Text>
          <Ionicons
            name={isDropdownOpen ? 'chevron-up' : 'chevron-down'}
            size={20}
            color="#888"
          />
        </TouchableOpacity>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <View style={styles.dropdownMenu}>
            {patients.map((patient, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownItem}
                onPress={() => {
                  setSelectedPatient(patient);
                  setIsDropdownOpen(false);
                }}
              >

                <Text style={styles.dropdownItemText}>{patient}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      {/* Patient Details Section */}
      <View style={styles.patientDetails}>
        <Text style={styles.patientDetailsTitle}>Patient Details</Text>
        <View style={styles.detailRow}>
          <Text style={styles.detailKey}>Patient Name</Text>
          <Text style={styles.detailValue}>: {selectedPatient}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailKey}>Relation</Text>
          <Text style={styles.detailValue}>: Self</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailKey}>Date of Birth</Text>
          <Text style={styles.detailValue}>: 05/06/1987</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailKey}>Age</Text>
          <Text style={styles.detailValue}>: 50 yrs</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailKey}>Email</Text>
          <Text style={styles.detailValue}>: Vijay@gmail.com</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailKey}>Sex</Text>
          <Text style={styles.detailValue}>: Male</Text>
        </View>
      </View>

      {/* Text Input for Problem */}
      <TextInput
        style={styles.input}
        placeholder="Write your problem"
        placeholderTextColor="#999"
        multiline
        value={problem}
        onChangeText={setProblem}
      />

      {/* Continue Button */}
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('OnlineBooking')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  content: {
    marginTop:'15%',
    margin: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 20,
    
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2A2E92',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    backgroundColor: '#fff',
  },
  dropdownText: {
    fontSize: 16,
    color: '#000',
  },
  dropdownMenu: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#000',
  },
  patientDetails: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    elevation: 2,
  },
  patientDetailsTitle: {
    textAlign:'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2A2E92',
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  detailKey: {
    fontSize: 14,
    fontWeight: '600',
    color: '#555',
    width: '40%',
  },
  detailValue: {
    fontSize: 14,
    color: '#333',
  },
  input: {
    height:150,
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    textAlignVertical: 'top',
  },
  button: {
    marginTop:'10%',
    width:'80%',
    marginLeft:'10%',
    backgroundColor: '#2A2E92',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChoosePatient;
