---
category: Components
group: 数据展示
title: Card
subtitle: 卡片
description: 通用卡片容器。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*QXO1SKEdIzYAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*5WDvQp_H7LUAAAAAAAAAAAAADrJ8AQ/original
---

### 卡片

卡片组件

```jsx
import { ProzenCard } from "prozen-card";
import React from "react";
export default () => {
  return (
    <>
      <ProzenCard title="我是表头" header={<h1>我是表头</h1>} loading={false}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </ProzenCard>
    </>
  );
};
```

#### 参数

| 参数       | 说明                                                | 类型                                 | 默认值    | 版本  |
| ---------- | --------------------------------------------------- | ------------------------------------ | --------- | ----- |
| cover      | 卡片封面                                            | ReactNode                            | -         |       |
| loading    | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | boolean                              | false     |       |
| size       | card 的尺寸                                         | `default` \| `small` \| `large`      | `default` |       |
| title      | 卡片标题                                            |                                      | -         |       |
| header     | 卡片的表头（优先级比 title 高）                     | ReactNode                            | -         | 1.0.0 |
| classNames | 配置卡片内置模块的 className                        | [Record<SemanticDOM, string>]        | -         | 1.0.0 |
| style      | 配置卡片内置模块的 style                            | [Record<SemanticDOM, CSSProperties>] | -         | 1.0.0 |