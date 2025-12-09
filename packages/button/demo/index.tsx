import React from 'react';
import { ProzenButton } from '../index';

const ButtonDemo = () => {
  return (
    <div>
      <h3>按钮类型</h3>
      <div style={{ marginBottom: 20 }}>
        <ProzenButton type="primary" style={{ marginRight: 8 }}>Primary Button</ProzenButton>
        <ProzenButton type="default" style={{ marginRight: 8 }}>Default Button</ProzenButton>
        <ProzenButton type="dashed" style={{ marginRight: 8 }}>Dashed Button</ProzenButton>
        <ProzenButton type="text" style={{ marginRight: 8 }}>Text Button</ProzenButton>
        <ProzenButton type="link">Link Button</ProzenButton>
      </div>

      <h3>按钮大小</h3>
      <div style={{ marginBottom: 20 }}>
        <ProzenButton type="primary" size="small" style={{ marginRight: 8 }}>Small Button</ProzenButton>
        <ProzenButton type="primary" size="default" style={{ marginRight: 8 }}>Default Button</ProzenButton>
        <ProzenButton type="primary" size="large">Large Button</ProzenButton>
      </div>

      <h3>禁用状态</h3>
      <div style={{ marginBottom: 20 }}>
        <ProzenButton type="primary" disabled style={{ marginRight: 8 }}>Disabled Primary</ProzenButton>
        <ProzenButton type="default" disabled style={{ marginRight: 8 }}>Disabled Default</ProzenButton>
        <ProzenButton type="dashed" disabled>Disabled Dashed</ProzenButton>
      </div>

      <h3>加载状态</h3>
      <div>
        <ProzenButton type="primary" loading style={{ marginRight: 8 }}>Loading Primary</ProzenButton>
        <ProzenButton type="default" loading style={{ marginRight: 8 }}>Loading Default</ProzenButton>
        <ProzenButton type="dashed" loading>Loading Dashed</ProzenButton>
      </div>
    </div>
  );
};

export default ButtonDemo;