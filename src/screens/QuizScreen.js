import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const QuizScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido al Quiz de la Tabla Periódica!</Text>
      <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('Questions')}>
        <Text style={styles.startButtonText}>Comenzar Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
    color: 'white',
  },
  startButton: {
    backgroundColor: '#0DFAD1',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
  },
  startButtonText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
