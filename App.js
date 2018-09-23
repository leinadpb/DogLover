import React, { Component } from 'react';
import {Text, View} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import AddDogScreen from './src/screens/AddDogScreen';

import { createBottomTabNavigator } from 'react-navigation';

const App = createBottomTabNavigator({
  Home: HomeScreen,
  AddDog: AddDogScreen
});

export default App;
