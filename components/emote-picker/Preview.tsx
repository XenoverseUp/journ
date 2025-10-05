import React, { forwardRef, useImperativeHandle, useRef } from "react"
import { FlatList, View, StyleSheet, Dimensions, NativeSyntheticEvent, NativeScrollEvent } from "react-native"
import PreviewItem from "./PreviewItem"

const { width: screenWidth } = Dimensions.get("window")
const data = [0, 1, 2]

export type PreviewRef = {
  scrollToProgress: (value: number) => void
}

type Props = {
  style?: any
  onScrollProgress?: (value: number) => void
}

const Preview = forwardRef<PreviewRef, Props>(({ style, onScrollProgress }, ref) => {
  const flatListRef = useRef<FlatList>(null)

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x
    const totalWidth = (data.length - 1) * screenWidth
    const progress = Math.min(Math.max(offsetX / totalWidth, 0), 1)
    onScrollProgress?.(progress)
  }

  useImperativeHandle(ref, () => ({
    scrollToProgress: (value: number) => {
      const offsetX = value * (data.length - 1) * screenWidth
      flatListRef.current?.scrollToOffset({ offset: offsetX, animated: false })
    },
  }))

  return (
    <View style={[s.container, style]}>
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => <PreviewItem width={screenWidth} index={item} />}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
    </View>
  )
})

Preview.displayName = "Preview"

export default Preview

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
})
