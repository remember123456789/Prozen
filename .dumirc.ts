import { defineConfig } from "dumi";
import path from "path";

export default defineConfig({
  resolve: {
    atomDirs: [{ type: "component", dir: "packages" }],
    docDirs: ["docs"], //存放普通文档的目录
  },
  //别名
  alias: {
    "prozen-card": path.join(__dirname, "packages/card"),
    "prozen-button": path.join(__dirname, "packages/button"),
    "prozen-message": path.join(__dirname, "packages/message"),
  },
  //配置文档目录
  favicons: ["https://youke1.picui.cn/s1/2025/08/19/68a4948e18150.png"],
  themeConfig: {
    logo: "https://youke1.picui.cn/s1/2025/08/19/68a4948e18150.png",
    // 是否显示最后一次修改时间
    lastUpdated: true,
    // 配置文档标题
    title: "Prozen",
    // 配置导航栏
    nav: {
      "zh-CN": [
        { title: "文档", link: "/docs/component" },
        { title: "组件", link: "/components" },
        { title: "修改日志", link: "/changelog" },
        {
          title: "国内镜像",
          link: "https://pro-components.antdigital.dev",
        },
      ],
    },
    sidebar: {
      "/components": [
        {
          title: "组件",
          children: [
            {
              title: "卡片",
              link: "/components/card",
            },
            {
              title: "按钮",
              link: "/components/button",
            },
            {
              title: "消息提示",
              link: "/components/message",
            },
          ],
        },
      ],
      "/docs": [
        {
          title: "文档",
          children: [
            {
              title: "介绍",
              link: "/docs/introduce",
            },
          ],
        },
      ],
      "/changelog": [
        {
          title: "更新时间",
          children: [
            {
              title: "2025-09-02",
              link: "/changelog",
            },
          ],
        },
      ],
    },
    footer: "Copyright © 2025 | prozen",
  },
});
