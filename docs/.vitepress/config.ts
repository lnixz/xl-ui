import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock';

export default defineConfig({
    lang: 'zh-CN',
    title: 'Xinl-UI',
    description: 'A more practical UI component library',
    lastUpdated: true,
    cleanUrls: true,
    head: [
        ['meta', { name: 'theme-color', content: '#3c8772' }],
        [
            'script',
            {
                src: 'https://cdn.usefathom.com/script.js',
                'data-site': 'AZBRSFGG',
                'data-spa': 'auto',
                defer: ''
            }
        ]
    ],

    themeConfig: {
        logo: '/logo.svg',
        sidebar: {
            '/guide/': sidebarGuide(),
        },
        editLink: {
            pattern: 'https://github.com/ZXinL-CN/xinl-ui/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/ZXinL-CN/xinl-ui' }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present ZXinL-CN'
        },
        search: {
            provider: 'algolia',
            options: {
                appId: '8J64VVRP8K',
                apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
                indexName: 'vitepress'
            }
        },
    },
    markdown: {
        config: (md) => {
            md.use(demoBlockPlugin);
        }
    }
});


function sidebarGuide() {
    return [
        { text: '快速开始', link: '/' },
        {
            text: '通用',
            items: [
                { text: 'Button 按钮', link: '/components/button/' }
            ]
        },
        { text: '导航' },
        { text: '反馈' },
        { text: '数据录入' },
        { text: '数据展示' },
        { text: '布局' },
    ]
}