import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NavigationBar from "@/components/NavigationBar";
import globalStyles from "@/lib/style/global-styles";
import Text from "@/components/common/Text";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={[globalStyles.background, styles.container]}>
        <NavigationBar />
        <View style={styles.textContainer}>
          <Text style={{ fontFamily: "Caveat_500Medium", fontSize: 32 }}>Hello Journal!</Text>
        </View>

        <StatusBar style="inverted" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },

  textContainer: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
