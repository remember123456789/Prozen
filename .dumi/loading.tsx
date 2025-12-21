import React from 'react';

const Loading: React.FC = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    fontSize: '16px',
    color: '#666'
  }}>
    加载中...
  </div>
);

export default Loading;