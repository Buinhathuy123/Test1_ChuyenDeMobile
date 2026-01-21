import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function Register({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text>Email</Text>
      <TextInput style={input} placeholder="Enter your email address" />

      <Text>Password</Text>
      <TextInput style={input} placeholder="Enter your password" secureTextEntry />

      <Text>Confirm Password</Text>
      <TextInput style={input} placeholder="Enter your password again" secureTextEntry />

      <TouchableOpacity
        style={button}
        onPress={() =>
          navigation.navigate("Profile", {
            message: "Successfully registered and logged in",
          })
        }
      >
        <Text style={btnText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const input = {
  borderWidth: 1,
  borderColor: "#ccc",
  borderRadius: 8,
  padding: 10,
  marginBottom: 15,
};

const button = {
  backgroundColor: "#2d3b8f",
  padding: 12,
  borderRadius: 8,
};

const btnText = {
  color: "#fff",
  textAlign: "center",
};
