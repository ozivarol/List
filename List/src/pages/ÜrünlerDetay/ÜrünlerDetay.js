import React,{useEffect} from "react";
import { SafeAreaView,Text,View,TouchableOpacity,Button} from "react-native";
import database from '@react-native-firebase/database';
import styles from "./ÜrünlerDetay.style";
import Icon  from "react-native-vector-icons/MaterialCommunityIcons";
const ÜrünlerDetay = (props) =>{
    const { seriNo,ürünAdı,ürünFiyat,ürünAdet} = props.route.params
    function handleplus(item){
        database().ref(`Ürünler/1`).update({ürünAdet:ürünAdet+1})

    }
    function handleminus(item){
        database().ref(`Ürünler/1`).update({ürünAdet:ürünAdet-1})

    }
    return(
        
            <View style={styles.container}>
                <View style={styles.inner_container}>
                    <Text style={styles.ürünAd}>{ürünAdı}</Text>
                    <Text style={styles.no}>{seriNo}</Text>
                    <Text style={styles.fiyat}>{ürünFiyat}</Text>
                </View>    
                
                
                <View>
                  <Text style={styles.adet}>{ürünAdet}</Text>
                 <TouchableOpacity onPress={handleplus}>
                  
                    <Icon name="plus" color="#ffa000" size={30}/>
                  

                 </TouchableOpacity>
                    
                    
                </View>
                <TouchableOpacity onPress={handleminus}>
                  
                    <Icon name="minus" color="#ffa000" size={30} />
                  

                 </TouchableOpacity>
               
            </View>    
        
    )
}

export default ÜrünlerDetay