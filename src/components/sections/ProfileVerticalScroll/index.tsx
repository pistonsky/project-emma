import React from "react"
import { View, TouchableWithoutFeedback, ScrollView, Dimensions, Text } from "react-native"
import { ImageCircle } from "@src/components/elements"
import styles from "./styles"
import { Props } from "./types"
import { ThemeContext } from "@src/screens/Home"

const ProfileVerticalScroll = ({ profileData, scrollViewRef, scrollViewRefHoriztontal }: Props) => {
  const [userScrolling, setUserScrolling] = React.useState(false)
  const { theme, setTheme } = React.useContext(ThemeContext)
  const { profileWidth, heightOfScrollView, active } = theme

  const onLayout = (event) => {
    setTheme({
      ...theme,
      heightOfScrollView: event.nativeEvent.layout.height
    })
  }

  const onUserScroll = (event) => {
    if (userScrolling) {
      const position = event.nativeEvent.contentOffset.y / heightOfScrollView
      const active = Math.round(position)
      scrollViewRefHoriztontal.current?.scrollTo({ x: position * profileWidth, animated: true })
      setTheme({ ...theme, active })
    }
  }

  const onScrollEnd = () => {
    if (userScrolling) {
      setUserScrolling(false)
      scrollViewRefHoriztontal.current?.scrollTo({ x: active * profileWidth, animated: true })
    }
  }

  return (
    <ScrollView
      style={styles.scrollView}
      ref={scrollViewRef}
      pagingEnabled
      contentContainerStyle={{ height: `${100 * profileData.length}%` }}
      // onScroll={onUserScroll}
      onLayout={onLayout}
      onScroll={onUserScroll}
      scrollEventThrottle={20}
      onMomentumScrollEnd={onScrollEnd}
      onScrollBeginDrag={() => setUserScrolling(true)}
    >
      {profileData.map((el, index) => {
        return (
          <View
            key={`VerticalScroll${index}`}
            style={{ ...styles.profile, height: heightOfScrollView }}
          >
            <View style={styles.profileHeadingView}>
              <View style={styles.profileName}>
                <Text style={styles.textHeadingFirstName}>{el.name.split(" ")[0]} </Text>
                <Text style={styles.textHeadingLastName}>{el.name.split(" ")[1] || ""} </Text>
              </View>
              <Text style={styles.textSubHeading}>{el.profession}</Text>
            </View>
            <View>
              <Text style={styles.aboutMeHeading}> About Me</Text>
              <Text style={styles.aboutInfo}>{el.info}</Text>
            </View>
          </View>
        )
      })}
    </ScrollView>
    // </View>
  )
}

export default ProfileVerticalScroll
