import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For the back arrow icon
import { useNavigation } from '@react-navigation/native';

const DoctorAppointment = () => {
  const navigation=useNavigation();
  const [selectedSlot, setSelectedSlot] = useState(null);

  const timeSlots = [
    '10.00 AM', '10.30 AM', '11.00 AM', '11.30 AM',
    '04.00 PM', '04.30 PM', '05.30 PM', '06.30 PM',
  ];

  const renderSlot = ({ item, index }) => (
    <TouchableOpacity
      style={[
        styles.slot,
        selectedSlot === index && styles.selectedSlot,
      ]}
      onPress={() => setSelectedSlot(index)}
    >
      <Text style={[styles.slotText, selectedSlot === index && styles.selectedSlotText]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        <View style={styles.calendarHeader}>
          <Ionicons name="chevron-back" size={20} color="#2A2E92" />
          <Text style={styles.monthText}>January 2024</Text>
          <Ionicons name="chevron-forward" size={20} color="#2A2E92" />
        </View>
        <View style={styles.weekRow}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <Text key={day} style={styles.dayText}>{day}</Text>
          ))}
        </View>
        <View style={styles.datesRow}>
          {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => (
            <TouchableOpacity key={date} style={[styles.dateBox, date === 13 && styles.selectedDate]}>
              <Text style={[styles.dateText, date === 13 && styles.selectedDateText]}>{date}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <Text style={styles.slotsTitle}>Available slots</Text>
      <FlatList
        data={timeSlots}
        renderItem={renderSlot}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        contentContainerStyle={styles.slotsContainer}
      />

      <TouchableOpacity style={styles.continueButton} onPress={()=>navigation.navigate('PatientDetails')}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:'30%',
    backgroundColor: '#f5f5f5',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  calendarContainer: {
    margin: 20,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 2,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  monthText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2A2E92',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  dayText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    flex: 1,
  },
  datesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  dateBox: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  selectedDate: {
    backgroundColor: '#2A2E92',
  },
  dateText: {
    fontSize: 14,
    color: '#888',
  },
  selectedDateText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  slotsTitle: {
    marginHorizontal: 20,
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  slotsContainer: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  slot: {
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    margin: 5,
  },
  selectedSlot: {
    backgroundColor: '#2A2E92',
  },
  slotText: {
    fontSize: 14,
    color: '#888',
  },
  selectedSlotText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  continueButton: {
    margin: 20,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A2E92',
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default DoctorAppointment;
