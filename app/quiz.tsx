import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import axios from 'axios';
import { RadioButton } from 'react-native-paper';

const App = () => {
  const [numberOfQuestions, setNumberOfQuestions] = useState('');
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);

  const fetchQuestions = async () => {
    if (numberOfQuestions < 10 || numberOfQuestions > 30) {
      Alert.alert('Error', 'Please enter a number between 10 and 30.');
      return;
    }

    try {
      const response = await axios.get(`https://opentdb.com/api.php?amount=${numberOfQuestions}`);
      setQuestions(response.data.results);
      setUserAnswers({});
      setScore(null);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch questions. Please try again.');
    }
  };

  const handleAnswer = (questionIndex, answer) => {
    setUserAnswers({ ...userAnswers, [questionIndex]: answer });
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correct_answer) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Quiz App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter number of questions (10-30)"
        keyboardType="numeric"
        value={numberOfQuestions}
        onChangeText={(text) => setNumberOfQuestions(text)}
      />
      <View style={styles.buttonContainer}>
        <Button title="Start Quiz" onPress={fetchQuestions} color="#007AFF" />
      </View>

      {questions.map((question, index) => (
        <View key={index} style={styles.questionContainer}>
          <Text style={styles.questionText}>{question.question}</Text>
          {[question.correct_answer, ...question.incorrect_answers].sort().map((answer, ansIndex) => (
            <View key={ansIndex} style={styles.answerContainer}>
              <RadioButton
                value={answer}
                status={userAnswers[index] === answer ? 'checked' : 'unchecked'}
                onPress={() => handleAnswer(index, answer)}
                color="#007AFF"
              />
              <Text style={styles.answerText}>{answer}</Text>
            </View>
          ))}
        </View>
      ))}

      {questions.length > 0 && (
        <View style={styles.buttonContainer}>
          <Button title="Submit" onPress={calculateScore} color="#007AFF" />
        </View>
      )}

      {score !== null && (
        <Text style={styles.scoreText}>Your Score: {score}/{questions.length}</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  input: {
    height: 50,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    fontSize: 16,
  },
  buttonContainer: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  questionContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000',
  },
  answerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  answerText: {
    fontSize: 16,
    color: '#000',
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#000',
  },
});

export default App;