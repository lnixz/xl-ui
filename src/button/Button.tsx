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
  plain: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: "",
  },
};
export default defineComponent({
  name: "XButton",
  props,
  setup(props, { slots }) {
    return () => (
      <button
        class={`
        inline-flex
        items-center
        m-1 
        py-2 
        px-4 
        font-semibold 
        rounded-lg shadow-md 
        bg-${props.color}-${props.plain ? "100" : "500"}
        hover:bg-${props.color}-700
        text-${props.plain ? props.color + "-500" : "white"}
        border-${props.color}-${props.plain ? "500" : "100"}
        hover:text-white
        border-${props.plain ? "2" : "0"}
        `}
      >
        {props.icon !== "" ? <i class={`${props.icon} inline-flex`}></i> : ""}
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
