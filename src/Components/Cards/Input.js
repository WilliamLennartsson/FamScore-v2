import React, { Component } from 'react'
import { TextInput, View, Text } from 'react-native'

class Input extends Component {
  render() {
    return (
      <View style={[styles.containerStyle, this.props.style]}>
        <Text style={[styles.labelStyle, this.props.styleText]}>{this.props.label}</Text>
        <TextInput 
            secureTextEntry={this.props.secureTextEntry}
            placeholder={this.props.placeholder}
            autoCorrect={false}
            style={[styles.inputStyle, this.props.styleTextInput]}
            value={this.props.value}
            onChangeText={this.props.onChangeText}
        />
      </View>
    )
  }
}

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#000'
    }
}

export { Input }
