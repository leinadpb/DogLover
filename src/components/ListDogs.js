import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Alert, Button } from 'react-native';

import DogListItem from './DogListItem';

const ENDPOINT = "http://192.168.1.3:5000/api/dogs";

export default class ListDogs extends Component{

    constructor(props) {
        super(props);

        this.state = {
            dataSource: [],
            isLoading: true,
            endpoint: ENDPOINT
        };
    }

    componentWillMount() {
        this._getDogs();
    }

    _getDogs = () => {
        fetch(this.state.endpoint, {
            "Content-Type": "application/json",
            "Accept": "application/json"
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                isLoading: false,
                dataSource: responseJson
            });
        }).catch((error) => console.log(error));
    };

    render() {
        const { container } = styles;
        if(this.state.isLoading){
            return (
                <View style={container}>
                    <Text>{ this.props.loadingText }</Text>
                    <Text>{ this.state.dataSource }</Text>
                </View>
            );
        }
        return (
            <View>
                <Button onPress={this._getDogs} title="refresh" />
                <View style={container}>
                    <FlatList 
                        data={this.state.dataSource}
                        keyExtractor={ (item) => item.dogId.toString() } 
                        renderItem={(item) => <DogListItem id={item.item.dogId} dog={item.item} />}
                    />
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center', //vertical
        justifyContent: 'center', //horizontal
        marginTop: 5,
        marginBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5
    }
});