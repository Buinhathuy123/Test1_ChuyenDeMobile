import React from "react";
import { View, Text } from "react-native";

export default function Profile({ route }) {
  const { message } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18, color: "#999" }}>{message}</Text>
    </View>
  );
}
