import {Dimensions, StyleSheet} from "react-native"
const device = Dimensions.get("window")
const styles = StyleSheet.create({
  
    container:{
        flex:1,
        margin:20,
    },
    ürünAd:{
        fontWeight:"bold",
        fontSize:18,
        color:"black"
    },
    adet:{
        textAlign:"center",
        marginTop:10,
        fontWeight:"bold",
        fontSize:20,
        color:"#ffa000"
    },
    no:{
        fontWeight:"bold"
    },
    fiyat:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize:15
    }
})

export default  styles