import React, { Component } from "react";

import { Image, Text, View, ScrollView, StyleSheet } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";

class ProfileScreen extends Component {
  static navigationOptions = {
    title: "Profile Screen",
    maxLength: 400,
    headerShown: false
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: responsiveScreenHeight(2.5),
          alignItems: "center",
          marginLeft: responsiveScreenHeight(2),
          backgroundColor: "white"
        }}
      >
        <Text style={{ fontSize: 50 }}>Profile Page</Text>
      </View>
    );
  }
}

export default ProfileScreen;
