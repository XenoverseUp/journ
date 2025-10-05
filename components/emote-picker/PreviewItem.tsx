import { View, StyleSheet } from "react-native"
import Text from "../common/Text"

type Props = {
  width: number
  index: number
}

export default function PreviewItem({ width, index }: Props) {
  return (
    <View style={[s.view, { width }]}>
      <Text style={s.text}>Item {index}</Text>
    </View>
  )
}

const s = StyleSheet.create({
  view: {
    height: "100%",
    borderWidth: 0,
    borderColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 32,
  },
})
