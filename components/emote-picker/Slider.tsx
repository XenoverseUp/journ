import React from "react"
import { StyleProp, View, ViewStyle, StyleSheet } from "react-native"
import RNSlider from "@react-native-community/slider"

type Props = {
  style?: StyleProp<ViewStyle>
  value: number
  onValueChange?: (value: number) => void
}

export default function Slider({ style, value, onValueChange }: Props) {
  return (
    <View style={[s.container, style]}>
      <RNSlider
        style={s.slider}
        minimumValue={0}
        maximumValue={1}
        step={0.001}
        value={value}
        onValueChange={onValueChange}
        minimumTrackTintColor="#ff4081"
        maximumTrackTintColor="#ccc"
        thumbTintColor="#fff"
      />
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  slider: {
    width: "90%",
  },
})
