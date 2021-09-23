import React, { useEffect } from "react"
import { View, TouchableWithoutFeedback, Image, ScrollView, Dimensions } from "react-native"
import { ImageCircle } from "@src/components/elements"
import styles from "./styles"
import { Props } from "./types"

const ProfileHorizontalScroll = ({ active = 0, setActive, profileData, scrollViewRef }: Props) => {
  // const [userScrolling, setUserScrolling] = React.useState(true)
  const { width } = Dimensions.get("window")
  const profileWidth = width * 0.2

  const onProfileTouched = (index: number) => {
    setActive(index)
    // if (!userScrolling) setUserScrolling(true)
    scrollViewRef.current?.scrollTo({ x: index * profileWidth, animated: true })
  }

  const onUserScroll = (event) => {
    const nearestScrolledProfile = Math.round(event.nativeEvent.contentOffset.x / profileWidth)
    setActive(nearestScrolledProfile)
  }

  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={styles.scrollViewContainer}
      showsHorizontalScrollIndicator={false}
      decelerationRate="normal"
      ref={scrollViewRef}
      snapToInterval={profileWidth}
      onScroll={onUserScroll}
    >
      {profileData.map((profile, index) => {
        return (
          <TouchableWithoutFeedback key={`${index}Profile`} onPress={() => onProfileTouched(index)}>
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
