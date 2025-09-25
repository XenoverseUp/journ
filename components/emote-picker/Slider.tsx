import { StyleProp, View, ViewStyle } from "react-native"
import Text from "../common/Text"

type Props = {
  style?: StyleProp<ViewStyle>
}

export default function Slider({ style }: Props) {
  return (
    <View style={style}>
      <Text>Slider</Text>
    </View>
  )
}
