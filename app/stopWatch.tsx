import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Effect() {
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);

    useEffect(() => {
        let interval = null;
        if (start) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
        return () => {
            clearInterval(interval);
        };
    }, [start]);

    function handleStart() {
        setStart(!start);
    }

    function handleReset() {
        setTime(0);
        setStart(false);
    }

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.timerText}>{formatTime(time)}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, styles.resetButton]}
                    onPress={handleReset}
                >
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, start ? styles.pauseButton : styles.startButton]}
                    onPress={handleStart}
                >
                    <Text style={styles.buttonText}>{!start ? 'Start' : 'Pause'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f7",
    },
    timerText: {
        fontSize: 60,
        fontWeight: "300",
        color: "#000",
        marginBottom: 40,
        fontFamily: "System",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "60%",
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    startButton: {
        backgroundColor: "#007AFF",
    },
    pauseButton: {
        backgroundColor: "#FF3B30",
    },
    resetButton: {
        backgroundColor: "#8E8E93",
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "500",
    },
});