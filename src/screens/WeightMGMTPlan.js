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
// import { LineChart, Grid } from "react-native-svg-charts";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

class WeightMgmtPlan extends Component {
  static navigationOptions = {
    title: "WeightMgmtPlan Screen",
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
          title={"Weight Management Plan"}
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
              <View style={{ marginTop: 15 }}>
                <InputField
                  label="Weight Reduction (In lbs.) "
                  labelStyles={{
                    fontSize: 16,
                    width: 210,

                    alignSelf: "center",
                    textAlign: "left",
                  }}
                  inputStyles={{ width: 105, fontSize: 16 }}
                  keyboardType="numeric"
                  // defaultText={"170"}
                />
              </View>
              <LineChart
                data={{
                  labels: ["Week 1", "Week 2", "Weak 3", "Weak 4"],
                  datasets: [
                    {
                      data: [30, 45, 40, 60, 62, 43],
                      strokeWidth: 2,
                    },
                  ],
                }}
                width={Dimensions.get("window").width - 16}
                height={220}
                chartConfig={{
                  backgroundColor: "#1cc910",
                  backgroundGradientFrom: "#eff3ff",
                  backgroundGradientTo: "#efefef",
                  decimalPlaces: 2,
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                }}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
              <Button
                title="Personalized Wellness Recommendations"
                buttonStyle={[styles.buttonStyle]}
                textStyle={styles.textStyle}
                onPress={() =>
                  this.props.navigation.navigate("PersonalWellnessRec")
                }
              />
            </ScrollView>
          </View>
        </View>

        {/* <LeftArrowNav
          onPress={() => this.props.navigation.navigate("PersonalIntervension")}
        />
        <RightSubmit
          onPress={() => this.props.navigation.navigate("PersonalIntervension")}
        /> */}
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
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,
    marginHorizontal: 12,
    padding: 12,
    marginTop: -12,
  },
  innerTextStyle: { fontWeight: "bold", textAlign: "center" },
});

export default WeightMgmtPlan;
