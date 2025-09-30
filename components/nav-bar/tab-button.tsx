import { TabTriggerSlotProps } from "expo-router/ui"

import { StyleSheet, Pressable } from "react-native"
import Text from "../common/Text"

export type TabButtonProps = TabTriggerSlotProps

export default function TabButton({ isFocused, children, ...props }: TabButtonProps) {
  return (
    <Pressable {...props}>
      <Text style={[styles.trigger, { opacity: isFocused ? 1 : 0.5 }]}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  trigger: {
    fontSize: 24,
    fontWeight: 700,
  },
})
