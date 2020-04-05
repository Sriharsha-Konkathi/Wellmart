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
// import { ProgressCircle } from "react-native-svg-charts";
import DropDown from "../components/dropDown";
import CustomCheckbox from "../components/checkbox";
import RightArrowNav from "../components/rightArrowNavigator";
import LeftArrowNav from "../components/leftArrowNavigator";

class HealthStatusScreen extends Component {
  static navigationOptions = {
    title: "HealthStatus Screen",
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
          title={"Health Status"}
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
          <View
            style={{
              flex: 1,
              borderColor: "gray",
              borderWidth: 1.5,
              borderRadius: 20,
              marginHorizontal: responsiveScreenWidth(3),
            }}
          >
            <ScrollView
              style={{
                margintop: 4,
                // marginVertical: 4,
                marginBottom: 45,
              }}
            >
              <View style={{ flex: 1, marginVertical: 12 }}>
                <InputField
                  label="Height(In cms)"
                  labelStyles={{
                    fontSize: 16,
                    width: 120,
                    alignSelf: "center",
                  }}
                  inputStyles={{ width: 70, fontSize: 16 }}
                  keyboardType="numeric"
                />
                <InputField
                  label="Weight(In lbs)"
                  labelStyles={{
                    fontSize: 16,
                    width: 120,
                    alignSelf: "center",
                  }}
                  inputStyles={{ width: 70, fontSize: 16 }}
                  keyboardType="numeric"
                />
              </View>
              <DropDown
                label="Activity Level"
                values={["Lethargic", "Moderate", "Active"]}
              />
              <View
                style={{
                  flexDirection: "row",
                  marginVertical: 15,
                  marginLeft: 20,
                  padding: 5,
                }}
              >
                <CustomCheckbox
                  label={"Genetic Disorders  "}
                  style={{ marginRight: 40 }}
                />
                <CustomCheckbox label={"Allergies"} />
              </View>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <InputField
                  label="BP Level"
                  labelStyles={{ fontSize: 16, width: 70, alignSelf: "center" }}
                  inputStyles={{ width: 50, fontSize: 16 }}
                  keyboardType="numeric"
                />
                <InputField
                  label="Blood Glucose"
                  labelStyles={{ fontSize: 16, width: 70, alignSelf: "center" }}
                  inputStyles={{ width: 50, fontSize: 16 }}
                  keyboardType="numeric"
                />
              </View>
              <View style={{ marginTop: 15, marginLeft: 20, padding: 5 }}>
                <CustomCheckbox label={"High Cholesterol"} />
              </View>
              <View style={{ marginLeft: 20, padding: 5 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Nutritional and Metabolic Disorders
                </Text>
                <View style={{ marginTop: 15 }}>
                  <CustomCheckbox
                    label={"Genetic Metabolic Disorder"}
                    textStyle={{ width: 220, fontSize: 16 }}
                  />
                </View>
              </View>
              <InputField
                label="Any known diseases"
                labelStyles={{
                  fontSize: 16,
                  width: 160,
                  alignSelf: "center",
                  textAlign: "left",
                }}
                inputStyles={{ width: 70, fontSize: 16 }}
                keyboardType="numeric"
              />
              <InputField
                label="Past treatments"
                labelStyles={{
                  fontSize: 16,
                  width: 160,
                  alignSelf: "center",
                }}
                inputStyles={{ width: 70, fontSize: 16 }}
                keyboardType="numeric"
              />
            </ScrollView>
          </View>
        </View>
        <RightArrowNav
          onPress={() => this.props.navigation.navigate("SocioEconomicStatus")}
        />
        <LeftArrowNav
          onPress={() => this.props.navigation.navigate("HomeScreen")}
        />
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

export default HealthStatusScreen;
