import React from "react"
import { View, TouchableWithoutFeedback, Image, ScrollView, Dimensions } from "react-native"
import { ImageCircle } from "@src/components/elements"
import styles from "./styles"
import { Props } from "./types"

const ProfileHorizontalScroll = ({ active = 0, setActive, profileData }: Props) => {
  const { width } = Dimensions.get("window")
  const profileWidth = width * 0.2
  const scrollView = React.useRef(null)
  React.useEffect(() => {
    scrollView.current?.scrollTo({ x: active * profileWidth, animation: true })
  }, [active])
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={styles.scrollViewContainer}
      showsHorizontalScrollIndicator={false}
      decelerationRate="normal"
      ref={scrollView}
      snapToInterval={profileWidth}
    >
      {profileData.map((profile, index) => {
        return (
          <TouchableWithoutFeedback key={`${index}Profile`} onPress={() => setActive(index)}>
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
