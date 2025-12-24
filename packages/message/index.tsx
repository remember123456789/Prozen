import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import classNames from 'classnames';
import { getPrefixCls } from '../../script/Allconfig';
// import { MessageStyle } from './style';
import './style/index.less'
export interface MessageProps {
    content: string;
    duration?: number;
    type?: 'info' | 'success' | 'warning' | 'error';
}
const CreateMessageDom = (props: MessageProps) => {

    const { content, duration, type } = props;
    // 生成按钮的类名
    const allClassNames = classNames({
        [`${getPrefixCls()}-message-${type}`]: true,
    })

    return (
        <>
            {/* <MessageStyle></MessageStyle> */}
            <div className={'message-container  ' + allClassNames}>
                {/* <i className='iconfont icon-jinru'></i> */}
                <span>{content}</span>
            </div>
        </>
    )
}
const createDom = () => {
    let container = document.createElement('div');
    container.className = 'prozen-message-container';
    document.body.appendChild(container);
    return container;
}

class MessageClass {
    private timer: NodeJS.Timeout | null = null;
    private root: ReactDOM.Root | null = null;

    show(props: MessageProps) {
        let container = document.querySelector('.prozen-message-container');
        if (!container) {
            container = createDom();
        }

        // 清理上一次的实例
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
        if (this.root) {
            this.root.unmount();
            this.root = null;
        }

        // 创建新实例
        this.root = ReactDOM.createRoot(container as HTMLElement);
        this.root.render(<CreateMessageDom {...props} />);

        this.timer = setTimeout(() => {
            this.root?.unmount();
            this.timer = null;
            this.root = null;
        }, props.duration || 3000);
    }

    info(content: MessageProps['content']) {
        this.show({ content, duration: 3000, type: 'info' });
    }
    success(content: MessageProps['content']) {
        this.show({ content, duration: 3000, type: 'success' });
    }
    warning(content: MessageProps['content']) {
        this.show({ content, duration: 3000, type: 'warning' });
    }
    error(content: MessageProps['content']) {
        this.show({ content, duration: 3000, type: 'error' });
    }
}


export default new MessageClass();