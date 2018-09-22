import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Header extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const { container, textTitle } = styles;
        return (
            <View style={ container }>
                <Text style={ textTitle }>{this.props.title}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 5,
        marginBottom: 2,
        borderBottomColor: '#0a88b2',
        borderBottomWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 22
    }
});