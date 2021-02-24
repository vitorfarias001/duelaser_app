import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React, { useEffect } from 'react';
import {View} from 'react-native';

import Routes from './src/routes';
import DatabaseInit from './src/database/database-init';
import {useFonts} from 'expo-font';



export default function App() {

  const [loaded] = useFonts({
    // eslint-disable-next-line global-require
    'Mulish': require('./src/assets/fonts/Mulish.ttf')
  }); 

  console.log("Due Laser App Init");

  new DatabaseInit;

  if(!loaded) return null

  return <Routes/>
}