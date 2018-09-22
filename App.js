import React, {Component} from 'react';
import {Text, View} from 'react-native';

import ListDogs from './src/components/ListDogs';
import Header from './src/components/Header';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header title='Dog Lover' />
        <ListDogs loadingText={'Loading...'} />
      </View>
    );
  }
}

