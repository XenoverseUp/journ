import { Tabs, TabList, TabTrigger, TabSlot } from "expo-router/ui"
import Text from "@/components/common/Text"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { View } from "react-native"
import NavigationBar from "@/components/nav-bar"

export default function TabLayout() {
  return (
    <Tabs>
      <TabList>
        <TabTrigger name="index" href="/(tabs)" />
        <TabTrigger name="month" href="/(tabs)/month" />
      </TabList>

      <View style={{ flex: 1 }}>
        <NavigationBar />
        <TabSlot />
      </View>
    </Tabs>
  )
}
