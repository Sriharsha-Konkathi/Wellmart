import React, { Component } from "react";

import { Image, Text, View, ScrollView, StyleSheet } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import Footer from "../components/footer";
import Header from "../components/header";
// import { Ionicons } from "@expo/vector-icons";
import { Accordion, Block } from "galio-framework";

class ProfileScreen extends Component {
  static navigationOptions = {
    title: "Profile Screen",
    maxLength: 400,
    headerShown: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: "Demographic Details",
          content:
            "Date of birth: 1/1/1980 (39 years old) \n\nAddress: 5402, West Michigan Avenue Lansing, MI-48917 \n\nEmail: john.smith@example.com",
          icon: {
            name: "info",
            family: "material",
            size: responsiveScreenHeight(3.51),
            color: "black",
          },
        },
        {
          title: "Plan Details",
          content:
            "Member ID: 99999999XY \n\nPlan Name: ABCInsurer Platinum Plan \n\nPlan Type: HMO",
          icon: {
            name: "attach-money",
            family: "material",
            size: responsiveScreenHeight(3.51),
            color: "black",
          },
        },
        {
          title: "Support",
          content:
            "Customer Support Details: \n\nMail: customer_care@wellmart.com \n\ncontact: +1 0801119090",
          icon: {
            name: "help",
            family: "material",
            size: responsiveScreenHeight(3.51),
            color: "black",
          },
        },
      ],
    };
  }
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
          title={"My Profile"}
        />
        <View
          style={{
            flex: 1,
            // backgroundColor: "yellow",
            marginBottom: responsiveScreenHeight(7.5),
            // width: responsiveScreenWidth(100)
          }}
        >
          <View
            style={{
              // flex:1,
              borderRadius: responsiveScreenHeight(100),
              borderWidth: 2,
              borderColor: "skyblue",
              alignItems: "center",
              justifyContent: "center",
              marginVertical: responsiveScreenHeight(0.5),
              overflow: "hidden",
              backgroundColor: "red",
              width: responsiveScreenHeight(20),
              height: responsiveScreenHeight(20),
              alignSelf: "center",
            }}
          >
            <Image
              resizeMode="contain"
              source={require("../resources/images/JohnSmith.jpg")}
              style={{
                width: responsiveScreenHeight(20),
                height: responsiveScreenHeight(20),
                overflow: "hidden",
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
            }}
          >
            <Text style={{ fontSize: responsiveScreenHeight(3) }}>
              John Smith
            </Text>
            <Image
              resizeMode="contain"
              source={require("../resources/images/pencil.png")}
              style={{
                width: responsiveScreenHeight(3.5),
                height: responsiveScreenHeight(3),
                overflow: "hidden",
                marginLeft: responsiveScreenHeight(1),
                alignSelf: "center",
              }}
            />
          </View>
          <View style={styles.container}>
            <Block style={styles.block}>
              <Accordion
                dataArray={this.state.data}
                opened={null}
                contentStyle={{
                  fontWeight: "bold",
                  fontSize: responsiveScreenHeight(2.08),
                }}
                style={{
                  borderColor: "#e6f5f1",
                  borderWidth: 2.5,
                  width: responsiveScreenWidth(85),
                  backgroundColor: "#e6f5f1",
                }}
              />
            </Block>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#e6f5f1",
            top: responsiveScreenHeight(89.7),
            position: "absolute",
            left: responsiveScreenHeight(14.3),
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  block: {
    height: responsiveScreenHeight(41.6),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;
