import { defineComponent, h } from "vue";
import XButton from "./button";
export default defineComponent({
  name: "App",
  render() {
    return <div>
      <XButton color="red">基础按钮</XButton>
      <XButton color="green">基础按钮</XButton>
      <XButton color="blue">基础按钮</XButton>
      <XButton color="yellow">基础按钮</XButton>
      <XButton color="pink">基础按钮</XButton>
    </div>
    
  }
});
