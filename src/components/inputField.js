import React, { PureComponent } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default class InputField extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.defaultText != null ? this.props.defaultText : ""
    };
  }

  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 2.5,
          paddingHorizontal: 25

          // justifyContent: "space-between"
          //backgroundColor: "red"
        }}
      >
        <Text
          style={[
            {
              fontSize: 18,
              fontWeight: "bold",
              width: 150,
              textAlign: "justify",
              color: "black"
              // flex: 0.6
            },
            this.props.labelStyles
          ]}
        >
          {this.props.label}:
        </Text>
        {!this.props.button ? (
          <TextInput
            style={[
              {
                height: this.props.multiline ? null : 40,
                borderColor: "gray",
                borderWidth: 1,
                marginLeft: 20,
                width: 180,
                borderRadius: 10,
                borderWidth: 1.5,
                color: "black"
              },
              this.props.inputStyles
            ]}
            underlineColorAndroid="transparent"
            {...this.props}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
        ) : (
          <TouchableOpacity
            onPress={this.props.onPress}
            activeOpacity={0.8}
            style={[
              {
                alignItems: "center",
                height: 30,
                //flex: 0.4,
                width: 120
                //backgroundColor: "red"
              }
            ]}
          >
            <Text
              style={{
                color: "blue",
                textDecorationLine: "underline",
                fontWeight: "bold",
                width: 150,
                marginLeft: 40,
                fontSize: 14,
                justifyContent: "center",
                textAlign: "auto"
              }}
            >
              {this.props.linktext}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
