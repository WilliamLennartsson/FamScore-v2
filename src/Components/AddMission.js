import React, { Component } from 'react'
import { View, Modal, StyleSheet, Text, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { showAddMission, addMission } from '../../actions'
import { Input, Button } from '../MainMenu'
import { Fonts } from '../../utils/Fonts'


class AddMission extends Component {
    constructor(props) {
        super(props)

        this.state = {
            missionTitle: '',
            missionDescription: '',
            points: 0
        }
    }

    onMissionTitleChange(text) {
        console.log('text:', text);
        console.log('State: ', this.state)

        this.setState({
            missionTitle: text
        })
    }

    onMissionDescriptionChange(text) {
        this.setState({
            missionDescription: text
        })
    }

    onPointsChange(pointsProvided) {
        this.setState({
            points: pointsProvided
        })
    }

    onAddMissionClick() {
        console.log('onAddMissionClick Clicked!');

        if (this.state.missionTitle === '' || this.state.missionDescription === '' || this.state.points === 0) {
            return
        }

        this.props.addMission({
            points: (+this.state.points),
            titleText: this.state.missionTitle,
            infoText: this.state.missionDescription
        })

        this.setState({
            missionTitle: '',
            missionDescription: '',
            points: 0
        })
    }

  render() {
    return (
      <View>
        <Modal
            animationType="slide"
            transparent={true}
            visible={this.props.visible}
            onRequestClose={() => {
                alert('New Mission Created!')
            }}
        >
            <View style={styles.viewStyle}>
                <Text style={styles.topText}>Add New Mission!</Text>

                <View style={styles.inputContainerStyle}>
                    <Input
                        style={styles.inputStyle}
                        label="Title: "
                        placeholder="Title"
                        styleText={styles.styleTextStyle}
                        onChangeText={this.onMissionTitleChange.bind(this)}
                    />
                </View>

                <View style={styles.inputContainerStyle}>
                    <Input
                        style={styles.inputStyle}
                        label="Points: "
                        placeholder="Points"
                        styleText={styles.styleTextStyle}
                        onChangeText={this.onPointsChange.bind(this)}

                    />
                </View>

                <View style={styles.inputContainerStyle}>
                    <Input
                        style={styles.inputStyle}
                        label="Description: "
                        placeholder="Description"
                        styleText={styles.styleTextStyle}
                        onChangeText={this.onMissionDescriptionChange.bind(this)}

                    />
                </View>

                <View style={styles.buttonContainerStyle}>
                    <Button style={styles.buttonStyle} onPress={this.onAddMissionClick.bind(this)} >Add</Button>
                    <Button style={styles.buttonStyle} onPress={() => this.props.showAddMission(false)} >Cancel</Button>
                </View>
            </View>
        </Modal>

      </View>
    )
  }
}

const mapStateToProps = ({ listReducer }) => {
    const { visible } = listReducer
    const { points, titleText, infoText } = listReducer.list

    return { visible, points, titleText, infoText }
}

export default connect(mapStateToProps, { showAddMission, addMission })(AddMission)

const styles = StyleSheet.create({
    viewStyle: {
        height: 400,
        width: '90%',
        alignSelf: 'center',
        marginTop: 120,
        marginBottom: 20,
        paddingTop: 30,
        paddingBottom: 30,
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#000',
        backgroundColor: '#f4f9f4'
    },
    buttonContainerStyle: {
        flex: 2,
        alignItems: 'center',
        flexDirection: 'row',
        margin: 10
    },
    buttonStyle: {
        height: 60,
        width: 100,
        borderColor: '#000'
    },
    inputContainerStyle: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#000',
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 3,
        paddingBottom: 3,
        borderRadius: 5,
        margin: 5,
        backgroundColor: 'white'
    },
    inputStyle: {
        flex: 1
    },
    styleTextStyle: {
        fontFamily: Fonts.amaticBold,
        fontSize: 20,
        margin: 0
    },
    topText: {
        fontSize: 30,
        fontFamily: Fonts.amaticBold,
        alignSelf: 'center',
        margin: 5
    }
})
