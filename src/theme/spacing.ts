import {Dimensions} from "react-native";

const {width, height} = Dimensions.get('screen')
export const WIDTH = width
export const HEIGHT = height
export const BASE_HITSLOP = 10


export const spacing = {
  p2: 2,
  p4: 4,
  p8: 8,
  p12: 12,
  p16: 16,
  p24: 24,
  p28: 28,
  p32: 32,
  p48: 48,
  p64: 64,
} as const

export type Spacing = keyof typeof spacing
