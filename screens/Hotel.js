import React,{Component} from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker,Heatmap } from 'react-native-maps';

import { COLORS, FONTS, icons, SIZES, GOOGLE_API_KEY, images } from "../constants"
function renderButtons() {
    return (
        <View
            style={{
                position: 'absolute',
                bottom: SIZES.height * 0.35,
                right: SIZES.padding * 2,
                width: 60,
                height: 130,
                justifyContent: 'space-between'
            }}
        >
            {/* Zoom In */}
            <TouchableOpacity
                style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    backgroundColor: COLORS.lightGray,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={() => zoomIn()}
            >
                <Text style={{ ...FONTS.body1 }}>+</Text>
            </TouchableOpacity>

            {/* Zoom Out */}
            <TouchableOpacity
                style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    backgroundColor: COLORS.lightGray,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={() => zoomOut()}
            >
                <Text style={{ ...FONTS.body1 }}>-</Text>
            </TouchableOpacity>
        </View>

    )
}
function renderDestinationHeader() {
    return (
        <View
            style={{
                position: 'absolute',
                top: 50,
                left: 0,
                right: 0,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: SIZES.width * 0.9,
                    paddingVertical: SIZES.padding,
                    paddingHorizontal: SIZES.padding * 2,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.white
                }}
            >
                <Image
                    source={images.pin}
                    style={{
                        width: 30,
                        height: 30,
                        marginRight: SIZES.padding
                    }}
                />

                <View style={{ flex: 1 }}>
                    <Text style={{ ...FONTS.body3 }}>Jhelum</Text>
                </View>

            </View>
        </View>
    )
}
export default class Hotel extends Component{
    static navigationOptions = {
        title: 'New York',
      };
    
      state = {
        initialPosition: {
            latitude:32.9425,
            longitude: 73.725556,
          latitudeDelta: 0.09,
          longitudeDelta: 0.035
        }
      }
    
      points = [
        { latitude: 32.9074, longitude: 73.7307, weight: 1 },
        { latitude: 33.1680,longitude: 73.6421, weight: 1 },
        { latitude:32.9668 ,longitude:73.6953, weight: 1 },
        { latitude:32.9599 ,longitude:73.7006, weight: 1 },

        
      ];
    
      render() {
        return (
          <View style={styles.container}>
            <MapView
              provider={PROVIDER_GOOGLE}
              ref={map => this._map = map}
              style={styles.map}
              initialRegion={this.state.initialPosition}>
              <Heatmap
                points={this.points}
                radius={40}
                opacity={1}
                gradient={{
                  colors: ["black", "purple", "red", "orange", "white"],
                  startPoints: Platform.OS === 'ios' ? [0.01, 0.04, 0.1, 0.45, 0.5] :
                    [0.1, 0.25, 0.5, 0.75, 1],
                  colorMapSize: 2000
                }}
              >
              </Heatmap>
            </MapView>
            {renderButtons()}
            {renderDestinationHeader()}
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        ...StyleSheet.absoluteFillObject
      },
      map: {
        ...StyleSheet.absoluteFillObject
      }
    });