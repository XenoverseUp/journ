import { View, StyleSheet } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import Character from "./Character"
import MonthView from "./MonthView"
import SettingsView from "./SettingsButton"

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
      <Character />
      <View style={styles.toolbar}>
        <MonthView />
        <SettingsView style={styles.settings} />
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
    paddingInline: 24,
  },
  toolbar: {
    flexDirection: "row",
    alignItems: "center",
  },
  settings: {
    marginLeft: 12,
  },
})
