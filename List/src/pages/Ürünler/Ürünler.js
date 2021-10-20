import React,{useState,useEffect}from "react";
import { SafeAreaView,Text,FlatList,TouchableOpacity, View} from "react-native";
import database from "@react-native-firebase/database"
import ÜrünlerKart from "../../component/ÜrünlerKart"
import styles from "./Ürünler.style"

const Ürünler = ({navigation}) =>{
    const [ürünler, setÜrünler] = useState([]);
    React.useEffect(()=>{
        database().ref("Ürünler/").on("value",snapshot=>{
            const contentData=snapshot.val()
          
            
            setÜrünler(contentData)
            

        })

    },[])
    
    console.log(ürünler)
    function goDetail(item){
        navigation.navigate("ÜrünlerDetay",item)
    }
    function renderItem({ item }) {
        return (<View>
            <TouchableOpacity style={styles.category} onPress={()=>goDetail(item)}>
            <Text style={styles.ürün}>{item.ürünAdı}</Text>
            <View style={styles.inner_container}>
                <Text style={styles.adet}>{item.ürünAdet}  adet</Text>
                <Text style={styles.fiyat}>{item.ürünFiyat}</Text>
            </View>
            </TouchableOpacity> 
            </View>)
    }
  
    
    return(
        
            <FlatList data={ürünler} renderItem={renderItem} keyExtractor={key => key.id}/>
            
        
    )
}

export default Ürünler