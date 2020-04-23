import React, { Component } from "react";

import {
  Image,
  Dimensions,
  Text,
  View,
  ScrollView,
  StyleSheet,
} from "react-native";
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
import ProfileIcon from "../components/profileIcons";
// import { LineChart, Grid } from "react-native-svg-charts";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

class PersonalWellnessRec extends Component {
  static navigationOptions = {
    title: "PersonalWellnessRec Screen",
    maxLength: 400,
    headerShown: false,
  };
  render() {
    const data = [50, 45, 65, 55, 61, 45, 53, 54, 50];

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
          title={"Personal Wellness Recommendation"}
          style={{ fontSize: 18 }}
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
              borderBottomColorColor: "gray",
              borderBottomWidth: 1.2,
              marginHorizontal: responsiveScreenWidth(3),
              marginBottom: 5,
            }}
          >
            <View style={{ marginTop: 10, padding: 16, paddingTop: 20 }}>
              <Text style={{ fontSize: 18 }}>
                Hi <Text style={{ fontWeight: "bold" }}>John!</Text> Please
                choose a wellness service to get a personalized recommendation
              </Text>
            </View>
            <ScrollView
              style={{
                margintop: 4,
                // marginVertical: 4,
                marginBottom: 45,
              }}
            >
              <View
                style={{
                  paddingHorizontal: 20,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                }}
              >
                <View style={styles.innerViewStyle}>
                  <ProfileIcon
                    source={require("../resources/images/Dietician.jpg")}
                  />
                  <Text style={styles.innerTextStyle}>Dietician</Text>
                </View>
                <View style={styles.innerViewStyle}>
                  <ProfileIcon
                    source={require("../resources/images/Nutritionist.png")}
                  />
                  <Text style={styles.innerTextStyle}>Nutritionist</Text>
                </View>
                <View style={styles.innerViewStyle}>
                  <ProfileIcon
                    source={require("../resources/images/PersonalTrainer.png")}
                  />
                  <Text style={styles.innerTextStyle}>Personal Trainer</Text>
                </View>
                <View style={styles.innerViewStyle}>
                  <ProfileIcon
                    source={require("../resources/images/Yoga.png")}
                  />
                  <Text style={styles.innerTextStyle}>Yoga Instructor</Text>
                </View>
                <View style={styles.innerViewStyle}>
                  <ProfileIcon
                    source={require("../resources/images/Gym.png")}
                  />
                  <Text style={styles.innerTextStyle}>Gym</Text>
                </View>
                <View style={styles.innerViewStyle}>
                  <ProfileIcon
                    source={require("../resources/images/WeightLossCounsellor.png")}
                  />
                  <Text style={styles.innerTextStyle}>
                    Weight Loss Counsellor
                  </Text>
                </View>
                <View style={styles.innerViewStyle}>
                  <ProfileIcon
                    source={require("../resources/images/AlternativeMedicine.jpg")}
                  />
                  <Text style={styles.innerTextStyle}>
                    Alternative Medicine
                  </Text>
                </View>
                <View style={styles.innerViewStyle}>
                  <ProfileIcon
                    source={require("../resources/images/FitnessCenter.jpg")}
                  />
                  <Text style={styles.innerTextStyle}>Fitness Center</Text>
                </View>
                <View style={styles.innerViewStyle}>
                  <ProfileIcon
                    source={require("../resources/images/Cobranded.jpg")}
                  />
                  <Text style={styles.innerTextStyle}>
                    Co-branded Plan for Healthy Food
                  </Text>
                </View>
                <View style={styles.innerViewStyle}>
                  <ProfileIcon
                    source={require("../resources/images/homehealthcare.png")}
                  />
                  <Text style={styles.innerTextStyle}>Home Healthcare</Text>
                </View>
                <View style={styles.innerViewStyle}>
                  <ProfileIcon
                    source={require("../resources/images/Ambulanceservices.jpg")}
                  />
                  <Text style={styles.innerTextStyle}>Ambulance Services</Text>
                </View>
                <View style={styles.innerViewStyle}>
                  <ProfileIcon
                    source={require("../resources/images/privatedutynursing.png")}
                  />
                  <Text style={styles.innerTextStyle}>
                    Private Duty Nursing
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
        <LeftArrowNav onPress={() => this.props.navigation.goBack()} />
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
    width: responsiveScreenWidth(60),
    alignSelf: "center",
    justifyContent: "center",
    marginHorizontal: responsiveScreenHeight(3.5),
    shadowOffset: {
      width: 2,
      height: 40,
    },
    shadowOpacity: 1,
    shadowRadius: 20.0,
    elevation: 7,
  },
  textStyle: {
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
    fontSize: responsiveScreenFontSize(2.0),
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
    alignItems: "center",
    width: 100,
    height: 100,
    // backgroundColor: "yellow",
    marginBottom: 32,
  },
  innerTextStyle: { fontWeight: "bold", textAlign: "center", width: 100 },
});

export default PersonalWellnessRec;
