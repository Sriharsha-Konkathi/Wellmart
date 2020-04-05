import React, { PureComponent } from "react";
import { Text, View, Picker } from "react-native";

class DropDown extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      language: "",
    };
  }
  render() {
    pickers = [];
    for (i = 0; i < this.props.values.length; i++) {
      pickers.push(
        <Picker.Item
          key={i}
          label={this.props.values[i]}
          value={this.props.values[i]}
        />
      );
    }
    return (
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 2.5,
          paddingHorizontal: 25,
        }}
      >
        <Text
          style={[
            {
              fontSize: 16,
              fontWeight: "bold",
              width: 140,
              color: "black",
              alignSelf: "center",
              // height: 43
            },
            this.props.style,
          ]}
        >
          {this.props.label}:
        </Text>
        <View
          style={{
            borderColor: "gray",
            borderWidth: 1,
            marginLeft: 2,
            width: 180,
            height: 40,
            borderRadius: 10,
            borderWidth: 1.5,
          }}
        >
          <Picker
            selectedValue={this.state.language}
            style={{
              width: 170,
              left: 10,
              bottom: 7,
              fontSize: 18,
              color: "black",
            }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }
          >
            {pickers}

            {/* <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" /> */}
          </Picker>
        </View>
      </View>
    );
  }
}

export default DropDown;
