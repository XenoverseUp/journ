import { View, StyleSheet } from "react-native"
import Text from "../common/Text"

export default function Character() {
  return (
    <View style={styles.trigger}>
      <View style={styles.avatar}></View>
      <Text style={styles.avatarName}>Mugman</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  trigger: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 20,
    backgroundColor: "#FFD979",
  },
  avatarName: {
    fontSize: 20,
    fontFamily: "Caveat_700Bold",
  },
})
