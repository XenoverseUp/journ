import { SymbolView } from "expo-symbols"
import { View, StyleSheet } from "react-native"
import Text from "../common/Text"

export default function Streak() {
  return (
    <View style={s.container}>
      <SymbolView name="flame.fill" tintColor="#FFBF00" size={20} />
      <Text style={s.text}>12</Text>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  text: {
    fontWeight: "700",
    fontSize: 16,
    color: "#E1B56E",
  },
})
