import { StyleProp, View, ViewStyle } from "react-native"
import Text from "../common/Text"

type Props = {
  style?: StyleProp<ViewStyle>
}

export default function Submission({ style }: Props) {
  return (
    <View style={style}>
      <Text>Submission</Text>
    </View>
  )
}
