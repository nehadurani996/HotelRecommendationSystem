import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';
import { images } from '../constants';
const thanks=(navigation)=>{
return(
    <View style={{justifyContent:'center',alignItems:'center',marginTop:250}}>
        <Image
        source={images.tck2}
       
        style ={{
            width: 100,
            height: 100,
            alignItems:'center'
        }}
        >
        
        </Image>
        <Text style={{fontSize:20}}> Thank you so much</Text>
        <Text style={{fontSize:18}}>Your review has been submitted</Text>
    </View>
)
}  
export default thanks;