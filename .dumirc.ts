import { defineConfig } from 'dumi';

export default defineConfig({
    resolve: {
        atomDirs: [
            { type: 'component', dir: '../pro/src' }, // 指向组件源码
        ]
    },
    favicons: [
        './public/zbpve-gau6m-001.ico'
    ],
    themeConfig: {
        // 是否显示最后一次修改时间
        lastUpdated: true,
        
    }
})