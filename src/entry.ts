import { App } from "vue";
import XButton from "./button/Button";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";

import "virtual:uno.css";

export { XButton, SFCButton, JSXButton };

export default {
  install(app: App): void {
    app.component(XButton.name, XButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  },
};
