import React from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, Text } from "react-native";
import Modal from "react-native-modal";
import LinearGradient from "react-native-linear-gradient";
import StarRating from "react-native-star-rating";
import TextArea from "@freakycoder/react-native-text-area";
import { COLORS } from "../constants";
import { NavigationContainer } from '@react-navigation/native';
import thanks from "./thanks";
const   Locations = props => {
  const { starRating, onStarRatingPress,navigation } = props;
  return (
    <View
        style={{
        
          marginTop:200,
          height: 325,
          width: "90%",
          borderRadius: 16,
          alignSelf: "center",
          justifyContent: "center",
          backgroundColor: "transparent"
        }}
      >
        <View
          style={{
            height: "100%",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-around"
          }}
        >
          <Text style={{color: COLORS.black, fontSize: 18 }}>
            How was your experience?
          </Text>
          <View style={{ marginRight: 7 }}>
            <StarRating
           maxStars={5}
           starSize={30}
           disabled={false}
           animation="jello"
           rating={starRating}
           fullStarColor="#FC6D3F"
           emptyStarColor="#FC6D3F"
           starStyle={{ marginLeft: 8 }}
           selectedStar={rating => onStarRatingPress(rating)}
            />
          </View>
          <TextArea
            maxCharLimit={50}
            placeholderTextColor="black"
            exceedCharCountColor="red"
            placeholder={"Write your review..."}
            style={{ height: 150, borderRadius: 20 }}
          />
          <TouchableOpacity
            style={{
              height: 50,
              width: "95%",
              borderRadius: 16,
              backgroundColor: "transparent"
            }}
           onPress={()=>navigation.navigate('thanks')}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                height: 50,
                width: "100%",
                borderRadius: 16,
                alignContent: "center",
                justifyContent: "center"
              }}
              colors={["#FC6D3F", "#FE6A4F"]}
            >
              <Text
                style={{ color: "white", fontSize: 16, textAlign: "center" }}
              >
                Submit
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
  )
};

Locations.propTypes = {
  stars: PropTypes.number,
  ratings: PropTypes.string
};

Locations.defaultProps = {
  stars: 5,
  ratings: "Hellooo"
};

export default Locations;
