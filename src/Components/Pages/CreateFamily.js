import React, { Component } from '../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import { connect } from '../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-redux';
import { Actions } from 'react-native-router-flux';
import { View, ScrollView, LayoutAnimation } from 'react-native'
import { TextField } from '../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-native-material-textfield'
import { Dropdown } from 'react-native-material-dropdown'
import { Button } from '../src/components/MainMenu'
import { setFamily } from '../src/actions'

class CreateFamily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      familyName: '',
      password: '',
      familyMembers: [],
      numberOfMembers: 0,
    };
    this.createFamily = this.createFamily.bind(this);
    this.renderFields = this.renderFields.bind(this);
  }

  componentWillUpdate() {
    LayoutAnimation.spring()
  }

  createFamily() {
    const newFamilyArray = [];
    console.log('refs: ', this.refs)


    for (let i = 0; i < this.state.numberOfMembers; i++) {
      newFamilyArray.push({
        name: this.refs[`name${i}`].state.text,
        points: 0,
        isLoggedIn: false,
      })
    }
    console.log(newFamilyArray)

    this.setState({
      familyMembers: newFamilyArray
    });

    const bodyy = {
      familyName: this.state.familyName,
      password: this.state.password,
      familyMembers: newFamilyArray,
    }
    console.log('family bodyyy: ', bodyy)
    fetch('http://localhost:3000/families', {
      body: JSON.stringify(bodyy),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
      .then((response) => {
        return response.json();
      })
      .then(() => {
        this.props.setFamily(bodyy);
        Actions.LoginFamily_Key();
      })
  }

  renderFields() {
    console.log(this.state.familyMembers);
    const familyArray = [];
    const x = this.state.numberOfMembers;
    for (let i = 0; i < x; i++) {
      const famMemberReference = 'name' + i
      familyArray.push(<TextField
        label='Name'
        ref={famMemberReference}
        value={this.refs.name}
      />
      )
    }
    console.log(this.refs);
    return <View>{familyArray}</View>
  }

  render() {
    const { familyName, password, numberOfMembers } = this.state;

    const data = []

    // Add number of values to Dropdown
    for (let i = 0; i <= 10; i++) {
      data.push({ value: i })
    }

    return (
      <View style={styles.container}>

        <ScrollView>

          <TextField
            label='FamilyName'
            color='#000'
            baseColor='#000000'
            tintColor='#616161'
            value={familyName}
            onChangeText={value => this.setState({ familyName: value })}
          />

          <TextField
            label='Password'
            baseColor='#000'
            tintColor='#616161'
            secureTextEntry
            value={password}
            onChangeText={value => this.setState({ password: value })}
          />

          <Dropdown 
            label="Number of Members"
            baseColor='#000'
            tintColor='#8aae92'
            data={data}
            value={numberOfMembers}
            onChangeText={value => this.setState({ numberOfMembers: value })}
          />

          {this.renderFields()}

          <View style={styles.viewStyle}>
            <Button style={styles.buttonStyle} onPress={() => this.createFamily()}>Create Family</Button>
          </View>

          <View 
            style={{ margin: 20 }}
          />

        </ScrollView>
      </View>

    )
  }
}


const mapStateToProps = ({ familyReducer }) => {
  const { familyObject } = familyReducer

  return { familyObject }
}

export default connect(mapStateToProps, { setFamily })(CreateFamily)

const styles = {
  buttonStyle: {
    backgroundColor: '#f4f9f4',
    borderColor: '#000'
  },
  viewStyle: {
    height: 60,
    justifyContent: 'center'
  },
  container: {
    paddingLeft: 20,
    paddingRight: 20
  }
}
