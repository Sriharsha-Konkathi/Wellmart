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
import DropDown from "../components/dropDown";
import CustomCheckbox from "../components/checkbox";
import RightArrowNav from "../components/rightArrowNavigator";
import LeftArrowNav from "../components/leftArrowNavigator";

class SocioEconomicStatus extends Component {
  static navigationOptions = {
    title: "SocioEconomicStatus Screen",
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
          title={"Socio Economic Status"}
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
              <View style={{ marginTop: 10 }}>
                <DropDown
                  label="Ethnicity "
                  values={[
                    "White",
                    "African American",
                    "Asian or Pacific Islander",
                    "Latino",
                    "Native American",
                  ]}
                />
              </View>
              <DropDown
                label="Income "
                values={[
                  "Poor (> $2/day)",
                  "Low Income ($2 - $10/day)",
                  "Medium Income",
                  "Upper-middle Income",
                  "High Income",
                ]}
              />
              <DropDown
                label="Education Level"
                values={[
                  "Uneducated",
                  "High School",
                  "College Degree",
                  "Post Graduate Degree",
                  "Doctorate",
                ]}
              />
              <DropDown
                label="Housing Condition "
                values={[
                  "Subsidized",
                  "Old Age Home",
                  "Rented Accommodation",
                  "Self Owned House",
                ]}
              />
              <View
                style={{
                  marginVertical: 12,
                  marginLeft: 25,
                  // padding: 5,
                }}
              >
                <CustomCheckbox
                  label={"Availability of Groceries Nearby:"}
                  textStyle={{ width: 250, fontSize: 16 }}
                />
                <CustomCheckbox
                  label={"Access to healthcare:"}
                  textStyle={{ width: 250, fontSize: 16 }}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    width: 300,
                    marginBottom: 5,
                    marginLeft: 15,
                    color: "black",
                  }}
                >
                  Occupation of
                </Text>
                <View>
                  <DropDown
                    label="Father"
                    values={[
                      "Unemployeed",
                      "Labourer",
                      "Self-Employed",
                      "Employee",
                    ]}
                  />
                  <DropDown
                    label="Mother"
                    values={[
                      "House-Wife",
                      "Labourer",
                      "Self-Employed",
                      "Employee",
                    ]}
                  />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    width: 300,
                    marginBottom: 5,
                    marginLeft: 15,
                    color: "black",
                  }}
                >
                  Education of
                </Text>
                <View>
                  <DropDown
                    label="Father"
                    values={[
                      "Uneducated",
                      "High School",
                      "College Degree",
                      "Post Graduate Degree",
                      "Doctorate",
                    ]}
                  />
                  <DropDown
                    label="Mother"
                    values={[
                      "Uneducated",
                      "High School",
                      "College Degree",
                      "Post Graduate Degree",
                      "Doctorate",
                    ]}
                  />
                </View>
              </View>
              <DropDown
                label="Family Structure "
                values={[
                  "Single Parent",
                  "Both Parents",
                  "Joint Family",
                  "Primary Care Taker",
                  "Orphan",
                ]}
                style={{
                  fontSize: 18,
                  marginLeft: -10,
                  marginRight: 10,
                  // width: 150,
                  justifyContent: "center",
                }}
              />
            </ScrollView>
          </View>
        </View>
        <LeftArrowNav
          onPress={() => this.props.navigation.navigate("HealthStatusScreen")}
        />
        <RightArrowNav
          onPress={() => this.props.navigation.navigate("EnvironmentalStatus")}
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

export default SocioEconomicStatus;
