import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Form extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const { container } = styles;
        return (
            <View style={ container }>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 8,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 2, height: 2 },
        width: '100%'
    }
});