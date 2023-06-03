import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DescripcionScreen from './src/screens/DescripcionScreen';
import QuizScreen from './src/screens/QuizScreen';
import { createStackNavigator } from '@react-navigation/stack';
import ElementInfoScreen from './src/screens/ElementInfoScreen';
import GroupScreen from './src/screens/GroupScreen';
import QuestionsScreen from './src/screens/QuestionsScreen';
import ScoreScreen from './src/screens/ScoreScreen';

const DescripcionStack = createStackNavigator();

function DescripcionStackScreen() {
  return (
    <DescripcionStack.Navigator
      initialRouteName='Grupos'
      screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        headerTintColor: 'white',
        headerTitleStyle: { fontWeight: 'bold', fontSize: 26 },
      }}
    >
      <DescripcionStack.Screen name="Grupos" component={GroupScreen} />
      <DescripcionStack.Screen name="Descripcion" component={DescripcionScreen} />
      <DescripcionStack.Screen name="ElementInfo" component={ElementInfoScreen} />
    </DescripcionStack.Navigator>
  );
}

function QuizStackScreen() {
  return (
    <DescripcionStack.Navigator
      initialRouteName='PrincipalQuiz'
      screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        headerTintColor: 'white',
        headerTitleStyle: { fontWeight: 'bold', fontSize: 26 },
      }}
    >
      <DescripcionStack.Screen name="PrincipalQuiz" component={QuizScreen} />
      <DescripcionStack.Screen name="Questions" component={QuestionsScreen} />
      <DescripcionStack.Screen name="Score" component={ScoreScreen} />
    </DescripcionStack.Navigator>
  );
}


const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'black',
      primary: 'white',
    },
  };

  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        initialRouteName="Grupos"
        activeColor="white"
        inactiveColor="gray"
        barStyle={{ backgroundColor: 'black' }}
      >
        <Tab.Screen
          name="Grupos"
          component={DescripcionStackScreen}
          options={{
            tabBarLabel: 'Grupos',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="information" color={color} size={26} />
            ),
          }}
        />
  
        <Tab.Screen
          name="Quiz"
          component={QuizStackScreen}
          options={{
            tabBarLabel: 'Quiz',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="help-circle" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );  
}
