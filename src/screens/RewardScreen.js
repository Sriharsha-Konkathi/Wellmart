import React, { Component } from "react";

import { Image, Text, View, ScrollView, StyleSheet } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import Footer from "../components/footer";
import Header from "../components/header";
import Button from "../components/button";
import InputField from "../components/inputField";
import { ProgressCircle } from "react-native-svg-charts";

class RewardScreen extends Component {
  static navigationOptions = {
    title: "RewardScreen Screen",
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
          title={"My Rewards"}
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
          <View>
            <View>
              <ProgressCircle
                style={{ height: 140 }}
                progress={0.72}
                progressColor={"#4472C4"}
                backgroundColor={"skyblue"}
                strokeWidth={8}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  width: 12,
                  height: 12,
                  backgroundColor: "#4472C4",
                  alignSelf: "center",
                  marginRight: 10,
                  marginLeft: 70,
                }}
              >
                <View />
              </View>
              <Text style={{ textAlign: "center", fontSize: 19 }}>
                Redeemed
              </Text>
              <View
                style={{
                  width: 12,
                  height: 12,
                  backgroundColor: "skyblue",
                  alignSelf: "center",
                  marginRight: 10,
                  marginLeft: 40,
                }}
              >
                <View />
              </View>
              <Text style={{ textAlign: "center", fontSize: 19 }}>
                Remaining
              </Text>
            </View>
            <View
              style={{
                marginHorizontal: responsiveScreenWidth(3),
                marginVertical: responsiveScreenHeight(1),
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={{ flex: 4, fontSize: 17 }}>
                  Total Reward Points
                </Text>
                <Text style={{ flex: 3, fontSize: 17 }}>: 1140</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ flex: 4, fontSize: 17 }}>
                  Remaining Reward Points
                </Text>
                <Text style={{ flex: 3, fontSize: 17 }}>: 375</Text>
              </View>
            </View>
            <Button
              title="Redeem"
              buttonStyle={[styles.buttonStyle]}
              textStyle={styles.textStyle}
              onPress={() => this.props.navigation.navigate("RewardScreen")}
            />
            <View style={{ marginHorizontal: responsiveScreenWidth(3) }}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: responsiveScreenFontSize(1.7),
                }}
              >
                You accrued reward points by availing a wide range of wellness
                products and services, details of which are given below
              </Text>
            </View>
          </View>
          <ScrollView
            style={{
              flex: 1,
              // marginHorizontal: responsiveScreenWidth(3),
              marginVertical: responsiveScreenHeight(2),
            }}
          >
            <View>
              <InputField
                label="Diet"
                labelStyles={{ alignSelf: "center", width: 250 }}
                inputStyles={{ width: 90, fontSize: 14, textAlign: "center" }}
                defaultText={"Y"}
              />
              <InputField
                label="Nutrition"
                labelStyles={{ alignSelf: "center", width: 250 }}
                inputStyles={{ width: 90, fontSize: 14, textAlign: "center" }}
                defaultText={"Y"}
              />
              <InputField
                label="Gym"
                labelStyles={{ alignSelf: "center", width: 250 }}
                inputStyles={{ width: 90, fontSize: 14, textAlign: "center" }}
                defaultText={"Y"}
              />
              <InputField
                label="Yoga"
                labelStyles={{ alignSelf: "center", width: 250 }}
                inputStyles={{ width: 90, fontSize: 14, textAlign: "center" }}
                defaultText={"Y"}
              />
              <InputField
                label="Personal Trainer"
                labelStyles={{ alignSelf: "center", width: 250 }}
                inputStyles={{ width: 90, fontSize: 14, textAlign: "center" }}
                defaultText={"Y"}
              />
              <InputField
                label="Co-branded plan for Healthy Food"
                labelStyles={{ alignSelf: "center", width: 250 }}
                inputStyles={{ width: 90, fontSize: 14, textAlign: "center" }}
                defaultText={"Y"}
              />
              <InputField
                label="Fitness center"
                labelStyles={{ alignSelf: "center", width: 250 }}
                inputStyles={{ width: 90, fontSize: 14, textAlign: "center" }}
                defaultText={"Y"}
              />
              <InputField
                label="Alternative Medicine"
                labelStyles={{ alignSelf: "center", width: 250 }}
                inputStyles={{ width: 90, fontSize: 14, textAlign: "center" }}
                defaultText={"Y"}
              />
              <InputField
                label="Weight Loss Counsellor"
                labelStyles={{ alignSelf: "center", width: 250 }}
                inputStyles={{ width: 90, fontSize: 14, textAlign: "center" }}
                defaultText={"Y"}
              />
              <InputField
                label="Home Healthcare"
                labelStyles={{ alignSelf: "center", width: 250 }}
                inputStyles={{ width: 90, fontSize: 14, textAlign: "center" }}
                defaultText={"Y"}
              />
              <InputField
                label="Ambulance Services"
                labelStyles={{ alignSelf: "center", width: 250 }}
                inputStyles={{ width: 90, fontSize: 14, textAlign: "center" }}
                defaultText={"Y"}
              />
              <InputField
                label="Private Duty Nursing"
                labelStyles={{ alignSelf: "center", width: 250 }}
                inputStyles={{ width: 90, fontSize: 14, textAlign: "center" }}
                defaultText={"Y"}
              />
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            backgroundColor: "#e6f5f1",
            top: responsiveScreenHeight(89.7),
            position: "absolute",
            right: responsiveScreenHeight(14.5),
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
  buttonStyle: {
    backgroundColor: "#e6f5f1",
    marginVertical: responsiveScreenHeight(2),
    borderWidth: 1.2,
    borderRadius: 15,
    paddingVertical: responsiveScreenHeight(1.1),
    width: responsiveScreenWidth(32),
    alignSelf: "center",
    justifyContent: "center",
    marginHorizontal: responsiveScreenHeight(3.5),
  },
  textStyle: {
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
    fontSize: responsiveScreenFontSize(2.25),
  },
  outerViewStyle: {
    flexDirection: "row",
    height: 35,
  },
  innerTextStyle: { flex: 4, fontSize: 18 },
});

export default RewardScreen;
