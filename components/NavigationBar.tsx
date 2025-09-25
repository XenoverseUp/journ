import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function NavigationBar() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.nav,
        {
          height: insets.top + 64,
          paddingTop: insets.top,
        },
      ]}
    >
      {/*<Text>Mugman</Text>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingInline: 24,
    backgroundColor: "#101010",
  },
});
