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
import RightSubmit from "../components/rightSubmit";

class PerHealthAssess extends Component {
  static navigationOptions = {
    title: "PerHealthAssess Screen",
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
          title={"Personal Health Assessment"}
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
            <View style={{ marginTop: 15 }}>
              <InputField
                label="Your Weight (in lbs.)"
                labelStyles={{
                  fontSize: 16,
                  width: 160,

                  alignSelf: "center",
                  textAlign: "left",
                }}
                inputStyles={{ width: 150, fontSize: 16 }}
                keyboardType="numeric"
                defaultText={"170"}
              />
              <InputField
                label="Total Caloric Intake (in kcal)"
                labelStyles={{
                  fontSize: 16,
                  width: 160,
                  alignSelf: "center",
                  textAlign: "left",
                }}
                inputStyles={{ width: 150, fontSize: 16 }}
                keyboardType="numeric"
                defaultText={"2100"}
              />
              <InputField
                label="BMI"
                labelStyles={{
                  fontSize: 16,
                  width: 160,
                  alignSelf: "center",
                  textAlign: "left",
                }}
                inputStyles={{ width: 150, fontSize: 16 }}
                keyboardType="numeric"
                defaultText={"29.30"}
              />
            </View>
            <ScrollView
              style={{
                margintop: 4,
                // marginVertical: 4,
                marginBottom: 45,
              }}
            >
              <View>
                <View style={styles.outerViewStyle}>
                  <Text style={styles.innerTextStyle}>
                    Potential Deficiencies
                  </Text>
                </View>
                <View style={styles.innerViewStyle}>
                  <Text>1. Iron Deficiency</Text>
                  <Text>2. Vitamin C deficiency</Text>
                  <Text>3. Iodine deficiency</Text>
                </View>
              </View>
              <View>
                <View style={styles.outerViewStyle}>
                  <Text style={styles.innerTextStyle}>
                    Potential Dietary Risks
                  </Text>
                </View>
                <View style={styles.innerViewStyle}>
                  <Text>1. High Sugar Diet</Text>
                  <Text>2. High Protein Diet</Text>
                </View>
              </View>
              <View>
                <View style={styles.outerViewStyle}>
                  <Text style={styles.innerTextStyle}>
                    Potential Disease Risks
                  </Text>
                </View>
                <View style={styles.innerViewStyle}>
                  <Text>1. Anemia</Text>
                  <Text>2. Cholera</Text>
                  <Text>3. Diarrhea</Text>
                </View>
              </View>
              <View>
                <View style={styles.outerViewStyle}>
                  <Text style={styles.innerTextStyle}>
                    Potential Hygiene Risks
                  </Text>
                </View>
                <View style={styles.innerViewStyle}>
                  <Text>1. Contaminated Water</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
        <LeftArrowNav
          onPress={() => this.props.navigation.navigate("FoodHabits")}
        />
        <RightSubmit
          onPress={() => this.props.navigation.navigate("PersonalIntervension")}
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
    borderColor: "black",
    borderWidth: 1,
    width: 160,
    height: 25,
    justifyContent: "center",
    left: 40,
    marginTop: 15,
    opacity: 1,
    backgroundColor: "white",
    zIndex: 2,
  },
  innerViewStyle: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,
    marginHorizontal: 12,
    padding: 12,
    marginTop: -12,
  },
  innerTextStyle: { fontWeight: "bold", textAlign: "center" },
});

export default PerHealthAssess;
