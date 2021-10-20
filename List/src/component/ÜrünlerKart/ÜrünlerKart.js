import React from "react";
import {SafeAreaView, View,Text,TouchableWithoutFeedback} from "react-native";
import styles from "./ÜrünlerKart.style"
const ÜrünlerKart = ({ürün,onSelect}) =>{
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={{flex:1,backgroundColor:"yellow"}}>
                     <Text>{ürün.ürünAdı}</Text>
                     <Text>{ürün.ürünFiyat}</Text>
                     <Text>{ürün.ürünAdet}</Text>
                     
            </View>
                    
                    
               
            
        </TouchableWithoutFeedback>
    )
}

export default ÜrünlerKart