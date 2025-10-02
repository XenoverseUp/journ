import { StyleSheet, View } from "react-native"
import globalStyles from "@/lib/style/global-styles"

import EmotePicker from "@/components/emote-picker"
import Submission from "@/components/submission"

export default function App() {
  return (
    <View style={[globalStyles.background, styles.container]}>
      {/*<NavigationBar />*/}
      <EmotePicker style={styles.emotePicker} />
      <Submission style={styles.submission} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },

  emotePicker: {
    height: "40%",
  },

  submission: {
    flexGrow: 1,
    backgroundColor: "#212121",
    alignItems: "center",
    justifyContent: "center",
  },
})
