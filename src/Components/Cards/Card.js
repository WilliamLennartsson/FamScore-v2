import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

class Card extends Component {
  render() {
    return (
      <View style={[styles.containerStyle, this.props.style]}>
        {this.props.children}
      </View>
    )
  }
}

export { Card }

const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        borderRadius: 12,
        backgroundColor: '#eccfd1',
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
})
