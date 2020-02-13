/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: undefined
    };
  }
  render() {
    if (this.state.greeting) return this.renderAfterButton();
    return (
      <View
        testID="welcome"
        accessibilityLabel="welcome"
        style={{ flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text style={{ fontSize: 25, marginBottom: 30 }}>Welcome to React Native</Text>
        <Text style={{ fontSize: 10 }}>To get started, edit index.ios.js</Text>
        <Text style={{ fontSize: 10 }}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <TouchableOpacity testID="hello_button" accessibilityLabel="hello_button" onPress={this.onButtonPress.bind(this, 'Hello')}>
          <Text style={{ color: 'blue', marginBottom: 20 }}>Say Hello</Text>
        </TouchableOpacity>
        <TouchableOpacity testID="world_button" accessibilityLabel="world_button" onPress={this.onButtonPress.bind(this, 'World')}>
          <Text style={{ color: 'blue', marginBottom: 20 }}>Say World</Text>
        </TouchableOpacity>
        <TouchableOpacity
          testID="goodbye_button"
          accessibilityLabel="goodbye_button"
          onPress={this.onButtonPress.bind(this, 'Goodbye, World')}
        >
          <Text style={{ color: 'blue', marginTop: 50, marginBottom: 20 }}>Say Goodbye</Text>
        </TouchableOpacity>
      </View>
    );
  }
  renderAfterButton() {
    return (
      <View style={{ flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center' }}>
        <Text id="textTest" style={{ fontSize: 25 }}>
          {this.state.greeting}!!!
        </Text>
      </View>
    );
  }
  onButtonPress(greeting) {
    this.setState({
      greeting: greeting
    });
  }
}

AppRegistry.registerComponent('example', () => example);
