import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 20,
    borderRadius: 20,
    padding: 20,
    borderColor: '#00aeef',
    borderWidth: 2,

  },
  Text1: {
    color: '#E3EFFB',
    fontSize: width * 0.07,
    padding: 5,
    textAlign: 'center',
    marginRight: 180,
    marginTop: -120,
    fontFamily: 'Mulish',

  },
  Text2: {
    color: '#E3EFFB',
    fontSize: width * 0.04,
    padding: 5,
    textAlign: 'center',
    marginTop: -50,
    fontFamily: 'Mulish',

  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00aeef',
    margin: 20,
    borderRadius: 10,
    height: 50,
  },
  camera: {
    flex: 1,

  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  textHome: {
    textAlign: 'center',
    color: 'white',
    fontSize: width * 0.07,
    fontFamily: 'Mulish',
    zIndex:20,
    top:20,
    
  },
  textHome2: {
    color: '#E3EFFB',
    fontSize: width * 0.04,
    padding: 5,
    textAlign: 'center',
    fontFamily: 'Mulish',
    zIndex:20,
    top:20,
  },
  buttonCicle: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    minWidth: 100,
    padding: 10,
  },
  buttonContent: {
    padding: 10,
  },
  leftcircleo: {

  },
  downcircleo: {

  },
  rightcircleo: {

  },
  dotcircle: {

  },
  electron: {

  },
  deleted: {

  },
  border: {
    borderWidth: 2,
    borderColor: '#00aeef',
    borderRadius: 40,
    alignItems: 'center',
    padding: 5,
  },
  bordermessage: {
    color: '#9A9A9A',
    fontSize: 20,
    fontFamily: 'Mulish',
  },
  buttonDueIt: {
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00aeef',
    padding: 5,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 15,
    paddingBottom: 15,
    margin: 50,
    fontFamily: 'Mulish',
  },
  TextDueIt: {
    color: 'white',
    fontSize: width * 0.04,
    fontFamily: 'Mulish',
  },
  ModalButton: {
    borderRadius: 25,
    padding: 10,
    backgroundColor: '#F39200',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'Mulish',
  },
  AlertIcon: {
    position: 'relative',
    marginRight: 120,
    marginTop: -30,
    marginBottom: 22,
  },
  Atention: {
    fontSize: width * 0.07,
    marginRight: -70,
    position: 'relative',
    marginTop: -110,
    color: '#F39200',
    marginBottom: 22,
    fontFamily: 'Mulish',
  },
  Title1: {
    fontSize: width * 0.06,
    position: 'relative',
    marginTop: -75,
    textAlign: 'center',
    fontFamily: 'Mulish',
  },
  MidleText: {
    position: 'relative',
    textAlign: 'center',
    fontSize: width * 0.04,
    marginTop: -65,
    margin: 8,
    fontFamily: 'Mulish',

  },
  MidleText2: {
    position: 'relative',
    textAlign: 'center',
    marginTop: -40,
    fontSize: width * 0.04,
    color: 'red',
    fontFamily: 'Mulish',
  },
  EndText2: {
    position: 'relative',
    textAlign: 'center',
    fontSize: width * 0.04,
    marginTop: -30,
    fontFamily: 'Mulish',
  },
  Text3: {
    position: 'relative',
    textAlign: 'center',
    fontSize: width * 0.06,
    marginTop: -30,
    margin: 8,
    fontFamily: 'Mulish',

  },
  TextA: {
    position: 'relative',
    textAlign: 'left',
    fontSize: width * 0.04,
    marginTop: -40,
    fontFamily: 'Mulish',
  },
  TextB: {
    position: 'relative',
    textAlign: 'left',
    fontSize: width * 0.04,
    marginTop: -30,
    fontFamily: 'Mulish',
  },
  TextC: {
    position: 'relative',
    textAlign: 'left',
    fontSize: width * 0.04,
    marginTop: -20,
    fontFamily: 'Mulish',
  },
  BibliotecaTitle: {
    textAlign: 'center',
    color: '#E3EFFB',
    position: 'relative',
    fontSize: width * 0.07,
    marginRight: 180,
    marginTop: 110,
    marginBottom: 50,
    fontFamily: 'Mulish',
  },
  BibliotecaTitle2: {
    textAlign: 'center',
    color: '#E3EFFB',
    fontSize: width * 0.05,
    marginRight: 30,
    marginBottom: -30,
    fontFamily: 'Mulish',
  },
  MaterialListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '86%',
    alignItems: 'center',
    borderBottomColor: '#333',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  borderBiblioteca: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#00aeef',
    borderRadius: 40,
    alignItems: 'center',
    margin: 15,
    padding: 5
  },
  TextTrocar: {
    marginBottom:13,
    color:'#fff',
    fontSize: width * 0.04,
    fontFamily: 'Mulish',
  },
});
export default styles;