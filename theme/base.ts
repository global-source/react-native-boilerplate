import { ThemeMode, createTheme } from "@rneui/themed";
import { useColorScheme } from "react-native";

export default function theme() {
  return createTheme({
    lightColors: {
      primary: "#388E3C",
      secondary: "#03A9F4",
    },
    darkColors: {
      secondary: "#388E3C",
      primary: "#03A9F4",
    },
    mode: useColorScheme() ,
    components: {
      Text: {
        "h1Style": {
          "fontSize": 20
        }
      },
      Button: {
        raised: true,
      },
    },
  });
}
