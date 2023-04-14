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

const Home =({ navigation }) => {
   
    //DUMMY DATA 
    const initialCurrentLocation = {
        streetName: "Jhelum",
        gps: {
            latitude:32.9425,
            longitude: 73.725556
           
        }
    }
const categoryData = [
        {
            id: 1,
            name: "Top rated",
            icon: icons.Star,
        },
        {
            id: 2,
            name: "Nearby",
            icon: images.nearby,
        },
        {
            id: 3,
            name: "Budget",
            icon: images.mastercard,
        },
        {
            id: 4,
            name: "Filter",
            icon: images.list,
        }]
// PRICE 
    const affordable = 1
    const fairPrice = 2
    const expensive = 3


 const restaurantData = [
        {
            id: 1,
            name: "Tulip River Side Hotel and Resturants",
            rating: 3.8,
            categories :[1],
            priceRating: affordable,
            photo: images.Tulip,
            distance:"5-10 mins",
            location: {
                latitude: 32.9074,
                longitude: 73.7307,
            }
        
        },
    
      { 
        id: 2,
        name: "Rohtas Resort & Recreation",
        rating: 4.7,
        categories :[1],
        priceRating: affordable,
        photo: icons.Rohtas,
        distance:"21-15 mins",
        location: {
            latitude: 33.1680,
            longitude: 73.6421,
        }},
        {
            id: 3,
            name: "Mirpur Apartments & Hotel",
            rating: 4.9,
            categories :[1,2],
            priceRating: affordable,
            photo: images.Mir,
            distance:"2-mins",
            location: {
                latitude: 32.9074,
                longitude: 73.7307,
            }
        
        },
        {
            id: 4,
            name: "Al Bilal Hotel &Restaurant",
            rating: 4,
            categories :[1,2,3],
            priceRating: affordable,
            photo: images.Bilal,
            distance:"6 mins",
            location: {
                latitude: 32.9074,
                longitude: 73.7307,
            }
        
        },
    
    
      
    
    ]
        const [categories, setCategories] = React.useState(categoryData)
        const [selectedCategory, setSelectedCategory] = React.useState(null)
        const [restaurants, setRestaurants] = React.useState(restaurantData)
        const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)
        function onSelectCategory(category) {
            //filter restaurant
            let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))
    
            setRestaurants(restaurantList)
    
            setSelectedCategory(category)
        }
    
 
        function getCategoryNameById(id) {
            let category = categories.filter(a => a.id == id)
    
            if (category.length > 0)
                return category[0].name
    
            return ""
        }
    
 
 
        function renderHeader(){
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.navigate("Filter")
                     }
                >
                    <Image
                        source={icons.filter}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
    
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '90%',
                            height: "90%",
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                      <TextInput style = {styles.input}
                       underlineColorAndroid="transparent"
                        placeholder = "Enter location"
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
                        source={images.search}
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
        function renderMainCategories() {
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
    
            return (
                <View style={{ padding: SIZES.padding * 2 }}>
                    <Text style={{ ...FONTS.h1 }}>Main</Text>
                <Text style={{ ...FONTS.h1 }}>Categories</Text>
               
                    <View
                     style={{
                         marginTop:10,
                    borderBottomColor:'black',
                    borderBottomWidth: 1,
  }}
/>
                    

                    <FlatList
                        data={categories}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => `${item.id}`}
                        renderItem={renderItem}
                        contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                    />
                </View>
            )
        }
    
    
    function renderRestaurantList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate("info", {
                    item,
                    currentLocation
                })}
            >
                {/* Image */}
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />
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
                        <Text style={{ ...FONTS.h4 }}>{item.distance}</Text>
                    </View>
                </View>
                   
               

                {/* Restaurant Info */}
                <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    {/* Rating */}
                    <Image
                        source={icons.Star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

                    {/* Categories */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        
                        {/* Price */}
                        {
                            [1, 2, 3].map((priceRating) => (
                                <Text
                                    key={priceRating}
                                    style={{
                                        ...FONTS.body3,
                                        color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray
                                    }}
                                >$</Text>
                            ))
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }
  return(
<SafeAreaView style={styles.container}>
    {renderHeader()}
   {renderMainCategories()}
   {renderRestaurantList()}
     
</SafeAreaView>)
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
export default Home;