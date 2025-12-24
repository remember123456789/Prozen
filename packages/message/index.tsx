import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import classNames from 'classnames';
import { getPrefixCls } from '../../script/Allconfig';

import './style/index.less'

export interface MessageProps {
    content: string;
    duration?: number;
    type?: 'info' | 'success' | 'warning' | 'error';
    icon?: string;
}

interface MessageItem extends MessageProps {
    id: number;
}

const CreateMessageDom = ({ message }: { message: MessageItem }) => {
    const { content, type, icon } = message;

    // 生成消息类名
    const allClassNames = classNames(
        'message-container',
        `${getPrefixCls()}-message-${type}`
    );

    return (
        <div className={allClassNames}>
            {icon && <i className={`iconfont icon-${icon}`}></i>}
            <div>{content}</div>
        </div>
    )
}

const createDom = () => {
    let container = document.createElement('div');
    container.className = 'prozen-message-container';
    document.body.appendChild(container);
    return container;
}

class MessageClass {
    private messages: MessageItem[] = [];
    private container: HTMLElement | null = null;
    private root: ReactDOM.Root | null = null;
    private idCounter = 0;

    private ensureContainer() {
        if (!this.container) {
            this.container = createDom();
            this.root = ReactDOM.createRoot(this.container);
        }
    }

    private renderMessages() {
        if (!this.root) return;

        this.root.render(
            <>
                {this.messages.map((message) => (
                    <CreateMessageDom key={message.id} message={message} />
                ))}
            </>
        );
    }

    private removeMessage(id: number) {
        this.messages = this.messages.filter(msg => msg.id !== id);
        this.renderMessages();

        if (this.messages.length === 0) {
            // 清理容器
            setTimeout(() => {
                if (this.messages.length === 0 && this.container) {
                    this.root?.unmount();
                    this.root = null;
                    document.body.removeChild(this.container);
                    this.container = null;
                }
            }, 300);
        }
    }

    show(props: MessageProps) {
        this.ensureContainer();

        const id = ++this.idCounter;
        const message: MessageItem = {
            id,
            ...props,
            duration: props.duration || 3000
        };

        this.messages.push(message);
        this.renderMessages();

        // 设置自动消失
        setTimeout(() => {
            this.removeMessage(id);
        }, message.duration);
    }

    info(content: MessageProps['content'], duration?: number) {
        this.show({ content, duration, type: 'info' });
    }

    success(content: MessageProps['content'], duration?: number) {
        this.show({ content, duration, type: 'success' });
    }

    warning(content: MessageProps['content'], duration?: number) {
        this.show({ content, duration, type: 'warning' });
    }

    error(content: MessageProps['content'], duration?: number) {
        this.show({ content, duration, type: 'error' });
    }
}

const message = new MessageClass();

export default message;
export type { MessageItem };