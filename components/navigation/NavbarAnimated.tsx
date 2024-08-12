import { View } from "react-native";
// import { TabBarIcon } from "./TabBarIcon";
import 'nativewind';
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

export default function AnimatedNav({ focused,name,size }: any) {

  const [isFocused, setisFocused] = useState(focused);

  return (
    <View>
      <FontAwesome name={name} color={'#fffff'} size={size} />
    </View>
  );
}
