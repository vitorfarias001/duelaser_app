import { StyleSheet,Dimensions } from 'react-native';
import Constants from 'expo-constants';

let CIRCLE_RADIUS = 15;
const width = Dimensions.get("window").width;


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
      buttonTryReconect: {
        borderRadius: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F39200',
        padding: 5,
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 15,
        paddingBottom: 15,
        margin: 50,
        fontFamily: 'Mulish',
      },
      TextTryReconect: {
        color: 'white',
        fontSize: width * 0.034,
        fontFamily: 'Mulish',
        
      },
});
