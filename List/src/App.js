import React from "react";
import {SafeAreaView,Text} from "react-native"
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Ürünler from "./pages/Ürünler"
import ÜrünlerDetay from "./pages/ÜrünlerDetay"
const Stack = createNativeStackNavigator()
function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Ürünler" component={Ürünler} />
        <Stack.Screen name="ÜrünlerDetay" component={ÜrünlerDetay} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App