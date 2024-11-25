import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const CorporateLogin = () => {
   const navigation= useNavigation();
    const [corporateName, setCorporateName] = useState('Test');
    const [username, setUsername] = useState('Deepa');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image
                    style={styles.image}
                    source={require('./../assets/splash/splash-hero.png')}
                />
                <View style={styles.context}>
                    <Text style={styles.appName}>Health Desk</Text>
                    <Text style={styles.title}>Corporate Login</Text>
                    <Text style={styles.subtitle}>Hi, Welcome Back!</Text>
                </View>
                {/* Corporate Name Input */}
                <Text style={styles.inputText}>CorporateName</Text>
                <View style={styles.inputContainer}>
                    <Icon name="account" size={20} style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        value={corporateName}
                        onChangeText={setCorporateName}
                        placeholder="Corporate Name"
                    />
                    <Icon name="menu-down" size={20} style={styles.inputIcon} />
                </View>
                <Text style={styles.helperText}>
                    Type 3 characters to search for Corporate
                </Text>

                {/* Username Input */}
                <Text style={styles.inputText}>UserName</Text>
                <View style={styles.inputContainer}>
                    <Icon name="account" size={20} style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        value={username}
                        onChangeText={setUsername}
                        placeholder="UserName"
                    />
                </View>

                {/* Password Input */}
                <Text style={styles.inputText}>Password</Text>
                <View style={styles.inputContainer}>
                    <Icon name="lock" size={20} style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                        placeholder="Password"
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility}>
                        <Icon
                            name={showPassword ? 'eye-off' : 'eye'}
                            size={20}
                            style={styles.inputIcon}
                        />
                    </TouchableOpacity>
                </View>


                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',
        padding: 16,
    },

    content: {
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: '#fff'
    },

    image: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
        marginBottom: 16,
    },
    appName: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'darkblue',
        marginBottom: 4,
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '600',
        color: 'black',
        marginBottom: 4,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 16,
        color: '#5C5C5C',
        marginBottom: 70,
    },
    inputContainer: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        paddingHorizontal: 10,
        marginBottom: 30,
    },
    inputText: {
        top: -10,
        left: -160,
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 16,
        color: '#333333',
    },
    inputIcon: {
        color: '#757575',
        marginHorizontal: 8,
    },
    helperText: {
        alignSelf: 'flex-start',
        marginLeft: 8,
        fontSize: 12,
        color: '#6C757D',
        bottom: 22,
    },
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#003DA5',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 65,
    },
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default CorporateLogin;