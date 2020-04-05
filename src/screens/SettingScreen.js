import React, { Component } from "react";

import { Image, Text, View, ScrollView, StyleSheet } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import Footer from "../components/footer";
import Header from "../components/header";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  SimpleLineIcons,
} from "@expo/vector-icons";

class SettingScreen extends Component {
  static navigationOptions = {
    title: "SettingScreen Screen",
    maxLength: 400,
    headerShown: false,
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: responsiveScreenHeight(2.5),
          alignItems: "center",
          //   marginLeft: responsiveScreenHeight(2),
          backgroundColor: "white",
        }}
      >
        <Header
          onPress={() => this.props.navigation.goBack()}
          title={"Settings"}
        />
        <View
          style={{
            flex: 1,
            // backgroundColor: "skyblue",
            marginBottom: responsiveScreenHeight(7.5),
            alignSelf: "center",
            width: responsiveScreenWidth(100),
          }}
        >
          <ScrollView
            style={{
              flex: 1,
              marginHorizontal: responsiveScreenWidth(3),
              marginVertical: responsiveScreenHeight(2),
            }}
          >
            <View style={styles.outerViewStyle}>
              <View style={styles.iconViewStyle}>
                <MaterialCommunityIcons
                  name="account-edit"
                  size={styles.iconSize}
                  color={styles.iconColor.color}
                />
              </View>

              <Text style={styles.textStyle}>Account Settings</Text>
            </View>
            <View style={styles.outerViewStyle}>
              <View style={styles.iconViewStyle}>
                <FontAwesome
                  name="globe"
                  size={styles.iconSize}
                  color={styles.iconColor.color}
                />
              </View>
              <Text style={styles.textStyle}>Change Country</Text>
            </View>
            <View style={styles.outerViewStyle}>
              <View style={styles.iconViewStyle}>
                <FontAwesome
                  name="language"
                  size={styles.iconSize}
                  color={styles.iconColor.color}
                />
              </View>
              <Text style={styles.textStyle}>Change Language</Text>
            </View>
            <View style={styles.outerViewStyle}>
              <View style={styles.iconViewStyle}>
                <Ionicons
                  name="md-notifications"
                  size={styles.iconSize}
                  color={styles.iconColor.color}
                />
              </View>
              <Text style={styles.textStyle}>Notifications</Text>
            </View>
            <View style={styles.outerViewStyle}>
              <View style={styles.iconViewStyle}>
                <MaterialIcons
                  name="subscriptions"
                  size={styles.iconSize}
                  color={styles.iconColor.color}
                />
              </View>
              <Text style={styles.textStyle}>Subscription Settings</Text>
            </View>
            <View style={styles.outerViewStyle}>
              <View style={styles.iconViewStyle}>
                <FontAwesome
                  name="legal"
                  size={styles.iconSize}
                  color={styles.iconColor.color}
                />
              </View>
              <Text style={styles.textStyle}>Legal & About</Text>
            </View>
            <View style={styles.outerViewStyle}>
              <View style={styles.iconViewStyle}>
                <MaterialCommunityIcons
                  name="account-switch"
                  size={styles.iconSize}
                  color={styles.iconColor.color}
                />
              </View>
              <Text style={styles.textStyle}>Switch Accounts</Text>
            </View>
            <View style={styles.outerViewStyle}>
              <View style={styles.iconViewStyle}>
                <MaterialCommunityIcons
                  name="logout"
                  size={styles.iconSize}
                  color={styles.iconColor.color}
                />
              </View>
              <Text style={styles.textStyle}>Logout</Text>
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            backgroundColor: "#e6f5f1",
            top: responsiveScreenHeight(89.7),
            position: "absolute",
            right: responsiveScreenHeight(3.9),
            height: responsiveScreenHeight(6.76),
            width: responsiveScreenHeight(6.76),
            alignSelf: "flex-end",
            borderRadius: responsiveScreenHeight(100),
            borderColor: "grey",
            borderWidth: 1,
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

const styles = StyleSheet.create({
  textStyle: {
    marginHorizontal: responsiveScreenWidth(2),
    alignSelf: "center",
    fontSize: responsiveScreenFontSize(2.3),
  },
  outerViewStyle: {
    flexDirection: "row",
    marginVertical: responsiveScreenHeight(1),
    borderColor: "#e6f5f1",
    borderWidth: responsiveScreenWidth(0.56),
    borderRadius: responsiveScreenWidth(4),
    padding: responsiveScreenWidth(1.25),
  },
  iconViewStyle: { width: responsiveScreenWidth(9) },
  iconSize: responsiveScreenWidth(7.5),
  iconColor: { color: "green" },
});

export default SettingScreen;
