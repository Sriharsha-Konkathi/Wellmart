import React, { Component } from "react";

import { Image, Text, View, ScrollView, StyleSheet } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import Header from "../components/header";
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
          //   marginLeft: responsiveScreenHeight(2),
          backgroundColor: "white"
        }}
      >
        <Header
          onPress={() => this.props.navigation.goBack()}
          title={"My Notifications"}
        />
        <View
          style={{
            flex: 1,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: responsiveScreenHeight(8.45)
          }}
        >
          <Text style={{ fontSize: responsiveScreenHeight(3.25) }}>
            No Notifications Yet !!!
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#e6f5f1",
            bottom: responsiveScreenHeight(0.74),
            position: "absolute",
            right: responsiveScreenWidth(43.8),
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

export default NotificationScreen;
