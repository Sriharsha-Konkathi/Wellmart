/* eslint-disable react-native/no-inline-styles */
import React, { PureComponent } from "react";
import { Image } from "react-native";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";

let location = require("../resources/images/logo.jpg");

const Logo = props => {
  return (
    <View>
      {props.location ? (
        <Image
          source={props.location}
          style={{
            width: responsiveScreenHeight(13),
            height: responsiveScreenHeight(13),
            resizeMode: "contain",
            overflow: "hidden"
            // borderRadius: 90 / 2
            // borderColor: "grey",
            // borderWidth: 1.5
          }}
        />
      ) : (
        <Image
          source={location}
          style={{
            width: responsiveScreenHeight(13),
            height: responsiveScreenHeight(13),
            resizeMode: "contain",
            overflow: "hidden"
            // borderRadius: 90 / 2
            // borderColor: "grey",
            // borderWidth: 1.5
          }}
        />
      )}
    </View>
  );
};

export default Logo;
