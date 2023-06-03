import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function ElementInfoScreen({ route, navigation }) {
  const { element, getColor } = route.params;
  const color = getColor(element.bloqueGrupo);

  return (
    <View style={{...styles.container, borderColor: color.borderColor}}>
      <Text style={{...styles.atomicNumber, color: color.color}}>{element.numeroatomico}</Text>
      <Text style={{...styles.atomicMassAndRadius, color: color.color}}>
        {`Masa: ${element.masaatomica} / Radio: ${element.radioatomico}`}
      </Text>
      <Text style={{...styles.symbol, color: color.color}}>{element.simbolo}</Text>
      <Text style={{...styles.name, color: color.color}}>{element.nombre}</Text>
      <Text style={{...styles.electronConfiguration, color: color.color}}>{element.configuracionelectronica}</Text>
      <Text style={{...styles.groupBlock, color: color.color}}>{element.bloqueGrupo}</Text>
      <Text style={{...styles.description, color: color.color}}>{element.descripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  atomicNumber: {
    fontSize: 48,
    color: 'white',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  atomicMassAndRadius: {
    fontSize: 24,
    color: 'white',
    position: 'absolute',
    top: 10,
    left: 10,
  },
  symbol: {
    fontSize: screenWidth * 0.4,
    color: 'white',
  },
  name: {
    fontSize: 48,
    color: 'white',
  },
  electronConfiguration: {
    fontSize: 24,
    color: 'white',
  },
  groupBlock: {
    fontSize: 24,
    color: 'white',
    marginTop: 10,
  },
  description: {
    fontSize: 18,
    color: 'white',
    paddingHorizontal: 20,
    textAlign: 'justify',
    marginTop: 20,
  },
});
