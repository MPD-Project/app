// 공통컬러
const colors = {
  primary: "#FF98BD",
  point: "#FE2F6E",
};

// 라이트모드
export const light = {
  color: { ...colors },
  bgColor: "#FFFFFF",
  visible90: "#262626",
  visible80: "#3C3C3C",
  visible70: "#515151",
  visible60: "#676767",
  visible50: "#7D7D7D",
  visible40: "#A8A8A8",
  visible30: "#BEBEBE",
  visible20: "#D4D4D4",
  visible10: "#FCFCFC",
  visible00: "#FFFFFF",
};

// 다크모드
export const dark = {
  color: { ...colors },
  bgColor: "#262626",
  visible90: "#FFFFFF",
  visible80: "#FCFCFC",
  visible70: "#D4D4D4",
  visible60: "#BEBEBE",
  visible50: "#A8A8A8",
  visible40: "#7D7D7D",
  visible30: "#676767",
  visible20: "#515151",
  visible10: "#3C3C3C",
  visible00: "#262626",
};
