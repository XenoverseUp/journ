import { View, StyleSheet, Pressable } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { SymbolView } from "expo-symbols"
import { Link } from "expo-router"
import Text from "../common/Text"
import map from "@/lib/utils/map"
import Streak from "./streak"
import Scribble from "@/assets/svg/scribble"
import { useDerivedValue } from "react-native-reanimated"

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

  const todayProgress = useDerivedValue(() => {
    return position === 0 ? 1 - offset : offset
  })

  const calendarProgress = useDerivedValue(() => {
    return position === 0 ? offset : 1 - offset
  })

  return (
    <View
      style={[
        s.nav,
        {
          height: insets.top + 48,
          paddingTop: insets.top,
        },
      ]}
    >
      {/* Tabs */}
      <View style={s.triggerContainer}>
        <Pressable onPress={() => onChangePage(0)}>
          <View style={s.trigger}>
            <Text style={[s.triggerLabel, { opacity: todayOpacity }]}>Today</Text>
            <Scribble progress={todayProgress} width="110%" height={7} style={s.scribble} />
          </View>
        </Pressable>

        <Pressable onPress={() => onChangePage(1)}>
          <View style={s.trigger}>
            <Text style={[s.triggerLabel, { opacity: calendarOpacity }]}>Calendar</Text>
            <Scribble progress={calendarProgress} width="105%" style={s.scribble} />
          </View>
        </Pressable>
      </View>

      {/* Actions */}
      <View style={s.actionContainer}>
        <Streak />

        <Link href="/(settings)/main" asChild>
          <Pressable>
            <SymbolView name="gearshape.fill" tintColor="#FCD3D3" />
          </Pressable>
        </Link>
      </View>
    </View>
  )
}

const s = StyleSheet.create({
  nav: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  triggerContainer: {
    flexDirection: "row",
    gap: 10,
  },
  trigger: {
    position: "relative",
  },

  triggerLabel: {
    fontSize: 24,
    fontWeight: 700,
  },
  scribble: {
    position: "absolute",
    bottom: -7,
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
})
