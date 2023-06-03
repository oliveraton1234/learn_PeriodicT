import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';
import HOST from '../HOST';


export default function DescripcionScreen({ route, navigation }) {
  const [elements, setElements] = useState([]);
  const { group } = route.params;

  useEffect(() => {
    axios.get(`http://${HOST}/api/element/todos`)
      .then(res => {
        const groupElements = res.data.filter(element => element.bloqueGrupo === group);
        setElements(groupElements);
      })
      .catch(err => console.log(err));      
  }, []);

  const getColor = (bloqueGrupo) => {
    switch (bloqueGrupo) {
      case 'No metal':
        return {borderColor: '#0DFAD1', color: '#0DFAD1'};
      case 'Gas noble':
        return {borderColor: '#FFD700', color: '#FFD700'};
      case 'Alcalinos':
        return {borderColor: '#FF1493', color: '#FF1493'};
      case 'Alcalinoterreos':
        return {borderColor: '#A390F6', color: '#A390F6'};
      case 'Metales':
        return {borderColor: '#FF4500', color: '#FF4500'};
      case 'Metaloide':
        return {borderColor: '#EE82EE', color: '#EE82EE'};
      case 'Halogeno':
        return {borderColor: '#7FFF00', color: '#7FFF00'};
      case 'Actinidos':
        return {borderColor: '#00BFFF', color: '#00BFFF'}; 
      case 'Lantanidos':
        return {borderColor: '#FF69B4', color: '#FF69B4'}; 
      default:
        return {borderColor: 'white', color: 'white'};
    }
  }

  

  const renderElement = ({ item }) => {
    const color = getColor(item.bloqueGrupo);
  
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ElementInfo', { element: item, getColor })}
        style={{ ...styles.card, borderColor: color.borderColor }}
      >
        <Text style={{ ...styles.simbolo, color: color.color }}>{item.simbolo}</Text>
        <Text style={{ ...styles.nombre, color: color.color }}>{item.nombre}</Text>
        <Text style={{ ...styles.numeroatomico, color: color.color }}>{item.numeroatomico}</Text>
        <Text style={{ ...styles.masaatomica, color: color.color }}>{item.masaatomica}</Text>
      </TouchableOpacity>
    );
  }
  

  return (
    <View style={styles.container}>
      <FlatList
        data={elements}
        renderItem={renderElement}
        keyExtractor={item => item._id.toString()}
        numColumns={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  card: {
    backgroundColor: '#000',
    borderRadius: 15,
    borderWidth: 3, 
    borderColor: 'transparent',
    padding: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 115,
  },
  simbolo: {
    fontSize: 20,
    color: 'white',
  },
  nombre: {
    fontSize: 12,
    color: 'white',
  },
  numeroatomico: {
    fontSize: 13,
    color: 'white',
    position: 'absolute',
    top: 5,
  },
    masaatomica: {
    fontSize: 10,
    color: 'white',
    position: 'absolute',
    bottom: 5
    },
});
