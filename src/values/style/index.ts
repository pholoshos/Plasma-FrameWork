import { StyleSheet, View } from 'react-native';

export const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    navbar_container : {
      flexDirection: 'column',    
        
    },
    navbar_children : {
      flexDirection: 'row'
    },
    navbar_child : {
      padding : 10,
      fontSize: 14
    },
    navbar_title : {
      fontWeight : 'bold',
      margin : 5
    }
  });

  