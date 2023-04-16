import { PropType, defineComponent } from "vue";

export type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

export const props = {
  color: {
    type: String as PropType<IColor>,
    default: "blue", // 设定默认颜色
  },
};
export default defineComponent({
  name: "XButton",
  props,
  setup(props, { slots }) {
    return () => (
      <button class={`py-2 px-4 bg-${props.color}-500 cursor-pointer border-none m-1 hover:bg-${props.color}-300 hover:text-white border-4`}>
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
