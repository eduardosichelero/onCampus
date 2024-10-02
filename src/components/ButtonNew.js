import React from "react";
import { View, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function ButtonNew({ focused, size }) {
  return (
    <View style={[
        styles.container, 
        { backgroundColor: focused ? '#3B82F6' : '#3B82F6' }
      ]}>
      <Entypo 
        name="plus" 
        size={size} 
        color={focused ? 'black' : 'white'} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,

    borderWidth: 2,
    borderColor: "white",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
});
