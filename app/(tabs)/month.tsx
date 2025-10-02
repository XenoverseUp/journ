import { StyleSheet, View } from "react-native"
import globalStyles from "@/lib/style/global-styles"
import Text from "@/components/common/Text"

export default function Month() {
  return (
    <View style={[globalStyles.background, styles.container]}>
      <Text>Monthly Calendar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
})
