import PagerView, { PagerViewOnPageScrollEvent } from "react-native-pager-view"
import { useState, useRef } from "react"
import { View } from "react-native"
import NavigationBar from "@/components/nav-bar"
import IndexScreen from "./index"
import MonthScreen from "./month"

export default function TabLayout() {
  const [position, setPosition] = useState(0)
  const [offset, setOffset] = useState(0)
  const pagerRef = useRef<PagerView>(null)

  const handleChangePage = (nextPage: number) => pagerRef.current?.setPage(nextPage)

  const handlePageScroll = (e: PagerViewOnPageScrollEvent) => {
    const { position, offset } = e.nativeEvent
    setPosition(position)
    setOffset(offset)
  }

  return (
    <View style={{ flex: 1 }}>
      <NavigationBar position={position} offset={offset} onChangePage={handleChangePage} />
      <PagerView
        ref={pagerRef}
        style={{ flex: 1 }}
        initialPage={0}
        onPageSelected={(e) => {
          setPosition(e.nativeEvent.position)
          setOffset(0)
        }}
        onPageScroll={handlePageScroll}
      >
        <View key="0">
          <IndexScreen />
        </View>
        <View key="1">
          <MonthScreen />
        </View>
      </PagerView>
    </View>
  )
}
