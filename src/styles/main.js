import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight +24,
        justifyContent: 'center',
        backgroundColor: '#edf2f7'
    },
    text: {
      textAlign: 'center',
      color: '#03a9e5',
      fontSize: 20,
    },
});