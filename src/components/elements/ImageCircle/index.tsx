import React from "react"
import { View, Image } from "react-native"
import styles from "./styles"
import { Props } from "./types"

const ImageCircle = ({ active, uri, testId }: Props) => {
  return (
    <View
      testID={testId || "image-circle-non-active"}
      style={active ? { ...styles.parentView, ...styles.active } : { ...styles.parentView }}
    >
      <Image source={uri} width={30} height={30} />
    </View>
  )
}

export default ImageCircle
