import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PatientDetails = () => {
  const navigation=useNavigation();
  const [selectedPatient, setSelectedPatient] = useState('Vijay'); // Default patient
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const patients = ['Vijay', 'Ajay', 'Ramesh', 'Suresh']; // Example patients list

  return (
    <View style={styles.container}>


      {/* Choose Patient Section */}
      <View style={styles.content}>
        <Text style={styles.title}>Choose Patient</Text>
        <Text style={styles.subtitle}>Who're you booking an appointment for?</Text>

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
                <TouchableOpacity onPress={()=>navigation.navigate('ChoosePatient')}>
                <Text style={styles.dropdownItemText}>{patient}</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:'20%',
    width:"100%",
    height:'100%',
    backgroundColor:'#f5f5f5',

  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  content: {
    margin: 20,
    backgroundColor: '#f5f5f5',
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
    marginTop:'10%',
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
});

export default PatientDetails;
