import React ,{Component} from 'react';
import {View,Image} from 'react-native';
var bg=require('../assets/images/ABC.gif');
export default class Splash extends Component{
    constructor(props){
        super(props);
        setTimeout(()=>{
            this.props.navigation.navigate("Home");
        },7000);
    }
    render(){
        return(
<Image source={bg}
style={{
    height:'100%',
    width:'100%'
}
}
>

</Image>
        );
    }
}
