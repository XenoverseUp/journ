import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import "react-native-reanimated"
import { Caveat_700Bold, useFonts } from "@expo-google-fonts/caveat"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import { ThemeProvider, DarkTheme } from "@react-navigation/native"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Caveat_700Bold,
  })

  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync()
  }, [loaded, error])

  if (!loaded && !error) return null

  return (
    <ThemeProvider value={DarkTheme}>
      <Stack initialRouteName="(tabs)">
        <Stack.Screen name="(tabs)" options={{ headerShown: false, title: "Journal" }} />
        <Stack.Screen name="(settings)" options={{ title: "Settings" }} />
      </Stack>
      <StatusBar style="inverted" />
    </ThemeProvider>
  )
}
