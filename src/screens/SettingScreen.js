import React, { Component } from "react";

import { Image, Text, View, ScrollView, StyleSheet } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import Footer from "../components/footer";
import Header from "../components/header";

class SettingScreen extends Component {
  static navigationOptions = {
    title: "SettingScreen Screen",
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
          //   marginLeft: responsiveScreenHeight(2),
          backgroundColor: "white"
        }}
      >
        <Header
          onPress={() => this.props.navigation.goBack()}
          title={"Settings"}
        />
        <View
          style={{
            backgroundColor: "#e6f5f1",
            bottom: responsiveScreenHeight(1),
            position: "absolute",
            right: responsiveScreenHeight(3.9),
            height: responsiveScreenHeight(6.76),
            width: responsiveScreenHeight(6.76),
            alignSelf: "flex-end",
            borderRadius: responsiveScreenHeight(100),
            borderColor: "grey",
            borderWidth: 1
          }}
        >
          <View />
        </View>
        <Footer
          onPressHome={() => this.props.navigation.navigate("HomeScreen")}
          onPressProfile={() => this.props.navigation.navigate("ProfileScreen")}
          onPressBell={() =>
            this.props.navigation.navigate("NotificationScreen")
          }
          onPressReward={() => this.props.navigation.navigate("RewardScreen")}
          onPressSetting={() => this.props.navigation.navigate("SettingScreen")}
        />
      </View>
    );
  }
}

export default SettingScreen;
