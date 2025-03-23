import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import HTML from 'react-native-render-html';
import { useRouter } from 'expo-router';

export default function Exercise() {
    const router = useRouter();

    const exercises = [
        { title: 'Exercise 3' },
        { title: 'Exercise 4' },
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
                            router.push('/login');
                        } else if (exercise.title === 'Exercise 4') {
                            router.push('/stopWatch');
                        } else if (exercise.title === 'Exercise 5') {
                            router.push('/registerScreen');
                        } else if (exercise.title === 'Exercise 6') {
                            router.push('/crud');
                        } else if (exercise.title === 'Exercise 7') {
                            router.push('/quiz');
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