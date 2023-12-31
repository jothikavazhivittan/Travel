import { StyleSheet } from "react-native";
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    map: {
      width: '100%',
      height: '100%',
  },
  header: {
      position: 'absolute',
      top: 40,
      backgroundColor: 'white',
      borderRadius: 15,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      width: - 48,
      padding: 16,
      margin: 24,
  },
  title: {
      fontSize: 20,
      color: '#000',
  },
  back: {
      width: 20,
      height: 20,
      marginRight: 16,
  }
});

export default styles;

