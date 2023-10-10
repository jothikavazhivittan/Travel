import  {Dimensions, StyleSheet } from 'react-native';
const {width} =Dimensions.get('window')
const styles=StyleSheet.create({
 card:{
  padding:4,
  borderWidth:1,
  borderColor:"#E2E2E2",
  borderRadius:15
 },
 image:{
    width: (width -96) /2,
    height:120,
    borderRadius:15
 },
 title:{
   fontSize:14,
   fontWeight:"500",
   color:"#000000",
   marginTop:12,
   marginLeft:6
 },
 subTitle:{
  fontSize:12,
  fontWeight:"400",
  color:"rgba(0,0,0,0.5)",
},
icon:{
  width:10,
  height:10,
  marginRight:6,
},
row:{
  marginBottom:12,
  marginLeft:6,
  marginTop:4,
  flexDirection:"row",
  alignItems:"center",
  },


})
export default styles