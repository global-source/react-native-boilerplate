import { Input, Button } from "@rneui/themed";
import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "../common/components/text.component";

export default function ProfileScreen({ navigation }) {
  return (
    <View>
      <Text p2>Profile</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Button title="Account" onPress={() => navigation.navigate("Account")} />
      <Button title="Add Transaction" onPress={() => navigation.navigate("AddTransaction")} />
    </View>
  );
}
