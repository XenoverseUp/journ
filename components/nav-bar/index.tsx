// components/nav-bar.tsx
import { View, StyleSheet } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Text from "../common/Text"
import { TabTrigger } from "expo-router/ui"
import TabButton from "./tab-button"

export default function NavigationBar() {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={[
        styles.nav,
        {
          height: insets.top + 48,
          paddingTop: insets.top,
        },
      ]}
    >
      <View style={styles.triggerContainer}>
        <TabTrigger asChild name="index" href="/(tabs)">
          <TabButton>Today</TabButton>
        </TabTrigger>

        <TabTrigger asChild name="month" href="/(tabs)/month">
          <TabButton>Calendar</TabButton>
        </TabTrigger>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  triggerContainer: {
    flexDirection: "row",
    gap: 9,
  },
  trigger: {
    fontSize: 24,
    fontWeight: 700,
  },
})
