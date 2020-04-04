import React, { PureComponent, Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

class Splashscreen extends Component {
  static navigationOptions = {
    title: "SplashScreen",
    maxLength: 400,
    headerShown: false
  };
  constructor(props) {
    super(props);
    this.state = {
      splashDone: false
    };
  }
  componentDidMount() {
    var props = this.props;
    setTimeout(function() {
      props.navigation.navigate("HomeScreen");
    }, 1000);
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Image
          source={require("../resources/images/logo.jpg")}
          style={{
            width: 450,
            height: 450,
            alignSelf: "center",
            justifyContent: "center",
            marginTop: 50,
            borderRadius: 250 / 2
          }}
        />
        <View
          style={{
            marginVertical: 30,
            width: 200,
            alignItems: "center",
            alignSelf: "center"
            // backgroundColor: "red"
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              fontWeight: "bold",
              fontSize: 45,
              color: "black",
              textAlign: "center",
              justifyContent: "center",
              marginLeft: 0,
              marginTop: 15,
              marginBottom: 20
            }}
          >
            Wellmart{" "}
            <Text style={{ fontSize: 20 }}>Building Healthy Communities</Text>
          </Text>
        </View>
      </View>
    );
  }
}

export default Splashscreen;
