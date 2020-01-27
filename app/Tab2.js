import React, { Component } from 'react'
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    Button,
    View,
  } from 'react-native'
export default class Tab2 extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Go to Jane's profile"
          onPress={() => navigate('Profile', {name: 'Jane'})}
        />
      );
    }
  }