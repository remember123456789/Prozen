import { createGlobalStyle } from 'styled-components';

interface ButtonStyleProps {
    customStyle?: React.CSSProperties;
}

export const ButtonStyle = createGlobalStyle<ButtonStyleProps>`
    :root {
        --Prozen-primary-color: #1890ff;
        --Prozen-success-color: #52c41a;
        --Prozen-warning-color: #faad14;
        --Prozen-error-color: #f5222d;
        --Prozen-info-color: #1890ff;
        --Prozen-heading-color: rgba(0, 0, 0, 0.85);
        --Prozen-text-color: rgba(0, 0, 0, 0.65);
        --Prozen-text-color-secondary: rgba(0, 0, 0, 0.45);
        --Prozen-border-color: #e8e8e8;
        --Prozen-border-radius: 4px;
        --Prozen-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }

    /* 按钮基础样式 */
    .prozen-button {
        display: inline-block;
        box-sizing: border-box;
        border: 1px solid transparent;
        border-radius: var(--Prozen-border-radius);
        font-size: 14px;
        font-weight: 500;
        line-height: 1.5715;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        transition: all 0.3s ease;
        user-select: none;
        padding: 4px 15px;
        margin: 0;
        outline: none;
        background-color: #fff;
        color: var(--Prozen-text-color);
        border-color: var(--Prozen-border-color);
    }

    /* 按钮悬停状态 */
    .prozen-button:hover {
        opacity: 0.85;
    }

    /* 按钮激活状态 */
    .prozen-button:active {
        opacity: 0.9;
        transform: translateY(1px);
    }

    /* 按钮聚焦状态 */
    .prozen-button:focus {
        box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }

    /* 按钮禁用状态 */
    .prozen-button-disabled {
        opacity: 0.65;
        cursor: not-allowed;
    }

    /* 按钮类型样式 */
    .prozen-button-primary {
        background-color: var(--Prozen-primary-color);
        color: #fff;
        border-color: var(--Prozen-primary-color);
    }

    .prozen-button-primary:hover {
        background-color: #40a9ff;
        border-color: #40a9ff;
    }

    .prozen-button-dashed {
        border-style: dashed;
    }

    .prozen-button-dashed:hover {
        border-color: var(--Prozen-primary-color);
        color: var(--Prozen-primary-color);
    }

    .prozen-button-text {
        background-color: transparent;
        border-color: transparent;
        color: var(--Prozen-text-color);
    }

    .prozen-button-text:hover {
        background-color: rgba(24, 144, 255, 0.06);
        color: var(--Prozen-primary-color);
    }

    .prozen-button-link {
        background-color: transparent;
        border-color: transparent;
        color: var(--Prozen-primary-color);
        text-decoration: none;
    }

    .prozen-button-link:hover {
        color: #40a9ff;
        text-decoration: underline;
    }

    /* 按钮大小样式 */
    .prozen-button-small {
        padding: 2px 8px;
        font-size: 12px;
    }

    .prozen-button-large {
        padding: 6px 18px;
        font-size: 16px;
    }

    /* 加载状态样式 */
    .prozen-button-loading {
        position: relative;
        pointer-events: none;
    }

    .prozen-button-loading-icon {
        margin-right: 4px;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    /* 按钮间距 */
    .prozen-button + .prozen-button {
        margin-left: 8px;
    }
`;