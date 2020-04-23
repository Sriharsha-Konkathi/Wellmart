import React, { Component } from "react";

import { Text, View, ScrollView, StyleSheet } from "react-native";
import Logo from "../components/logo";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import ProfileIcon from "../components/profileIcons";
import Button from "../components/button";
import Footer from "../components/footer";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home Screen",
    maxLength: 400,
    headerShown: false,
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            marginTop: responsiveScreenHeight(2.5),
            alignSelf: "center",
            backgroundColor: "white",
          }}
        >
          <Logo />
        </View>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            // justifyContent: "center",
            marginHorizontal: responsiveScreenHeight(2),
            // backgroundColor: "yellow",
          }}
        >
          <View>
            <Text style={{ fontSize: responsiveScreenFontSize(2.4) }}>
              Hi <Text style={{ fontWeight: "bold" }}>John!</Text> Let's get
              started on this journey to a healthy lifestyle.
              {"\n"}
            </Text>
            <Text style={{ fontSize: responsiveScreenFontSize(2.25) }}>
              Please select a Status to enter the required information :
            </Text>
          </View>
          <ScrollView
            style={{
              flex: 1,
              marginTop: responsiveScreenHeight(2),
              marginBottom: responsiveScreenHeight(7.5),
              // backgroundColor: "skyblue",
            }}
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <ProfileIcon
                source={require("../resources/images/HealthStatus.png")}
              />
              <Button
                title="Health Status"
                buttonStyle={[styles.buttonStyle]}
                textStyle={styles.textStyle}
                onPress={() =>
                  this.props.navigation.navigate("HealthStatusScreen")
                }
              />
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <ProfileIcon
                source={require("../resources/images/SocioEconomicStatus.png")}
              />
              <Button
                title="Socio Economic Status"
                buttonStyle={[styles.buttonStyle]}
                textStyle={styles.textStyle}
                onPress={() =>
                  this.props.navigation.navigate("SocioEconomicStatus")
                }
              />
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <ProfileIcon
                source={require("../resources/images/EnvironmentalStatus.png")}
              />
              <Button
                title="Environmental Status"
                buttonStyle={[styles.buttonStyle]}
                textStyle={styles.textStyle}
                onPress={() =>
                  this.props.navigation.navigate("EnvironmentalStatus")
                }
              />
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <ProfileIcon
                source={require("../resources/images/FoodHabits.png")}
              />
              <Button
                title="Life Style"
                buttonStyle={[styles.buttonStyle]}
                textStyle={styles.textStyle}
                onPress={() => this.props.navigation.navigate("LifeStyle")}
              />
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <ProfileIcon
                source={require("../resources/images/FoodHabits.png")}
              />
              <Button
                title="Food Habits"
                buttonStyle={[styles.buttonStyle]}
                textStyle={styles.textStyle}
                onPress={() => this.props.navigation.navigate("FoodHabits")}
              />
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            backgroundColor: "#e6f5f1",
            top: responsiveScreenHeight(92.5),
            position: "absolute",
            left: responsiveScreenHeight(3.9),
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
          style={{ top: responsiveScreenHeight(90.5) }}
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
    borderWidth: 1.2,
    borderRadius: 20,
    paddingVertical: responsiveScreenHeight(2),
    width: responsiveScreenWidth(62),
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
    fontSize: responsiveScreenFontSize(2.25),
  },
});

export default HomeScreen;
