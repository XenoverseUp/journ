import Text from "@/components/common/Text"
import { Link } from "expo-router"

export default function Settings() {
  return (
    <Link
      href="/(tabs)"
      style={{
        color: "white",
      }}
    >
      Hello Settings
    </Link>
  )
}
