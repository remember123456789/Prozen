import * as React from 'react';
import classNames from 'classnames';
import { getPrefixCls, isSizeCls } from '../../script/Allconfig';
import { ButtonStyle } from './style';

// 按钮类型
export type ButtonType = 'primary' | 'default' | 'dashed' | 'text' | 'link' | 'underline';
// 按钮大小
export type ButtonSize = 'small' | 'default' | 'large';

// 按钮属性接口
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    // 按钮类型
    type?: ButtonType;
    // 按钮大小
    size?: ButtonSize;
    // 是否禁用
    disabled?: boolean;
    // 是否加载中
    loading?: boolean;
    // 子节点
    children?: React.ReactNode;
    // 样式
    style?: React.CSSProperties;
    // 圆角
    round?: boolean;
    // 成功状态
    success?: boolean;
    // 警告状态
    warning?: boolean;
    // 错误状态
    error?: boolean;
    // 图标
    icon?: string;
}

const InstanceButton = React.memo((props: ButtonProps) => {
    const {
        type = 'default',
        size = 'default',
        disabled = false,
        loading = false,
        children,
        className,
        style,
        round = false,
        success,
        warning,
        error,
        icon,
        ...restProps
    } = props;

    // 生成按钮的类名
    const allClassNames = classNames(className, {
        [`${getPrefixCls()}-button`]: true,
        [`${getPrefixCls()}-button-${type}`]: true,
        [`${getPrefixCls()}-button-${size}`]: isSizeCls(size),
        [`${getPrefixCls()}-button-disabled`]: disabled || loading,
        [`${getPrefixCls()}-button-loading`]: loading,
        [`${getPrefixCls()}-button-round`]: round,
        [`${getPrefixCls()}-button-success`]: success,
        [`${getPrefixCls()}-button-warning`]: warning,
        [`${getPrefixCls()}-button-error`]: error,
    })

    return (
        <>
            <ButtonStyle customStyle={style} />
            <button
                className={allClassNames}
                disabled={disabled || loading}
                style={style}
                {...restProps}
            >
                {loading && <span className={`${getPrefixCls()}-button-loading-icon`}>⏳</span>}
                {icon && <span className={`${getPrefixCls()}-button-icon iconfont icon-${icon}`}></span>}
                {children}
            </button>
        </>
    );
});

export default InstanceButton;