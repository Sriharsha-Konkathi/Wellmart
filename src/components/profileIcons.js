import React, { PureComponent, Component } from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";

class ProfileIcon extends Component {
  render() {
    return (
      <View
        style={{
          borderRadius: responsiveScreenHeight(100),
          borderWidth: 2,
          borderColor: "skyblue",
          alignItems: "center",
          justifyContent: "center",
          marginVertical: responsiveScreenHeight(0.5),
          overflow: "hidden",
          width: responsiveScreenHeight(10),
          height: responsiveScreenHeight(10)
        }}
      >
        <Image
          resizeMode="contain"
          source={this.props.source}
          style={[
            {
              width: responsiveScreenHeight(10),
              height: responsiveScreenHeight(10),
              overflow: "hidden"
            },
            this.props.imageStyle
          ]}
        />
      </View>
    );
  }
}

export default ProfileIcon;
