import React from 'react';
import message from '../index';

const MessageDemo = () => {
  const showInfo = () => {
    message.info('这是一条普通消息');
  };

  const showSuccess = () => {
    message.success('操作成功！');
  };

  const showWarning = () => {
    message.warning('这是一条警告消息');
  };

  const showError = () => {
    message.error('操作失败，请重试');
  };

  const showWithIcon = () => {
    message.show({
      content: '带图标的自定义消息',
      type: 'success',
      icon: 'jinru',
      duration: 5000
    });
  };

  return (
    <div>
      <h3>消息提示示例</h3>
      <div style={{ marginBottom: 16 }}>
        <button onClick={showInfo} style={{ marginRight: 8 }}>显示信息</button>
        <button onClick={showSuccess} style={{ marginRight: 8 }}>显示成功</button>
        <button onClick={showWarning} style={{ marginRight: 8 }}>显示警告</button>
        <button onClick={showError} style={{ marginRight: 8 }}>显示错误</button>
        <button onClick={showWithIcon}>显示带图标消息</button>
      </div>
    </div>
  );
};

export default MessageDemo;