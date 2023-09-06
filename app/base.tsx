import { View, StatusBar } from "react-native";
import { Text } from "./common/components/text.component";
import { layout_style } from "./common/styles/layout.styles";
import HomeScreen from "./screens/home";

export default function Base() {
  return (
    <View style={layout_style.container}>
      <HomeScreen/>
    </View>
  );
}
