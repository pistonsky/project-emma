import React, { useEffect } from "react"
import { View, TouchableWithoutFeedback, ScrollView, Dimensions } from "react-native"
import { ImageCircle } from "@src/components/elements"
import styles from "./styles"
import { Props } from "./types"
import { HomeContext } from "@src/reducers"

const ProfileHorizontalScroll = ({ profileData, scrollViewRef, scrollViewRefVertical }: Props) => {
  const [scrolledByTouchingProfile, setScrolledByTouchingProfile] = React.useState(false)
  const { theme, setTheme } = React.useContext(HomeContext)
  const [userScrolling, setUserScrolling] = React.useState(false)
  const { profileWidth, active, heightOfScrollView } = theme

  const onProfileTouched = (index: number) => {
    setTheme({ ...theme, active: index })
    setScrolledByTouchingProfile(true)
    scrollViewRef.current?.scrollTo({ x: index * profileWidth, animated: true })
    scrollViewRefVertical.current?.scrollTo({ y: index * heightOfScrollView, animated: true })
  }

  const onUserScroll = (event) => {
    if (!scrolledByTouchingProfile && userScrolling) {
      const position = event.nativeEvent.contentOffset.x / profileWidth
      const active = Math.round(position)
      setTheme({ ...theme, active })
      scrollViewRefVertical.current?.scrollTo({ y: position * heightOfScrollView, animated: true })
    }
  }

  const onScrollEnd = () => {
    if (scrolledByTouchingProfile) {
      setScrolledByTouchingProfile(false)
    }
    if (userScrolling) {
      setUserScrolling(false)
      scrollViewRefVertical.current?.scrollTo({ y: active * heightOfScrollView, animated: true })
    }
  }
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={styles.scrollViewContainer}
      showsHorizontalScrollIndicator={false}
      ref={scrollViewRef}
      snapToInterval={profileWidth}
      onScroll={onUserScroll}
      scrollEventThrottle={20}
      onMomentumScrollEnd={onScrollEnd}
      onScrollBeginDrag={() => setUserScrolling(true)}
    >
      {profileData.map((profile, index) => {
        return (
          <TouchableWithoutFeedback
            testID={`HScroll${index}.button`}
            key={`${index}Profile`}
            onPress={() => onProfileTouched(index)}
          >
            <View style={styles.imageCircle}>
              <ImageCircle uri={profile.path} active={index === active} />
            </View>
          </TouchableWithoutFeedback>
        )
      })}
    </ScrollView>
  )
}

export default ProfileHorizontalScroll
