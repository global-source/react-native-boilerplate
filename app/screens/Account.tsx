import { Input, Button } from "@rneui/themed";
import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "../common/components/text.component";

export default function AccountScreen({ navigation }) {
  return (
    <View>
      <Text p2>Account</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}
