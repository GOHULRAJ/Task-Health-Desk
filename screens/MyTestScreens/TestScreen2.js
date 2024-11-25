import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const TestScreen2 = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>TestScreen2</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('TestScreen3')}>
                <Text style={styles.Button}>TestScreen3</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TestScreen2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 46,
        fontWeight: 44,
    },
    Button: {
        backgroundColor: "blue",
        paddingTop: 10,
        paddingHorizontal: 20,
        textAlign: 'center'
    }
})