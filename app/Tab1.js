import React, { Component } from 'react'
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    Button,
    View,
  } from 'react-native'
export default class Tab1 extends React.Component {
    static navigationOptions = {
      title: 'Tab1',
      tabBarIcon: ({tintColor}) => (
        <Icon
            name="bookmark"
            color={tintColor}
            size={24}
        />
    )
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