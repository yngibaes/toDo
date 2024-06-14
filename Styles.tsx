import { StyleSheet, Dimensions } from 'react-native'

const Styles = StyleSheet.create({
    container: {
      width:'100%',
      padding: 20
    },
    title: {
      color: "white",
      textAlign: "center",
      fontSize: 25
    },
    text: {
      color: 'black',
      fontSize: 14,
      textAlign: 'center'
    },
    wtext: {
      color: 'white',
      fontSize: 14,
    },
    textInput: {
      borderColor: 'purple',
      borderRadius: 15,
      borderWidth: 1,
      width: Dimensions.get("screen").width*0.6,
      paddingLeft: 10
    },
    inputContainer: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
      width: Dimensions.get('screen').width*0.25,
      backgroundColor: 'purple',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15
    },
    tasksContainer: {
      marginTop: 5,
      paddingVertical: 20,
      borderBottomColor: 'purple',
      borderBottomWidth: 2,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    textCard:{
      fontSize: 20,
      color: 'black',
      fontWeight: 'bold'
    },
    textDone:{
      fontSize: 20,
      color: 'purple',
      textDecorationLine: 'line-through',
      fontWeight: 'bold'
    },
    removeBtn:{
      backgroundColor: '#CBC3E3',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
      borderRadius: 15
    }
})

export default Styles