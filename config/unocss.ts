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
const borderRadius = [0, 2, 4, 6, 8, 10];
const width = ['auto', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const height = ['auto', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const paddingX = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const cursor = ['default','not-allowed', 'pointer'];
const opacity = ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'];

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
  ...borderRadius.map((c) => `rounded-${c}`),
  ...width.map((c) => `w-${c}`),
  ...height.map((c) => `h-${c}`),
  ...paddingX.map((c) => `px-${c}`),
  ...cursor.map((c) => `cursor-${c}`),
  ...opacity.map((c) => `opacity-${c}`),
  ...icons.map((i) => `${i}`),
];

export default () =>
  Unocss({
    safelist,
    presets: [presetUno(), presetAttributify(), presetIcons()],
  });
