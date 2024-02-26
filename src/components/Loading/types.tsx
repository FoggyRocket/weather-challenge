import { StyleProp } from "react-native";

export enum LoadingModalEvents {
  OPEN = 'open',
  CLOSE = 'close',
}
type height = string | number
export interface LoadingProps {
  height?: StyleProp<height>
}