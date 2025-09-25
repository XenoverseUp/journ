import { StyleSheet, View } from "react-native"

import NavigationBar from "@/components/navigation-bar"
import globalStyles from "@/lib/style/global-styles"
import Text from "@/components/common/Text"
import EmotePicker from "@/components/emote-picker"

export default function App() {
  return (
    <View style={[globalStyles.background, styles.container]}>
      <NavigationBar />
      <EmotePicker />
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 18 }}>Hello Journal!</Text>
      </View>
    </View>
  )
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
    backgroundColor: "#212121",
  },
})
