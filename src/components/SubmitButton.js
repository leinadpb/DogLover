import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class SubmitButton extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const { container } = styles;
        return (
            <View style={ container }>
                <Button onPress={this.props.func} title={this.props.label} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        marginTop: 8
    }
});