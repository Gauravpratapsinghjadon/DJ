import React, { Component } from 'react'
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    Button,
    View,
  } from 'react-native'
export default class Tab3 extends React.Component {
    static navigationOptions = {
      title: 'Welcossssssme',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="profile"
          onPress={() => navigate('Profile', {name: 'Jane'})}
        />
      );
    }
  }