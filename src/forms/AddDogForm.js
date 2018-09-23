import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';

import SubmitButton from '../components/SubmitButton';
import FormSection from '../components/FormSection';

const ENDPOINT = "http://192.168.1.3:5000/api/dogs";

export default class AddDogForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            created: false,
            createdDogName: "",
            name: "",
            sex: "",
            breed: "",
            age: "",
            mainPicture: "",
            ownerUniqueId: ""
        }
    }

    _newName = (n) => {
        this.setState({
            name: n
        });
    };
    _newSex = (s) => {
        this.setState({
            sex: s
        });
    };
    _newBreed = (b) => {
        this.setState({
            breed: b
        });
    };
    _newAge = (a) => {
        this.setState({
            age: a
        });
    };
    _newMainPicture = (p) => {
        this.setState({
            mainPicture: p
        });
    };
    _newOwner = (o) => {
        this.setState({
            ownerUniqueId: o
        });
    };
    _submitForm = () => {
        // Make Post request to create a new Dog
        this._createDog();
        this._resetForm();
    };

    _createDog = () => {
        let validated = this._validateForm();
        if(validated){
            fetch(ENDPOINT, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    name: this.state.name,
                    age: this.state.age,
                    breed: this.state.breed,
                    sex: this.state.sex,
                    mainPicture: this.state.mainPicture,
                    ownerUniqueId: this.state.ownerUniqueId
                })
            }).then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    created: true,
                    createdDogName: responseJson.name
                });
            })
            .catch((error) => console.log(error));
        }
    };

    _validateForm = () => {
        // Just for now.. simplciity
        return true;
    };

    _resetForm = () => {
        this.setState({
            name: "",
            sex: "",
            breed: "",
            age: "",
            mainPicture: "",
            ownerUniqueId: ""
        });
    };

    _addNewDog = () => {
        this.setState({
            created: false,
            createdDogName: "",
        });
    };

    render() {
        const { container } = styles;
        if(!this.state.created){
            return (
                <View style={container}>
                    <ScrollView>
                        <FormSection func={this._newName} 
                            value={this.state.name} 
                            label={"Dog's name"} 
                            errorMessage={'* required'} />
                        <FormSection func={this._newAge} 
                            value={this.state.age} 
                            label={"Dog's age"} 
                            errorMessage={'* required'} />
                        <FormSection func={this._newBreed} 
                            value={this.state.breed} 
                            label={"Dog's breed"} 
                            errorMessage={'* required'} />
                        <FormSection func={this._newSex} 
                            value={this.state.sex} 
                            label={"Dog's sex"} 
                            errorMessage={'* required'} />
                        <FormSection func={this._newMainPicture} 
                            value={this.state.mainPicture} 
                            label={"Dog's main picture"} 
                            errorMessage={'* required'} />
                        <FormSection func={this._newOwner} 
                            value={this.state.ownerUniqueId} 
                            label={"Dog's Owner id"} 
                            errorMessage={'* required'} />
                        <SubmitButton func={this._submitForm} value={this.state.name} label={"Add"} button={true} />
                    </ScrollView>
                </View>
            );
        }
        return (
            <View>
                <Text>{this.state.createdDogName} was created successfully!</Text>
                <Button title="Add new dog" onPress={this._addNewDog} />
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