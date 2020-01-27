import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React, { Component } from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Tab1 from './app/Tab1'
import Icon from 'react-native-vector-icons/FontAwesome';
import Tab3 from './app/Tab3'
import Tab2 from './app/Tab2'

import React from 'react';
import {MultiBar, MultiBarToggle} from 'react-native-multibar';

import {Bookmarks, Likes, Private, Profile, Settings} from "../components";
import {Routes} from "./Routes";

const TabsNavigator = createBottomTabNavigator({
    'Tab1': {
        screen: Tab1,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="bookmark"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },

    MultiBar: {
        screen: () => null,
        navigationOptions: ({navigation}) => ({
            tabBarIcon: () => (
                <MultiBarToggle
                    navigation={navigation}
                    actionSize={30}
                    routes={[
                        {
                            routeName: 'Tab3',
                            color: '#FF8360',
                            icon: (
                                <Icon
                                    name="rocket"
                                    color="#333333"
                                    size={15}
                                />
                            )
                        },
                        {
                            routeName: "jj",
                            color: '#E8E288',
                            icon: (
                                <Icon
                                    name="dashboard"
                                    color="#333333"
                                    size={15}
                                />
                            )
                        },
                        {
                            routeName: "bb",
                            color: '#7DCE82',
                            icon: (
                                <Icon
                                    name="gears"
                                    color="#333333"
                                    size={15}
                                />
                            )
                        },
                    ]}
                    icon={(
                        <Icon
                            name="plus"
                            color="#FFFFFF"
                            size={24}
                        />
                    )}
                />
            )
        }),
        params: {
            navigationDisabled: true
        }
    },

    'Tab2': {
        screen: Tab2,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="user"
                    color={tintColor}
                    size={24}
                />
            )
        })
    }
}, {
    tabBarComponent: MultiBar,
    tabBarOptions: {
        showLabel: false,
        activeTintColor: '#F8F8F8',
        inactiveTintColor: '#586589',
        style: {
            backgroundColor: '#171F33'
        },
        tabStyle: {}
    }
});

const BaseNavigatorContainer = createAppContainer(createStackNavigator({
    'Tabs': TabsNavigator,
    'Tab3': Tab3
}, {
    headerMode: 'none'
}));

export {BaseNavigatorContainer as BaseNavigator};