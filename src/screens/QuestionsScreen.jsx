import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios'; 
import HOST from '../HOST';

export default function QuestionsScreen({ navigation }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    axios.get(`http://${HOST}/api/quiz/todas`)
      .then(res => {
        setQuestions(res.data); 
      })
      .catch(err => console.log(err));  
  }, []);

  const handleAnswer = (index) => {
    setSelectedOption(index);

    if (index === questions[currentQuestionIndex].respuestaCorrecta) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
        setTimeout(() => {
          setCurrentQuestionIndex(nextQuestion);
          setSelectedOption(null);
        }, 500);
      } else {
        setTimeout(() => {
          navigation.navigate('Score', { correct: score, total: questions.length }); 
        }, 500)
      }  
  }


  if (!questions[currentQuestionIndex]) {
    return (
      <View style={styles.container}>
        <Text style={styles.question}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{questions[currentQuestionIndex]?.pregunta}</Text>
      {questions[currentQuestionIndex]?.opciones.map((opcion, index) => (
        <TouchableOpacity 
          key={index} 
          style={[
            styles.option, 
            index === selectedOption ? (index === questions[currentQuestionIndex].respuestaCorrecta ? styles.correct : styles.incorrect) : null
          ]} 
          onPress={() => handleAnswer(index)}
        >
          <Text style={styles.optionText}>{opcion}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'black',
  },
  question: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  option: {
    backgroundColor: '#333',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  optionText: {
    color: 'white',
    fontSize: 18,
  },
  correct: {
    backgroundColor: 'green',
  },
  incorrect: {
    backgroundColor: 'red',
  },
});
