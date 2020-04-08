import React, { PureComponent, Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import SplashScreen from "./src/screens/Splashscreen";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import NotificationScreen from "./src/screens/NotificationScreen";
import RewardScreen from "./src/screens/RewardScreen";
import SettingScreen from "./src/screens/SettingScreen";
import HealthStatusScreen from "./src/screens/HealthStatus";
import SocioEconomicStatus from "./src/screens/SocioEconomicStatus";
import EnvironmentalStatus from "./src/screens/EnvironmentalStatus";
import LifeStyle from "./src/screens/LifeStyle";
import FoodHabits from "./src/screens/FoodHabits";
import RightSubmit from "./src/components/rightSubmit";
import PerHealthAssess from "./src/screens/PersonalHealthAssess";
import PersonalIntervension from "./src/screens/PersonalIntervension";
import WeightMgmtPlan from "./src/screens/WeightMGMTPlan";
import PersonalWellnessRec from "./src/screens/PersonalWellnessRec";

const AppNavigator = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    HomeScreen: HomeScreen,
    ProfileScreen: ProfileScreen,
    NotificationScreen: NotificationScreen,
    RewardScreen: RewardScreen,
    SettingScreen: SettingScreen,
    HealthStatusScreen: HealthStatusScreen,
    SocioEconomicStatus: SocioEconomicStatus,
    EnvironmentalStatus: EnvironmentalStatus,
    LifeStyle: LifeStyle,
    FoodHabits: FoodHabits,
    RightSubmit: RightSubmit,
    PerHealthAssess: PerHealthAssess,
    PersonalIntervension: PersonalIntervension,
    WeightMgmtPlan: WeightMgmtPlan,
    PersonalWellnessRec: PersonalWellnessRec,
  },
  {
    initialRouteName: "SplashScreen",
  },
  { headerMode: "none" }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
