import React, { PureComponent } from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import CheckBox from "react-native-check-box";

class CustomCheckBox extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <Text
          style={[
            { fontWeight: "bold", color: "black", width: 120 },
            this.props.textStyle
          ]}
        >
          {this.props.label}
        </Text>
        <CheckBox
          style={[this.props.style]}
          onClick={() => {
            this.setState({
              isChecked: !this.state.isChecked
            });
          }}
          isChecked={
            this.props.isChecked != null
              ? this.props.isChecked
              : this.state.isChecked
          }
        />
      </View>
    );
  }
}

export default CustomCheckBox;
