import React, { Component } from 'react'
import {
    ScrollView,
    View,
    StyleSheet,
    LayoutAnimation
} from 'react-native'
import { connect } from 'react-redux'
import { deleteItem, showAddMission } from '../../actions'
import ListItem from './ListItem'
import AddMission from '../AddMission/AddMission'
import AddCard from './AddCard'

class MissionList extends Component {
    componentWillUpdate() {
        //LayoutAnimation.spring()
    }

    renderList() {
        return this.props.list.map((item, index) => 
            <ListItem 
                key={index} 
                titleText={item.titleText}
                infoText={item.infoText}
                points={item.points} 
            />
        )
    }

    render() {
        return (
            <View style={[styles.viewStyle, this.props.visible ? { opacity: 0.3 } : '']}>

                <ScrollView style={styles.scrollViewStyle}>

                    <AddCard onPress={this.props.showAddMission} />

                    {this.renderList()}

                    <AddMission />

                    <View style={{ height: 20, opacity: 0 }} />

                </ScrollView>

            </View>
        )
    }
}

const mapStateToProps = ({ listReducer }) => {
    const { list, visible } = listReducer
  
    return { list, visible }
}
  
export default connect(mapStateToProps, { deleteItem, showAddMission })(MissionList)

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1
    },
    scrollViewStyle: {
        backgroundColor: '#f4f9f4'
    }
})
