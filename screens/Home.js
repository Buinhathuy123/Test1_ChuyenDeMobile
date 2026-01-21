import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={button}
      >
        <Text style={text}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
        style={button}
      >
        <Text style={text}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const button = {
  backgroundColor: "#2d3b8f",
  padding: 12,
  borderRadius: 8,
  marginBottom: 15,
  width: 120,
};

const text = {
  color: "#fff",
  textAlign: "center",
  fontSize: 16,
};
