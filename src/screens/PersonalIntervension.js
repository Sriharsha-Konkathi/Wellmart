import React, { Component } from "react";

import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Linking,
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
import Accordian from "../components/accordion";

class PersonalIntervension extends Component {
  static navigationOptions = {
    title: "PersonalIntervension Screen",
    maxLength: 400,
    headerShown: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {
          title: "Best available food options",
          data:
            "Yogurt, Pumpkin Seeds, Fortified Orange Juice, Cheese, Spinach, Smoked Salmon, chickpeas, garlic, kidney beans, onions, peas",
        },
        {
          title: "Foods To Avoid",
          data:
            "Milk, Dairy products, whole grain cereals , Gluten rich food like pasta, brown rice, peanuts, parsley and chocolates",
        },
        {
          title: "Clinical intervention",
          data:
            "Please call the government helpline at +1-800-4646-0999 to get connected to a nutrition consultant for personalized nutrition support",
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
                <View style={{ marginTop: 10 }}>{this.renderAccordians()}</View>
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
                <View style={{ marginHorizontal: 12 }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 15,
                      paddingBottom: 5,
                    }}
                  >
                    Government Support Options:
                  </Text>
                  <Text style={{ fontSize: 15 }}>
                    Please{" "}
                    <Text
                      style={{
                        color: "blue",
                        textDecorationLine: "underline",
                        fontSize: 15,
                      }}
                      onPress={() => Linking.openURL("http://google.com")}
                    >
                      Click here
                    </Text>{" "}
                    to learn more about Government Schemes applicable to you for
                    nutrition support
                  </Text>
                </View>
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

  renderAccordians = () => {
    const items = [];
    for (let [index, item] of this.state.menu.entries()) {
      items.push(<Accordian title={item.title} data={item.data} key={index} />);
    }
    return items;
  };
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
