import { View, StyleSheet } from "react-native"
import Preview from "./Preview"
import Slider from "./Slider"

import { StyleProp, ViewStyle } from "react-native"
import Text from "../common/Text"

type Props = {
  style?: StyleProp<ViewStyle>
}

export default function EmotePicker({ style }: Props) {
  return (
    <View style={[style, styles.container]}>
      <Preview style={styles.view} />
      <Slider style={styles.slider} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
  view: {
    width: "100%",
    flex: 1,
  },
  slider: {
    width: "100%",
    height: 48,
    backgroundColor: "#1c1c1c",
  },
})
