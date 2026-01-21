import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function Login({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text>Email</Text>
      <TextInput style={input} placeholder="Enter your email address" />

      <Text>Password</Text>
      <TextInput style={input} placeholder="Enter your password" secureTextEntry />

      <TouchableOpacity
        style={button}
        onPress={() =>
          navigation.navigate("Profile", {
            message: "Successfully logged in",
          })
        }
      >
        <Text style={btnText}>Sign in</Text>
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
