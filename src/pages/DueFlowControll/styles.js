import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

let CIRCLE_RADIUS = 15;

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight +24,
        justifyContent: 'center',
        backgroundColor: '#edf2f7',
    },
    text: {
      textAlign: 'center',
      color: '#808388',
      fontSize: 20,
    },
    circle: {
        backgroundColor: "#edf2f7",
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS
      },
      super: {
        padding: 30,
        height: '100%',
      },
      alert:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
      }
});
