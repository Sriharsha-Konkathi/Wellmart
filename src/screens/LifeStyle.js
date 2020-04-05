import React, { Component } from "react";

import { Image, Text, View, ScrollView, StyleSheet } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import Footer from "../components/footer";
import Header from "../components/header";
import DropDown from "../components/dropDown";
import CustomCheckbox from "../components/checkbox";
import RightArrowNav from "../components/rightArrowNavigator";
import LeftArrowNav from "../components/leftArrowNavigator";

class LifeStyle extends Component {
  static navigationOptions = {
    title: "LifeStyle Screen",
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
          title={"Life Style"}
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
              <View style={{ marginVertical: 15, marginLeft: 25 }}>
                <CustomCheckbox
                  label={"Smoking :"}
                  textStyle={{ width: 170, fontSize: 16 }}
                />
              </View>
              <DropDown
                label="Alcohol Consumption"
                values={["Low", "Medium", "High"]}
                style={{ width: 170 }}
              />
              <DropDown
                label="Drug Usage"
                values={["Low", "Medium", "High"]}
                style={{ width: 170 }}
              />
            </ScrollView>
          </View>
        </View>
        <LeftArrowNav
          onPress={() => this.props.navigation.navigate("EnvironmentalStatus")}
        />
        <RightArrowNav
          onPress={() => this.props.navigation.navigate("FoodHabits")}
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

export default LifeStyle;
