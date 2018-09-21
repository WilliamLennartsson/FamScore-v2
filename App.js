import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router } from './src/Components/Router'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Bror hund kusin</Text>
        <Router/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
