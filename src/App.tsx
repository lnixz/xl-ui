import { defineComponent, h } from "vue";
import XButton from "./button/Button";
export default defineComponent({
  name: "App",
  render() {
    return (
      <div>
        <div>
          <XButton>基础按钮</XButton>
          <XButton color="green">基础按钮</XButton>
          <XButton color="yellow">基础按钮</XButton>
          <XButton color="red">基础按钮</XButton>
          <XButton color="gray">基础按钮</XButton>
          <XButton color="pink">基础按钮</XButton>
        </div>
        <div>
          <XButton plain>朴素按钮</XButton>
          <XButton color="green" plain>
            朴素按钮
          </XButton>
          <XButton color="yellow" plain>
            朴素按钮
          </XButton>
          <XButton color="red" plain>
            朴素按钮
          </XButton>
          <XButton color="gray" plain>
            朴素按钮
          </XButton>
          <XButton color="pink" plain>
            朴素按钮
          </XButton>
        </div>
        <div>
          <XButton icon="i-mdi-search">搜索</XButton>
          <XButton color="green" icon="i-mdi-edit"></XButton>
          <XButton color="yellow" icon="i-mdi-check"></XButton>
          <XButton color="red" icon="i-mdi-message"></XButton>
          <XButton color="gray" icon="i-mdi-star-off"></XButton>
          <XButton color="pink" icon="i-mdi-delete"></XButton>
          <XButton
            color="purple"
            plain
            icon="i-vscode-icons-file-type-vite"
          ></XButton>
          <XButton
            color="green"
            plain
            icon="i-vscode-icons-file-type-typescript-official"
          ></XButton>
          <XButton
            color="yellow"
            plain
            icon="i-vscode-icons-file-type-vue"
          ></XButton>
          <XButton
            color="red"
            plain
            icon="i-vscode-icons-file-type-vscode"
          ></XButton>
          <XButton
            color="pink"
            plain
            icon="i-vscode-icons-file-type-css"
          ></XButton>
        </div>
      </div>
    );
  },
});
