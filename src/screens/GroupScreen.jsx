import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';
import HOST from '../HOST';

export default function GroupScreen({ navigation }) {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios.get(`http://${HOST}/api/element/todos`)
      .then(res => {
        const elements = res.data;
        const uniqueGroups = [...new Set(elements.map(element => element.bloqueGrupo))];
        // const bloqueGrupo = elements.map(element => element.bloqueGrupo);
        setGroups(uniqueGroups);
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

  const renderGroup = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Descripcion', { group: item })}
        style={{...styles.card, borderColor: getColor(item).borderColor}}
      >
        <Text style={{...styles.groupName,  color: getColor(item).color}}>{item}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={groups}
        renderItem={renderGroup}
        keyExtractor={item => item}
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
    marginTop: 50,
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
    width: 200,
    height: 115,
  },
  groupName: {
    fontSize: 20,
  },
});
