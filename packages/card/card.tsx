import * as React from 'react';
import classNames from 'classnames';
import { getPrefixCls } from '../../script/Allconfig';
import { CardStyle } from './style';
import Loading from './component/Loading';
import useStyleHooks from './style';
import { isSizeCls } from '../../script/Allconfig';

//继承所有的div原生属性 并且覆盖title
export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    title?: React.ReactNode | string,
    // className?: string,
    children?: React.ReactNode,
    header?: React.ReactNode | string,
    loading?: boolean,
    style?: React.CSSProperties,
    size?: 'small' | 'default' | 'large',
}
const InstanceCard = React.memo((props: CardProps) => {
    const { title, className, children, header, loading, size } = props;
    const { getStyles } = useStyleHooks();
    let head = header
    let body = children
    head = (
        <div className={getPrefixCls('head')}>
            {head ? head : title}
        </div>
    )
    body = (
        <div className={getPrefixCls('body')}>
            {children}
        </div>
    )
    const allClassNames = classNames(className, {
        [`${getPrefixCls('loading')}`]: loading,
        [`${getPrefixCls('hase')}`]: false,
        [`${getPrefixCls(`${size && size}`)}`]: isSizeCls(size),
    })
    console.log(allClassNames, 'allClassNames');

    const styles: any = getStyles(allClassNames);

    return (
        <>
            <CardStyle>
                {
                    <>
                        <div style={Object.assign({}, styles, props.style)} className={allClassNames}>
                            {loading && <Loading loadingShow={loading} />}
                            {head}
                            {body}
                        </div>
                    </>
                }
            </CardStyle>
        </>
    )
})
export default InstanceCard;