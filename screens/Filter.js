import React from "react";
import {useState} from 'react';
import RadioForm, {
  RadioButton, 
  RadioButtonInput, 
  RadioButtonLabel
} from 'react-native-simple-radio-button';
import {
     SafeAreaView,
     View , 
     Text,
     StyleSheet,
     TouchableOpacity,
     Image,
     FlatList,
     TextInput
} from "react-native";
import Slider from '@react-native-community/slider';
import {icons,images,SIZES,FONTS,COLORS} from '../constants'

const Filter=()=>
{

   function renderHeader(){
        return(
            <View style={{ padding: SIZES.padding * 2 }}>
             <Text style={{ ...FONTS.h1 ,textAlign:'center'}}>Filters </Text>
</View>

        )
    }
    function renderMain(){
        return(
           
                <View style={{ flexDirection: 'row', height:50 }}>
        
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View
                            style={{
                                width: '90%',
                                height: "100%",
                                backgroundColor: COLORS.lightGray3,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: SIZES.radius,
                                marginTop:0

                            }}
                        >
                          <TextInput style = {styles.input}
                           underlineColorAndroid="transparent"
                            placeholder = "Sort By                            less/grater"
                            placeholderTextColor="black"
                            autoCapitalize = "none"
                            
                   />
                        </View>
                    </View>
        
                    <TouchableOpacity
                        style={{
                            width: 50,
                            paddingRight: SIZES.padding * 2,
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={images.Drop}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </TouchableOpacity>
                   
      </View> 
               
        )
    }
  function RenderSlider() {
    const [sliderValue, setSliderValue] = useState(15);
    return(
        
        <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={{textAlign:'left',marginTop:40,fontSize:18,marginLeft:40}}>Price Range                            {sliderValue}-Rs</Text>
       
        {/*Slider with max, min, step and initial value*/}
        <Slider
        style={{marginTop:30,marginRight:20,marginLeft:20}}
          maximumValue={10000}
          minimumValue={0}
          minimumTrackTintColor={COLORS.primary}
          maximumTrackTintColor={COLORS.darkgray}
          thumbTintColor={COLORS.primary}
          step={1000}
          value={sliderValue}
          onValueChange={
            (sliderValue) => setSliderValue(sliderValue)
          }
        />
       
      </View>
    </SafeAreaView>
      )
  }
  function TextReturn() {
    return(
      <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>

      <Text style={{textAlign:'left',marginTop:150,fontSize:18,marginLeft:40}}>What level of popularuity you want?</Text>
</View></SafeAreaView>
    )
  }
  function RenderButtons(){
    var ratings = [
        {label: "Low           ", value: 0},
        {label: "Medium           ", value: 1},
        {label: "High", value: 2},
      ];
      return(
        
        <View style={{marginTop:200,width:100,justifyContent:'space-between',marginLeft:10}}>
           
        <RadioForm
       
          radio_props={ratings}
          initial={0}
          buttonSize={20}
          buttonOuterSize={30}
          selectedButtonColor={COLORS.primary}
          selectedLabelColor={COLORS.primary}
          disabled={false}
          formHorizontal={true}
        />
      </View>
      )
  }
  function TextReturn2(){
  return(
    <SafeAreaView style={{flex: 1}}>
    <View style={styles.container}>

    <Text style={{textAlign:'left',marginTop:30,fontSize:18,marginLeft:40}}>Select number of rooms needed?</Text>
</View></SafeAreaView>)
  }
  function rendrbtn2() {
    var bedRooms = [
      {label: "One           ", value: 0},
      {label: "Two           ", value: 1},
      {label: "More", value: 2},
    ];
    return(
      
      <View style={{marginTop:100,width:100,justifyContent:'space-between',marginLeft:10}}>
         
      <RadioForm
     
        radio_props={bedRooms}
        initial={0}
        buttonSize={20}
        buttonOuterSize={30}
        selectedButtonColor={COLORS.primary}
        selectedLabelColor={COLORS.primary}
        disabled={false}
        formHorizontal={true}
      />
    </View>
    )
  }
 return(
    <SafeAreaView style={styles.container}>
{renderHeader()}
{renderMain()}
{RenderSlider()}
{TextReturn()}
{RenderButtons()}
{TextReturn2()}
{rendrbtn2()}

</SafeAreaView>
 )
}
const styles= StyleSheet.create({
    container:{
    
     backgroundColor:COLORS.white,

    }
     
})
export default Filter;
