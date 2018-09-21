import React, { Component } from 'react'
import { View, Modal, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import { showAddReward, addReward } from '../../actions'
import { Input, Button } from '../MainMenu'
import { Fonts } from '../../utils/Fonts'


class AddReward extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rewardTitle: '',
            rewardDescription: '',
            points: 0
        }
    }

    onRewardTitleChange(text) {
        console.log('text:', text);
        console.log('State: ', this.state)
        
        this.setState({
            rewardTitle: text
        })
    }

    onRewardDescriptionChange(text) {
        this.setState({
            rewardDescription: text
        })
    }

    onPointsChange(pointsProvided) {
        this.setState({
            points: pointsProvided
        })
    }

    onAddRewardClick() {
        console.log('onAddRewardClick Clicked!');
        
        if (this.state.rewardTitle === '' || this.state.rewardDescription === '' || this.state.points === 0) {
            return
        }

        this.props.addReward({
            points: this.state.points,
            titleText: this.state.rewardTitle,
            infoText: this.state.rewardDescription
        })

        this.setState({
            rewardTitle: '',
            rewardDescription: '',
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
                alert('New Reward Created!')
            }}
        >
            <View style={styles.viewStyle}>
                <Text style={styles.topText}>Add New Reward!</Text>

                <View style={styles.inputContainerStyle}>
                    <Input 
                        style={styles.inputStyle} 
                        label="Title: " 
                        placeholder="Title" 
                        styleText={styles.styleTextStyle}
                        onChangeText={this.onRewardTitleChange.bind(this)} 
                    />
                </View>

                <View style={styles.inputContainerStyle}>
                    <Input 
                        style={styles.inputStyle} 
                        label="Price: " 
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
                        onChangeText={this.onRewardDescriptionChange.bind(this)} 

                    />
                </View>
                
                <View style={styles.buttonContainerStyle}>
                    <Button style={styles.buttonStyle} onPress={this.onAddRewardClick.bind(this)} >Add</Button>
                    <Button style={styles.buttonStyle} onPress={() => this.props.showAddReward(false)} >Cancel</Button>
                </View>
            </View>
        </Modal>
  
      </View>
    )
  }
}

const mapStateToProps = ({ rewardsReducer }) => {
    const { visible } = rewardsReducer
    const { points, titleText, infoText } = rewardsReducer.rewardsList
  
    return { visible, points, titleText, infoText }
}

export default connect(mapStateToProps, { showAddReward, addReward })(AddReward)

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
