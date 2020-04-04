/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";

import Logo from "../components/logo";
import {
  responsiveScreenHeight,
  responsiveScreenWidth
} from "react-native-responsive-dimensions";

const Header = props => {
  return (
    <View
      style={{
        flexDirection: "row",
        zIndex: 1
        // backgroundColor: "red"
        // height: 120
      }}
    >
      {/* <TouchableOpacity
        onPress={props.onPress}
        activeOpacity={0.8}
        style={{
          backgroundColor: "yellow",
          position: "absolute"
        }}
      >
        <Image
          source={require("../resources/images/arrows/baseline_arrow_back_black_48.png")}
          style={{
            width: 45,
            height: 30,
            alignSelf: "center"
          }}
        />
      </TouchableOpacity> */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Logo />
        {props.title ? (
          <Text style={styles.title}>{props.title}</Text>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: responsiveScreenHeight(3.38),
    fontWeight: "bold",
    textAlign: "center",
    width: responsiveScreenWidth(100)
  }
});

export default Header;
