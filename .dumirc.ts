import { defineConfig } from 'dumi';

export default defineConfig({
    resolve: {
        atomDirs: [
            { type: 'component', dir: '../pro/src' }, // 指向组件源码
        ]
    },
    // favicons: [
    //     './public/zbpve-gau6m-001.ico'
    // ],
    themeConfig: {
        logo: "https://youke1.picui.cn/s1/2025/08/19/68a4948e18150.png",
        // 是否显示最后一次修改时间
        lastUpdated: true,
        //配置导航栏
        nav: {
            'zh-CN': [
                { title: '文档', link: '/docs' },
                { title: '组件', link: '/components' },
                { title: '修改日志', link: '/changelog' },
                // { title: '在线预览', link: '/playground' },
                {
                    title: '国内镜像',
                    link: 'https://pro-components.antdigital.dev',
                },
            ],
            'en-US': [
                { title: 'Docs', link: '/en-US/docs' },
                { title: 'Components', link: '/en-US/components' },
                { title: 'Changelog', link: '/en-US/changelog' },
                // { title: 'Playground', link: '/en-US/playground' },
            ],
        },
    }
})