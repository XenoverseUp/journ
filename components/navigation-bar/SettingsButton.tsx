import { SymbolView } from "expo-symbols"
import { Link } from "expo-router"
import { StyleProp, TextStyle } from "react-native"

type Props = {
  style?: StyleProp<TextStyle>
}

export default function SettingsView({ style }: Props) {
  return (
    <Link href="/(settings)" style={style}>
      <Link.Trigger>
        <SymbolView name="gearshape.fill" tintColor="#FCD3D3" />
      </Link.Trigger>

      <Link.Menu>
        <Link.MenuAction title="Sign Out" icon="nosign" destructive onPress={() => {}} />
      </Link.Menu>
    </Link>
  )
}
