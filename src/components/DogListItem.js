import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class DogListItem extends React.PureComponent {

    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            selected: false
        };
    }

    _onPress = (status) => {
        this.setState({
            selected: !status
        });
    };

    render() {
        const { container, dogInfo, dogName, dogNameSelected, selectedStyle } = styles;

        return (
            <TouchableOpacity onPress={this._onPress.bind(this, this.state.selected)}>
                <View style={container} key={this.props.id}>
                    <View>
                        <Text style={this.state.selected ? dogNameSelected : dogName}>{ this.props.dog.name } - { this.props.id }</Text>
                    </View>
                    <View style={dogInfo}>
                        <Text>{ this.props.dog.age } - {this.props.dog.breed} - {this.props.dog.sex}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    dogName: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    },
    dogNameSelected: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'red'
    },
    dogInfo: {
        margin: 7
    },
    selectedStyle:{
        color: 'red'
    }
});