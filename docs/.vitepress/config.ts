import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock';

export default defineConfig({
    lang: 'zh-CN',
    title: 'Xinl-UI',
    description: 'A more practical UI component library',
    lastUpdated: true,
    cleanUrls: true,
    head: [
        ['link', { rel: 'icon', href: '/logo-small.svg', type: 'image/svg+xml' }]
    ],
    themeConfig: {
        logo: '/logo-small.svg',
        sidebar: [
            { text: '指南', link: '/guide/' },
            { text: '快速开始', link: '/components/' },
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
        ],
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
    },
    base: '/xinl-ui/'
});