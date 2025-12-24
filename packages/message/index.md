---
title: Message 消息提示
---

# Message 消息提示

全局展示操作反馈信息。

## 何时使用

- 可提供成功、警告和错误等反馈信息。
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## 代码演示

### 基础用法

```tsx
import React from "react";
import message from "prozen-message";

const App = () => {
  const showInfo = () => {
    message.info("这是一条普通消息");
  };

  const showSuccess = () => {
    message.success("操作成功！");
  };

  const showWarning = () => {
    message.warning("这是一条警告消息");
  };

  const showError = () => {
    message.error("操作失败，请重试");
  };

  return (
    <div>
      <button onClick={showInfo}>显示信息</button>
      <button onClick={showSuccess}>显示成功</button>
      <button onClick={showWarning}>显示警告</button>
      <button onClick={showError}>显示错误</button>
    </div>
  );
};

export default App;
```

### 自定义消息

```tsx
import React from "react";
import message from "prozen-message";

const App = () => {
  const showCustomMessage = () => {
    message.show({
      content: "带图标的自定义消息",
      type: "success",
      icon: "jinru",
      duration: 5000,
    });
  };

  return <button onClick={showCustomMessage}>显示自定义消息</button>;
};

export default App;
```

## API

### message.show(config)

| 参数     | 说明                     | 类型                                          | 默认值   |
| -------- | ------------------------ | --------------------------------------------- | -------- |
| content  | 消息内容                 | `string`                                      | -        |
| duration | 自动关闭的延时，单位毫秒 | `number`                                      | `3000`   |
| type     | 消息类型                 | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` |
| icon     | 自定义图标               | `string`                                      | -        |

### 全局方法

还提供了一些全局方法，方便快速调用：

- `message.info(content, duration?)`
- `message.success(content, duration?)`
- `message.warning(content, duration?)`
- `message.error(content, duration?)`

## 使用说明

消息组件会自动在页面顶部居中显示，并在一段时间后自动消失。多个消息会按照顺序堆叠显示。

### 可用图标

支持的图标类型包括：

- `jinru` - 进入箭头
- `guanbi` - 关闭图标
- `bofang` - 播放图标
- `fanhui` - 返回图标
- `xihuan` - 喜欢图标
- `gengduo` - 更多图标
- `shouye` - 首页图标
- `xiaoxi` - 消息图标
- `faxian` - 发现图标
- `gerenzhongxin` - 个人中心图标

更多图标请参考图标字体文件。
