import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

export default function ScoreScreen({ route, navigation }) {
  const { correct, total } = route.params;
  const incorrect = total - correct;

  const data = [
    { name: 'Correctas', population: correct, color: 'green', legendFontColor: 'white', legendFontSize: 15 },
    { name: 'Incorrectas', population: incorrect, color: 'red', legendFontColor: 'white', legendFontSize: 15 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Puntuación: {correct}/{total}</Text>
      <PieChart
        data={data}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundGradientFrom: 'black',
          backgroundGradientTo: 'black',
          color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          strokeWidth: 2,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
      <TouchableOpacity style={styles.buttonn} onPress={() => navigation.navigate('PrincipalQuiz')}>
        <Text style={styles.buttonnText}>Volver al inicio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  score: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
  buttonn: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonnText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});
