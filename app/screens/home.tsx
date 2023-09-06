import { Input, Button } from "@rneui/themed";
import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "../common/components/text.component";

export default function HomeScreen({ navigation }) {
  const [value, setValue] = useState("");

  function fetchValue() {
    // console.log(value);
  }

  return (
    <View>
      {/* <Input onChangeText={setValue} placeholder='Name'></Input>
      <Button title="Submit" onPress={fetchValue}/> */}
      <Text h1 upper>
        Test 123123 h1
      </Text>
      <Text h2 lower>
        Test 123123 h2
      </Text>
      <Text h3 title>
        test your code 123123 h3
      </Text>
      <Text h4>Test 123123 h4</Text>
      <Text h5>Test 123123 h5</Text>
      <Text p1>Test 123123 P1</Text>
      <Text p2>Test 123123 P2</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Button title="Add" onPress={() => navigation.navigate("AddTransaction")} />
      <Button title="Account" onPress={() => navigation.navigate("Account")} />
      <Button title="Profile" onPress={() => navigation.navigate("Profile")} />
    </View>
  );
}
