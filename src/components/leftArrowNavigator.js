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

const LeftArrowNav = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.8}
      style={{
        position: "absolute",
        top: responsiveScreenHeight(83),
        position: "absolute",
        left: responsiveScreenWidth(6),
        height: responsiveScreenHeight(6.76),
        width: responsiveScreenHeight(9),
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <Entypo name="arrow-long-left" size={35} color="black" />
      <Text
        style={{
          fontSize: 16,
          marginHorizontal: 5,
          alignSelf: "center",
          fontStyle: "italic",
          fontWeight: "bold",
          color: "blue",
        }}
      >
        Back
      </Text>
    </TouchableOpacity>
  );
};

export default LeftArrowNav;
