import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

// Import the image at the top
import facebookLogo from '../assets/images/facebook-logoo.png';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter(); 

    const handleLogin = () => {
        console.log('Email:', email);
        console.log('Password:', password);
        router.push('/'); 
    };

    const handleForgotPassword = () => {
        console.log('Forgot Password clicked');

    };

    return (
        <View style={styles.container}>
            <Image source={facebookLogo} style={styles.logo} />

            <TextInput
                style={styles.input}
                placeholder="Email or Phone Number"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={styles.separator} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#ffffff',
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginBottom: 40,
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 15,
        borderRadius: 5,
        backgroundColor: '#f7f7f7',
        fontSize: 16,
    },
    loginButton: {
        backgroundColor: '#1877f2',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 15,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    forgotPasswordText: {
        color: '#1877f2',
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 20,
    },
    separator: {
        height: 1,
        backgroundColor: '#ddd',
        marginBottom: 20,
    },
    signUpButton: {
        backgroundColor: '#42b72a',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    signUpButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});