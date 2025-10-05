import React, { useRef, useState } from "react"
import { StyleSheet, View, type StyleProp, type ViewStyle } from "react-native"
import Preview, { PreviewRef } from "./Preview"
import Slider from "./Slider"

type Props = {
  style?: StyleProp<ViewStyle>
}

export default function EmotePicker({ style }: Props) {
  const previewRef = useRef<PreviewRef>(null)
  const [progress, setProgress] = useState(0)

  const handleSliderChange = (value: number) => {
    setProgress(value)
    previewRef.current?.scrollToProgress(value)
  }

  return (
    <View style={[style, styles.container]}>
      <Preview ref={previewRef} style={styles.preview} />
      <Slider style={styles.slider} value={progress} onValueChange={handleSliderChange} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
  preview: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  slider: {
    width: "100%",
    height: 48,
    backgroundColor: "#1c1c1c",
    alignItems: "center",
    justifyContent: "center",
  },
})
