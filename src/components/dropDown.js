/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {Text, View, Picker} from 'react-native';

class DropDown extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      language: props.values[0],
    };
  }
  componentDidMount() {
    this.props.onChange(this.state.language);
    // alert('language is' + this.state.language);
  }
  render() {
    let pickers = [];
    for (let i = 0; i < this.props.values.length; i++) {
      pickers.push(
        <Picker.Item
          key={i}
          label={this.props.values[i]}
          value={this.props.values[i]}
        />,
      );
    }
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 2.5,
          paddingHorizontal: 25,
          alignSelf: 'center',
        }}>
        <Text
          style={[
            {
              fontSize: 17.91,
              fontWeight: 'bold',
              width: 150,
              color: 'black',
              justifyContent: 'center',
              alignSelf: 'center',
            },
            this.props.style,
          ]}>
          {this.props.label}:
        </Text>
        <View
          style={{
            left: 10,
            alignContent: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <View
            style={{
              borderColor: 'gray',
              height: 40,
              borderRadius: 10,
              borderWidth: 1.5,
            }}>
            <Picker
              selectedValue={this.state.language}
              style={{
                width: 170,
                left: 10,
                bottom: 7,
                fontSize: 18,
                color: 'black',
              }}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({language: itemValue});
                this.props.onChange(itemValue);
              }}>
              {pickers}

              {/* <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" /> */}
            </Picker>
          </View>
        </View>
      </View>
    );
  }
}

export default DropDown;
