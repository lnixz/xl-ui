import { defineComponent, h } from "vue";
import XButton from "./button/Button";
export default defineComponent({
  name: "App",
  render() {
    return (
      <div>
        <div>
          <XButton>Default</XButton>
          <XButton color="green">Green</XButton>
          <XButton color="yellow">Yellow</XButton>
          <XButton color="red">Red</XButton>
          <XButton color="gray">Gray</XButton>
          <XButton color="pink">Pink</XButton>
        </div>
        <div>
          <XButton plain>Plain</XButton>
          <XButton color="green" plain>Green</XButton>
          <XButton color="yellow" plain>Yellow</XButton>
          <XButton color="red" plain>Red</XButton>
          <XButton color="gray" plain>Gray</XButton>
          <XButton color="pink" plain>Pink</XButton>
        </div>
        <div>
          <XButton round>Round</XButton>
          <XButton color="green" round>Green</XButton>
          <XButton color="yellow" round>Yellow</XButton>
          <XButton color="red" round>Red</XButton>
          <XButton color="gray" round>Gray</XButton>
          <XButton color="pink" round>Pink</XButton>
        </div>
        <div>
          <XButton icon="i-mdi-search">Search</XButton>
          <XButton color="green" icon="i-mdi-edit"></XButton>
          <XButton color="yellow" icon="i-mdi-check"></XButton>
          <XButton color="red" icon="i-mdi-message"></XButton>
          <XButton color="gray" icon="i-mdi-star-off"></XButton>
          <XButton color="pink" icon="i-mdi-delete"></XButton>
          <XButton color="purple" plain icon="i-vscode-icons-file-type-vite"></XButton>
          <XButton color="green" plain icon="i-vscode-icons-file-type-typescript-official"></XButton>
          <XButton color="yellow" plain icon="i-vscode-icons-file-type-vue"></XButton>
          <XButton color="red" plain icon="i-vscode-icons-file-type-vscode"></XButton>
          <XButton color="pink" plain icon="i-vscode-icons-file-type-css" ></XButton>
        </div>
        <div>
          <XButton icon="i-mdi-search" circle>Search</XButton>
          <XButton color="green" icon="i-mdi-edit" circle></XButton>
          <XButton color="yellow" icon="i-mdi-check" circle></XButton>
          <XButton color="red" icon="i-mdi-message" circle></XButton>
          <XButton color="gray" icon="i-mdi-star-off" circle></XButton>
          <XButton color="pink" icon="i-mdi-delete" circle></XButton>
          <XButton color="purple" plain icon="i-vscode-icons-file-type-vite" circle></XButton>
          <XButton color="green" plain icon="i-vscode-icons-file-type-typescript-official" circle></XButton>
          <XButton color="yellow" plain icon="i-vscode-icons-file-type-vue" circle></XButton>
          <XButton color="red" plain icon="i-vscode-icons-file-type-vscode" circle></XButton>
          <XButton color="pink" plain icon="i-vscode-icons-file-type-css" circle></XButton>
        </div>
        <div>
          <XButton disabled>Disabled</XButton>
          <XButton color="green" disabled>Green</XButton>
          <XButton color="yellow" plain disabled>Yellow</XButton>
          <XButton color="red" plain disabled>Red</XButton>
          <XButton color="gray" round disabled>Gray</XButton>
          <XButton color="pink" round disabled>Pink</XButton>
          <XButton color="green" icon="i-mdi-edit" circle disabled></XButton>
          <XButton color="yellow" icon="i-mdi-check" circle disabled></XButton>
          <XButton color="red" icon="i-mdi-message" circle disabled></XButton>
          <XButton color="gray" icon="i-mdi-star-off" circle disabled></XButton>
          <XButton color="pink" icon="i-mdi-delete" circle disabled></XButton>
        </div>
      </div>
    );
  },
});
