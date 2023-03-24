import { atom } from "recoil";

export const mainIconPositionState = atom({
  key: "mainIconPositionState",
  default: JSON.parse(localStorage.getItem("mainIconPosition")) ?? {
    top: 30,
    left: 30,
  },
});

export const textIconPositionState = atom({
  key: "textIconPositionState",
  default: JSON.parse(localStorage.getItem("textIconPosition")) ?? {
    top: 160,
    left: 30,
  },
});

export const clickedIconState = atom({
  key: "clickedIconState",
  default: "",
});
