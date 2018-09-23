import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import Header from '../components/Header';
import ListDogs from '../components/ListDogs';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Dog Lover',
    };
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <View>
                <Header title={ this.props.title } />
                <ListDogs loadingText={'Loading...'} />
            </View>
        );
    }
}