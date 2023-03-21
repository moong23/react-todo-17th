import { atom } from "recoil";

export const mainIconPositionState = atom({
  key: "mainIconPositionState",
  default: {
    top: 30,
    left: 30,
  },
});

export const textIconPositionState = atom({
  key: "textIconPositionState",
  default: {
    top: 150,
    left: 30,
  },
});

export const clickedIconState = atom({
  key: "clickedIconState",
  default: "",
});
