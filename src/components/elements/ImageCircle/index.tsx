import React from "react"
import { View, Text, Image, ImageSourcePropType } from "react-native"
import styles from "./styles"

interface Props {
  active: boolean
  uri: string
}

const ImageCircle = ({ active, uri }) => {
  return (
    <View style={active ? { ...styles.parentView, ...styles.active } : { ...styles.parentView }}>
      <Image source={uri} width={30} height={30} />
    </View>
  )
}

export default ImageCircle
