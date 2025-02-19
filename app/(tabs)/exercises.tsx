import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import HTML from 'react-native-render-html';
import { useRouter } from 'expo-router';

export default function Exercise() {
    const router = useRouter(); // ✅ Use router from expo-router

    const exercises = [
        { 
            title: 'Exercise 3', 
            description: 'Create log in screen<br/>Log in screen fields<ul><li> Email </li></ul><ul><li> Password </li></ul>' 
        },
        { 
            title: 'Exercise 4', 
            description: 'Create register screen<br/>Register screen fields<br/><ul><li> Image: Allow user to select image </li></ul><ul><li> Name </li></ul><ul><li> Email </li></ul><ul><li> Password </li></ul>' 
        },
        { title: 'Exercise 5', description: '' },
        { title: 'Exercise 6', description: '' },
        { title: 'Exercise 7', description: '' },
        { title: 'Exercise 8', description: '' },
        { title: 'Exercise 9', description: '' },
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {exercises.map((exercise, index) => (
                <TouchableOpacity 
                    key={index} 
                    style={styles.exerciseWrapper}
                    onPress={() => {
                        if (exercise.title === 'Exercise 3') {
                            router.push('/login'); // ✅ Correct way to navigate in expo-router
                        }
                    }}
                >
                    <Text style={styles.title}>{exercise.title}</Text>
                    {exercise.description ? (
                        <HTML
                            source={{ html: exercise.description }}
                            tagsStyles={{
                                ul: { marginLeft: 20, marginBottom: 10 },
                                li: { fontSize: 16 },
                            }}
                        />
                    ) : null}
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    exerciseWrapper: {
        marginVertical: 10,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#f8f8f8',
        shadowColor: 'black', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.2, 
        shadowRadius: 4, 
        elevation: 4, 
    },
    title: {
        fontSize: 25,
        marginBottom: 5,
    },
});
