import DefaultTheme from 'vitepress/theme';
import XinlUI from '../../../src/entry';

import 'vitepress-theme-demoblock/dist/theme/styles/index.css';
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue';

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.use(XinlUI);
        app.component('Demo', Demo);
        app.component('DemoBlock', DemoBlock);
    }
}