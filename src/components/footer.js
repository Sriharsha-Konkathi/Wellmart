import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";

import Logo from "../components/logo";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";

const Footer = props => {
  return (
    <View
      style={[
        props.style,
        {
          position: "absolute",
          bottom: 0,
          zIndex: 1,
          alignItems: "center",
          justifyContent: "center",
          height: responsiveScreenHeight(9.5),
          width: responsiveScreenWidth(100),
          flexDirection: "row"
        }
      ]}
    >
      <View
        style={{
          margin: responsiveScreenHeight(1.3),
          marginHorizontal: responsiveScreenHeight(1.95),
          marginLeft: 0,
          marginBottom: 0
        }}
      >
        <TouchableOpacity
          onPress={props.onPressHome}
          activeOpacity={0.8}
          style={{
            height: responsiveScreenHeight(6.5),
            width: responsiveScreenHeight(6.5)
          }}
        >
          <Image
            source={require("../resources/images/icons/HomeIcon.png")}
            style={{
              width: responsiveScreenHeight(5.85),
              height: responsiveScreenHeight(5.85),
              alignSelf: "center"
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          margin: responsiveScreenHeight(1.3),
          marginHorizontal: responsiveScreenHeight(1.95),
          marginBottom: 0
        }}
      >
        <TouchableOpacity
          onPress={props.onPressProfile}
          activeOpacity={0.8}
          style={{
            height: responsiveScreenHeight(6.5),
            width: responsiveScreenHeight(6.5)
          }}
        >
          <Image
            source={require("../resources/images/icons/ProfileIcon.png")}
            style={{
              width: responsiveScreenHeight(5.85),
              height: responsiveScreenHeight(5.85),
              alignSelf: "center"
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          margin: responsiveScreenHeight(1.3),
          marginHorizontal: responsiveScreenHeight(1.95),
          marginBottom: 0
        }}
      >
        <TouchableOpacity
          onPress={props.onPressBell}
          activeOpacity={0.8}
          style={{
            height: responsiveScreenHeight(6.5),
            width: responsiveScreenHeight(6.5)
          }}
        >
          <Image
            source={require("../resources/images/icons/Bellicon.png")}
            style={{
              width: responsiveScreenHeight(5.85),
              height: responsiveScreenHeight(5.85),
              alignSelf: "center"
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          margin: responsiveScreenHeight(1.3),
          marginHorizontal: responsiveScreenHeight(1.95),
          marginBottom: 0
        }}
      >
        <TouchableOpacity
          onPress={props.onPressReward}
          activeOpacity={0.8}
          style={{
            height: responsiveScreenHeight(6.5),
            width: responsiveScreenHeight(6.5)
          }}
        >
          <Image
            source={require("../resources/images/icons/RewardsIcon.png")}
            style={{
              width: responsiveScreenHeight(5.85),
              height: responsiveScreenHeight(5.85),
              alignSelf: "center"
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          margin: responsiveScreenHeight(1.3),
          marginHorizontal: responsiveScreenHeight(1.95),
          marginBottom: 0,
          marginRight: 0
        }}
      >
        <TouchableOpacity
          onPress={props.onPressSetting}
          activeOpacity={0.8}
          style={{
            height: responsiveScreenHeight(6.5),
            width: responsiveScreenHeight(6.5)
          }}
        >
          <Image
            source={require("../resources/images/icons/Settings.png")}
            style={{
              width: responsiveScreenHeight(5.85),
              height: responsiveScreenHeight(5.85),
              alignSelf: "center"
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
