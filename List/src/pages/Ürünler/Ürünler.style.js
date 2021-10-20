import {Dimensions, StyleSheet} from "react-native"
const device = Dimensions.get("window")
const styles = StyleSheet.create({
  
    category:{
        flex:1,
        backgroundColor:"white",
        margin:10,
        marginBottom:10,
        padding:15,
        borderRadius:10,
        flexDirection:"column",

    },
    inner_container:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between"
        
    },
    fiyat:{
        fontWeight:"bold",
        color:"#ffa000"
    },
    ürün:{
        fontWeight:"bold",
        fontSize:15,
        color:"black"
    },
    adet:{
        fontWeight:"600",
        color:"black"
    }
})

export default  styles
