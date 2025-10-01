import { View, StyleSheet, Pressable } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { SymbolView } from "expo-symbols"
import { Link } from "expo-router"
import Text from "../common/Text"
import map from "@/lib/utils/map"

type Props = {
  offset: number
  position: number
  onChangePage: (page: number) => void
}

export default function NavigationBar({ offset, position, onChangePage }: Props) {
  const insets = useSafeAreaInsets()

  const todayOpacity = map({
    value: position === 0 ? 1 - offset : offset,
    start: 0,
    end: 1,
    targetStart: 0.25,
    targetEnd: 1,
  })

  const calendarOpacity = map({
    value: position === 0 ? offset : 1 - offset,
    start: 0,
    end: 1,
    targetStart: 0.25,
    targetEnd: 1,
  })

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
      {/* Tabs */}
      <View style={styles.triggerContainer}>
        <Pressable onPress={() => onChangePage(0)}>
          <Text style={[styles.trigger, { opacity: todayOpacity }]}>Today</Text>
        </Pressable>

        <Pressable onPress={() => onChangePage(1)}>
          <Text style={[styles.trigger, { opacity: calendarOpacity }]}>Calendar</Text>
        </Pressable>
      </View>

      {/* Actions */}
      <View style={styles.actionContainer}>
        <Link href="/(settings)/main" asChild>
          <Pressable>
            <SymbolView name="gearshape.fill" tintColor="#FCD3D3" />
          </Pressable>
        </Link>
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
    fontWeight: "700",
  },
  actionContainer: {
    flexDirection: "row",
    gap: 9,
  },
})
