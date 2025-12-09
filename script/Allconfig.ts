import React from "react";

export const defaultPrefixCls = "prozen";

// 获取前缀类名
export const getPrefixCls = (prefixCls?: string, customPrefixCls?: string) => {
  if (customPrefixCls) {
    return customPrefixCls;
  }
  return prefixCls ? `${defaultPrefixCls}-${prefixCls}` : defaultPrefixCls;
};
export const isSizeCls = (size?: "small" | "default" | "large" | undefined) => {
  if (size) {
    return ["small", "default", "large"].includes(size);
  }
  return false;
};