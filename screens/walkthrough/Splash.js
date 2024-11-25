import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Splash() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Walkthrough1');
    }, 2000);
  })
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/splash/splash-hero.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Health Desk</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1F2587',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 150,
    marginBottom: 20,
    resizeMode: 'stretch'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
