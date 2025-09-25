import { Link } from "expo-router"
import { SymbolView } from "expo-symbols"
import { StyleSheet, View } from "react-native"
import Text from "../common/Text"

export default function MonthView() {
  return (
    <Link href="/(settings)">
      <View style={styles.container}>
        <SymbolView size={24} name="calendar" tintColor="#ECFF71" />
        <Text style={styles.streakText}>32</Text>
      </View>
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    paddingRight: 9,
    paddingLeft: 7.5,
    paddingBlock: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#161900",
  },
  streakText: {
    fontWeight: 600,
  },
})
