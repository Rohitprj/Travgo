import { View, Text } from 'react-native'
import React from 'react'
import {Drawer} from "expo-router/drawer"
import { Feather } from '@expo/vector-icons';

export default function _layout() {
  return (
    <Drawer
    screenOptions={{
        // drawerIcon:()=><Feather name="moon" size={24} color="green" />
    }}
    />
  )
}

