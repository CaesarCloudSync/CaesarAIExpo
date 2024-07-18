import { FlatList, View,Text,Image } from 'react-native';

import { Link } from 'expo-router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MangaCover from '@/components/homecomponents/MangaCover';
import { mangatest } from '@/components/homecomponents/test';
import Header from '@/components/header/header';
import NavigationFooter from './footer';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNetInfo } from '@react-native-community/netinfo';
export default function Index() {
    return(
        <View>
            
        </View>
    )

}