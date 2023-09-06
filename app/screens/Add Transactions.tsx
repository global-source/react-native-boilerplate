import { Input, Button } from "@rneui/themed";
import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "../common/components/text.component";

export default function AddTransactionScreen({ navigation }) {
  return (
    <View>
      <Text p2>Add Transactions</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}
