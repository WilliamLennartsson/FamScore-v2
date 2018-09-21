import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import { Card, Button } from '../MainMenu/index'
import { setAdmin } from '../../actions'

import { Fonts } from '../../utils/Fonts'

class RewardCard extends Component {

    componentWillMount() {
        this.props.setAdmin(true)
    }

    renderIfAdmin() {
        if (this.props.isAdmin) {
            return (
                <Button style={styles.buttonStyle}>Edit</Button>
            )
        }

        return
    }

    render() {
        return (
            <View style={styles.viewStyle}>
                
                <Card style={styles.cardStyle}>
                    <View style={styles.cardItemsStyle}>

                        <View style={{ justifyContent: 'center' }}>
                            <View style={styles.pointViewStyle}>
                                <Text style={styles.pointTextStyle} adjustsFontSizeToFit >{this.props.points}</Text>
                            </View>
                        </View>

                        <View>

                            <View style={styles.titleContainerStyle} >
                                <Text style={styles.titleStyle}>{this.props.titleText}</Text>
                            </View>

                            <View style={styles.infoContainerStyle}>
                                <Text style={styles.infoStyle}>{this.props.infoText}</Text>
                            </View>

                            <View style={styles.cardButtonContainerStyle} >
                                {this.renderIfAdmin()}
                                <Button style={styles.buttonStyle}>Redeem!</Button>
                            </View>

                        </View>

                    </View>
                </Card>

            </View>
        )
    }
}

const mapStateToProps = ({ rewardsReducer }) => {
    const { isAdmin } = rewardsReducer

    return { isAdmin }
}

export default connect(mapStateToProps, { setAdmin })(RewardCard)

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: '#f4f9f4',
        marginBottom: 10
    },
    scrollViewStyle: {
        paddingTop: 25
    },
    cardButtonContainerStyle: {
        flex: 2,
        alignItems: 'center',
        flexDirection: 'row'
    },
    titleContainerStyle: {
        width: 'auto',
        height: 'auto',
        borderColor: '#000',
        borderBottomWidth: 1
    },
    titleStyle: {
        fontSize: 25,
        alignSelf: 'center',
        fontFamily: Fonts.amaticBold
    },
    infoStyle: {
        fontSize: 18,
        alignSelf: 'center',
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        fontFamily: Fonts.indieFlower
    },
    infoContainerStyle: {
        width: 150
    },
    cardStyle: {
        backgroundColor: '#c4e3cb',
        borderColor: '#000',
        borderWidth: 2,
        flex: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 1,
        paddingTop: 10,
        paddingBottom: 10
    },
    cardSectionStyle: {
        borderColor: '#000'
    },
    pointViewStyle: {
        width: 100,
        height: 100,
        margin: 3,
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 100 / 2,
        backgroundColor: '#616161',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 4
    },
    pointTextStyle: {
        fontSize: 35,
        alignSelf: 'center',
        color: 'white',
        fontFamily: Fonts.amaticBold
    },
    cardItemsStyle: {
        flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    buttonStyle: {
        backgroundColor: '#f4f9f4',
        borderColor: '#000',
        fontFamily: Fonts.amaticBold,
        marginLeft: 3,
        marginRight: 3
    }
})
