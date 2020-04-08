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

class PersonalIntervension extends Component {
  static navigationOptions = {
    title: "PersonalIntervension Screen",
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
          title={"Personal Intervension Plan"}
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
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    marginLeft: 12,
                    marginBottom: 10,
                  }}
                >
                  Personalized Diet Plan
                </Text>
                <InputField
                  label="Prescribed daily calorie intake "
                  labelStyles={{
                    fontSize: 16,
                    width: 215,
                    alignSelf: "center",
                    textAlign: "left",
                  }}
                  inputStyles={{ width: 100, fontSize: 16 }}
                  keyboardType="numeric"
                  defaultText={"2250"}
                />
                <InputField
                  label="Best available food options "
                  labelStyles={{
                    fontSize: 16,
                    width: 215,
                    alignSelf: "center",
                    textAlign: "left",
                  }}
                  inputStyles={{ width: 100, fontSize: 16 }}
                  keyboardType="numeric"
                />
                <InputField
                  label="Clinical intervention "
                  labelStyles={{
                    fontSize: 16,
                    width: 215,
                    alignSelf: "center",
                    textAlign: "left",
                  }}
                  inputStyles={{ width: 100, fontSize: 16 }}
                  defaultText={"Required"}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    marginLeft: 12,
                    marginVertical: 15,
                  }}
                >
                  MULTI-SECTORAL INTERVENTIONS
                </Text>
                <InputField
                  label="Government support and nutritional plans applicable to you "
                  labelStyles={{
                    fontSize: 16,
                    width: 215,
                    alignSelf: "center",
                    textAlign: "left",
                  }}
                  inputStyles={{ width: 100, fontSize: 16 }}
                  defaultText={"Yes"}
                />
              </View>
              <Button
                title="Weight Management Plan"
                buttonStyle={[styles.buttonStyle]}
                textStyle={styles.textStyle}
                onPress={() => this.props.navigation.navigate("WeightMgmtPlan")}
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
        <LeftArrowNav
          onPress={() => this.props.navigation.navigate("PerHealthAssess")}
        />
        {/* <RightSubmit
          onPress={() => this.props.navigation.navigate("PerHealthAssess")}
        /> */}
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
    flexDirection: "row",
    height: 35,
  },
  innerTextStyle: { flex: 4, fontSize: 18 },
});

export default PersonalIntervension;
