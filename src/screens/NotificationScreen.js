import React, { Component } from "react";

import { Image, Text, View, ScrollView, StyleSheet } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import Footer from "../components/footer";

class NotificationScreen extends Component {
  static navigationOptions = {
    title: "NotificationScreen Screen",
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
        <Text style={{ fontSize: 50 }}>NotificationScreen Page</Text>
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

export default NotificationScreen;
