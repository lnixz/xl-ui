import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";

const colors = [
  "black",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

const borderWidth = [0, 2, 4, 6, 8, 10];

const icons = [
  "i-mdi-magnify",
  "i-mdi-edit",
  "i-mdi-check",
  "i-mdi-message",
  "i-mdi-star-off",
  "i-mdi-delete",
  "i-mdi-add",
  "i-mdi-share",
];

const safelist = [
  `text-white`,
  ...colors.map((v) => `bg-${v}-100`),
  ...colors.map((v) => `bg-${v}-200`),
  ...colors.map((v) => `bg-${v}-300`),
  ...colors.map((v) => `bg-${v}-400`),
  ...colors.map((v) => `bg-${v}-500`),
  ...colors.map((v) => `text-${v}-100`),
  ...colors.map((v) => `text-${v}-200`),
  ...colors.map((v) => `text-${v}-300`),
  ...colors.map((v) => `text-${v}-400`),
  ...colors.map((v) => `text-${v}-500`),
  ...colors.map((v) => `hover:bg-${v}-100`),
  ...colors.map((v) => `hover:bg-${v}-200`),
  ...colors.map((v) => `hover:bg-${v}-300`),
  ...colors.map((v) => `hover:bg-${v}-400`),
  ...colors.map((v) => `hover:bg-${v}-500`),
  ...colors.map((v) => `hover:bg-${v}-600`),
  ...colors.map((v) => `hover:bg-${v}-700`),
  ...colors.map((v) => `border-${v}-100`),
  ...colors.map((v) => `border-${v}-200`),
  ...colors.map((v) => `border-${v}-300`),
  ...colors.map((v) => `border-${v}-400`),
  ...colors.map((v) => `border-${v}-500`),
  ...borderWidth.map((c) => `border-${c}`),
  ...icons.map((i) => `${i}`),
];

export default () =>
  Unocss({
    safelist,
    presets: [presetUno(), presetAttributify(), presetIcons()],
  });
