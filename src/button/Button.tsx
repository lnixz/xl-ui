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

export default defineComponent({
  name: "XButton",
  props:{
    color: {
      type: String as PropType<IColor>,
      default: "blue", // 设定默认颜色
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  setup(props, { slots }) {
    return () => (
      <button
        disabled={props.disabled}
        class={`
        inline-flex
        items-center
        m-1 
        py-2 
        justify-center
        px-${props.circle ? "2" : "4"}
        w-${props.circle ? "10" : "auto"}
        h-${props.circle ? "10" : "auto"}
        font-semibold 
        rounded-lg shadow-md 
        bg-${props.color}-${props.plain ? "100" : "500"}
        hover:bg-${props.color}-700
        text-${props.plain ? props.color + "-500" : "white"}
        border-${props.color}-${props.plain ? "500" : "100"}
        hover:text-white
        rounded-${(props.round || props.circle) ? "6" : "2"}
        border-${props.plain ? "2" : "0"}
        cursor-${props.disabled ? "not-allowed" : "pointer"}
        opacity-${props.disabled ? "50" : "100"}
        `}
      >
        {props.icon !== "" ? <i class={`${props.icon} inline-flex`}></i> : ""}
        {props.circle ? "" : slots.default ? slots.default() : ""}
      </button>
    );
  },
});
