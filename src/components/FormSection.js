import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';

export default class FormSection extends Component {
    constructor(props) {
        super(props);
        this.state={
            isButton: this.props.button
        };
    }
    render() {
        if(this.state.isButton){
            <View>
                <Button raised title={ this.props.label } />
            </View>
        }
        return (
            <View>
                <FormLabel>{ this.props.label }</FormLabel>
                <FormInput value={this.props.value} onChangeText={(txt) => this.props.func(txt)} />
            </View>
        );
    }
}