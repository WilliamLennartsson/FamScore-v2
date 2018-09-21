import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Fonts } from '../src/utils/Fonts'

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.textContainerStyle}>
        <Text style={styles.textStyle}>Profile View...</Text>
        <Text style={styles.textStyle}>Make a Log Out button and pop all views and go back to the LoginFamily component</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    textContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 20,
        fontFamily: Fonts.amaticBold
    }
})
