import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

class CardSection extends Component {
  render() {
    return (
      <View style={[styles.containerStyle, this.props.style]}>
        {this.props.children}
      </View>
    )
  }
}

export { CardSection }

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
})
