import React from "react";
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
import { min } from "react-native-reanimated";
import {icons,images,SIZES,FONTS,COLORS} from '../constants'
const info=({navigation})=>{
    const facility=[
        {
            id: 1,
            name: "Parking",
            icon: images.car,
        },
        {
            id: 2,
            name: "Breakfast",
            icon: images.Break,
        },
        {
            id: 3,
            name: "Wifi",
            icon: images.Wifi,
        },
        {
            id: 4,
            name: "AC",
            icon: images.AC,
        },
    ]
    const [categories, setCategories] = React.useState(facility)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }


    function renderHeader(navigation) {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={images.back}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                {/* Restaurant Name Section */}
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <View
                        style={{
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: SIZES.padding * 3,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.lightGray3
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>Tulip Hotel and Restaurant</Text>
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
                        source={icons.list}
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
    function renderBody() {
        return(
            <TouchableOpacity
           style={{ marginBottom: SIZES.padding * 2 }}>
            <View
                    style={{
                      marginTop:30,
                      marginLeft:10,
                      marginRight:10
                        
                    }}
                >
                    <Image
                        source={images.Tulip2}
                        resizeMode="cover"
                        y
                        style={{
                            width: "100%",
                            height: 350,
                            borderRadius: SIZES.radius
                            
                        }}
                    />
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>20 min far</Text>
                    </View>

                    </TouchableOpacity>    
                    
        )
    }
    
    function GetData() {
        return(
           <View>
            <View
            style={{
                width: SIZES.width,
                marginTop: 0,
                paddingHorizontal: SIZES.padding * 2
            }}
        >
            <Text style={{textAlign:"left", ...FONTS.h3}}>6000 PKRs </Text>
            <Text style={{textAlign:"left",marginTop:5}}>(0544) 652555 </Text>
            <Text style={{marginTop:30,fontSize:20}}>Hotel facilities</Text>
           
        </View>

     
       
        </View> )
    }
    function RenderList() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return(
            <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => `${item.id}`}
            renderItem={renderItem}

            contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
        />
        )
    }
return(
 <SafeAreaView>   
     {renderHeader()}
    {renderBody()}
   
    {GetData()}
    {RenderList()}
    </SafeAreaView>
)
}
const styles= StyleSheet.create({
    container:{
flex:1,
backgroundColor: COLORS.white

    },
    shadow:{
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:3,
        },
        shadowOpacity:0.1,
        shadowRadius:3,
        elevation:1,
    }
   
     
})
export default info;