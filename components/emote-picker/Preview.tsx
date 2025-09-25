import { StyleProp, View, ViewStyle } from "react-native"
import Text from "../common/Text"

type Props = {
  style?: StyleProp<ViewStyle>
}

export default function Preview({ style }: Props) {
  return (
    <View style={style}>
      <Text>Preview</Text>
    </View>
  )
}
