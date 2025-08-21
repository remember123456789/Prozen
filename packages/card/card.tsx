import * as React from 'react';
import classNames from 'classnames';

//继承所有的div原生属性 并且覆盖title
export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    title?: React.ReactNode | string,
    className?: string,
    headerClassName?: string,
    children?: React.ReactNode,
    header?: React.ReactNode | string,
}
const InstanceCard = (props: CardProps) => {
    const { title, className, headerClassName, children, header } = props;
    let head = header
    if (head) {
        head = (
            <div>
                {head}
            </div>
        )
    } else {
        head = title
    }
    return (
        <>
            <div className={className}>
                {head}
                {children}
            </div>
        </>
    )
}
export default InstanceCard;


