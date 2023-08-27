// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  neutral100: "#FFFFFF",
  neutral150: "#f9f9fa",
  neutral175: "#F9F9FA",
  neutral200: "#F4F2F1",
  neutral225: "#ECECEC",
  neutral250: "#EAE7E5",
  neutral300: "#D7CEC9",
  neutral400: "#B6ACA6",
  neutral500: "#978F8A",
  neutral600: "#564E4A",
  neutral700: "#3C3836",
  neutral800: "#191015",
  neutral900: "#000000",

  primary100: "#F2F9E9",
  primary200: "#DFF2C0",
  primary300: "rgba(145,218,11,0.9)",
  primary400: "rgba(75,169,13,0.9)",
  primary500: "rgba(71,162,14,0.9)",
  primary600: "rgba(44,105,0,0.9)",
  primary_faded: "rgba(76,157,18,0.9)",
  primary_extraFaded: "rgba(72,152,15,0.6)",

  secondary100: "#DCDDE9",
  secondary200: "#BCC0D6",
  secondary300: "#9196B9",
  secondary400: "#626894",
  secondary500: "#41476E",

  blue500: '#0075FF',

  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FFCD1E",
  accent500: "#FFA800",

  // contrast400: "rgba(255, 0, 255, 1)",
  // contrast400: "rgba(190, 23, 88, 1)",

  angry100: "#F2D6CD",
  angry200: "#E5ADA1",
  angry300: "#D98F7F",
  angry400: "#D06E5C",
  angry500: "#C84D3A",
  angry600: "#b73a11",
  angry700: "#b61426",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",
} as const

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  name: palette.neutral800,
  mainGreen: palette.primary500,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,
  /**
   * The default color of the screen background.
   */
  background: palette.neutral100,
  /**
   * The default border color.
   */
  border: palette.neutral250,
  /**
   * The main tinting color.
   */
  tint: palette.primary500,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral100,
  /**
   * Error messages.
   */
  error: palette.angry600,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,
  backgroundGray: '#D9D9D9',
  textGray: '#5A5D5A',
  textGrayLight: '#7d7d7d',
  black: palette.neutral800
}
export const globalStyle = {
  pressed: {
    opacity: 0.8,
  },
}
