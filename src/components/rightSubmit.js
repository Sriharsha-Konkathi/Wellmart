import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  SimpleLineIcons,
  Entypo,
} from "@expo/vector-icons";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

const RightSubmit = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.8}
      style={{
        position: "absolute",
        top: responsiveScreenHeight(83.7),
        position: "absolute",
        right: responsiveScreenWidth(5.7),
        height: responsiveScreenHeight(5.3),
        width: responsiveScreenHeight(9.5),
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          backgroundColor: "#e6f5ff",
          padding: 2.5,
          paddingHorizontal: 3.5,
          width: responsiveScreenWidth(16),
          borderRadius: 5,
          borderWidth: 1.3,
          borderColor: "grey",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 1,
          shadowRadius: 2.0,
          elevation: 5,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          Submit
        </Text>
      </View>
      {/* <Entypo name="arrow-long-right" size={35} color="black" /> */}
    </TouchableOpacity>
  );
};

export default RightSubmit;
