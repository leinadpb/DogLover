import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Header from '../components/Header';
import AddDogForm from '../forms/AddDogForm'

export default class AddDogScreen extends Component {
    static navigationOptions = {
        title: 'Add dog',
    };
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Header title={ 'Add a dog' } />
                <AddDogForm />
            </View>
        );
    }
}