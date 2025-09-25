import { View, StyleSheet } from "react-native"

export default function EmotePicker() {
  return (
    <View style={styles.container}>
      <View style={styles.view}></View>
      <View style={styles.slider}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "40%",
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
  view: {
    width: "100%",
    flex: 1,
  },
  slider: {
    width: "100%",
    height: 48,
    backgroundColor: "#1c1c1c",
  },
})
