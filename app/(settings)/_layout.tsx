import globalStyles from "@/lib/style/global-styles"
import { Stack } from "expo-router"

export default function SettingsLayout() {
  return (
    <Stack>
      <Stack.Screen name="main" options={{ headerShown: false, contentStyle: globalStyles.background }} />
    </Stack>
  )
}
