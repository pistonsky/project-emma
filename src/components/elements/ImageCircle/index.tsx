import React from "react"
import { View, Text, Image, ImageSourcePropType } from "react-native"
import Styles from "./styles"

interface Props {
  active: boolean
  uri: string
}

const ImageCircle = ({ active, uri }) => {
  return (
    <View style={Styles.parentView}>
      <Image source={uri} width={60} height={60} />
    </View>
  )
}

export default ImageCircle
