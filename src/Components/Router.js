import React, { Component } from 'react';
import { Scene, Router, Tabs, Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import MainMenu from './Pages/MainMenu';
import MissionList from './Pages/MissionList';
import CreateFamily from './Pages/CreateFamily';
import ShowRewards from './Pages/ShowRewards';
import LoginFamily from './Pages/LoginFamily'
import Profile from './Pages/Profile'


import { Fonts } from '../utils/Fonts'

class RouterComponent extends Component {

  render() {
    const activeIconColor = '#c4e3cb'
    const iconColor = '#f4f9f4'

    return (
      <Router navigationBarStyle={styles.sceneStyle} titleStyle={styles.titleStyle} tintColor={'white'} backButtonTextStyle={styles.backButtonTextStyle}>
        <Scene key="root" hideNavBar>

          <Scene key="main" >
            <Scene key="LoginFamily_Key" component={LoginFamily} title='Login to your family' initial />
            <Scene key='CreateFamily_Key' component={CreateFamily} title='Create Family' />

            <Tabs
              hideNavBar
              showLabel={true}
              lazy={true}
              tabStyle={styles.tab}
              tabBarStyle={styles.tabBar}
              labelStyle={styles.label}
              swipeEnabled={false}
            >

              <Scene
                key='Family_Key'
                component={MainMenu}
                title='Family'
                initial
                on={Actions.refresh}
                icon={({ focused }) => (
                  <Icon
                    size={25}
                    color={focused ? activeIconColor : iconColor}
                    type='simple-line-icon'
                    name={'heart'}
                    text='Home'
                    textStyle={focused ? [styles.label, styles.activeLabel] : styles.label}
                  />
                )}
              />

              <Scene
                key='Missions_Key'
                component={MissionList}
                title='Missions'
                icon={({ focused }) => (
                  <Icon
                    size={25}
                    color={focused ? activeIconColor : iconColor}
                    type='simple-line-icon'
                    name='pin'
                    text='Missions'
                    textStyle={focused ? [styles.label, styles.activeLabel] : styles.label}
                  />
                )}
              />

              <Scene
                key='Rewards_Key'
                component={ShowRewards}
                title='Rewards'
                icon={({ focused }) => (
                  <Icon
                    size={25}
                    color={focused ? activeIconColor : iconColor}
                    type='simple-line-icon'
                    name='badge'
                    text='Rewards'
                    textStyle={focused ? [styles.label, styles.activeLabel] : styles.label}
                  />
                )}
              />

              <Scene
                key='Profile_Key'
                component={Profile}
                title='Profile'
                icon={({ focused }) => (
                  <Icon
                    size={25}
                    color={focused ? activeIconColor : iconColor}
                    type='simple-line-icon'
                    name='user'
                    text='Profile'
                    textStyle={focused ? [styles.label, styles.activeLabel] : styles.label}
                  />
                )}
              />

            </Tabs>

          </Scene>

        </Scene>

      </Router>
    )
  }
}

export default RouterComponent

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    width: '100%',
    backgroundColor: '#616161',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#000'
  },
  tab: {
    color: '#c4e3cb',
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'center',
  },
  activeLabel: {
    fontFamily: Fonts.amaticBold,
    color: '#c4e3cb',
    textDecorationLine: 'underline'
  },
  label: {
    fontSize: 20,
    fontFamily: Fonts.amaticBold,
    color: '#f4f9f4'
  },
  iconColor: {
    color: '#f4f9f4'
  },
  sceneStyle: {
    backgroundColor: '#616161',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2
  },
  titleStyle: {
    fontSize: 30,
    color: 'white',
    fontFamily: Fonts.amaticBold
  },
  backButtonTextStyle: {
    color: '#616161'
  },
  backButtonIconStyle: {
    tintColor: 'white'
  },
  rightButtonViewStyle: {
    paddingRight: 15,
    paddingBottom: 10
  },
  rightButtonStyle: {
    fontSize: 50,
    color: 'white',
    zIndex: 10,
    marginRight: 15,
    padding: 0,
    height: 50,
    width: 50,
    borderRadius: 50 / 2
  }
})
