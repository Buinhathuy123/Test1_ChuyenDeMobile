import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
} from "react-native-web";

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
      }}
    >
      {/* Title */}
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Programming Languages
      </Text>

  
   <View
  style={{
    height: 240,           
    justifyContent: "center",
  }}
>
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
      alignItems: "center", 
      paddingHorizontal: 10,
    }}
  >
    <Image
      source={require("./image/c++.jpeg")}
      style={{
        width: 220,
        height: 220,
        marginRight: 25,
        borderRadius: 16,
        backgroundColor: "#f2b66d",
      }}
    />

    <Image
      source={require("./image/c.png")}
      style={{
        width: 220,
        height: 220,
        marginRight: 25,
        borderRadius: 16,
        backgroundColor: "#f2b66d",
      }}
    />

    <Image
      source={require("./image/elixir.jpeg")}
      style={{
        width: 220,
        height: 220,
        marginRight: 25,
        borderRadius: 16,
        backgroundColor: "#f2b66d",
      }}
    />

    <Image
      source={require("./image/java.jpeg")}
      style={{
        width: 220,
        height: 220,
        marginRight: 25,
        borderRadius: 16,
        backgroundColor: "#f2b66d",
      }}
    />

    <Image
      source={require("./image/js.png")}
      style={{
        width: 220,
        height: 220,
        marginRight: 25,
        borderRadius: 16,
        backgroundColor: "#f2b66d",
      }}
    />

    <Image
      source={require("./image/python.jpeg")}
      style={{
        width: 220,
        height: 220,
        marginRight: 25,
        borderRadius: 16,
        backgroundColor: "#f2b66d",
      }}
    />
  </ScrollView>
</View>



      <TextInput
        placeholder="What is your favorite programming language from the list above?"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          padding: 12,
          fontSize: 16,
        }}
      />
    </SafeAreaView>
  );
};

export default App;
