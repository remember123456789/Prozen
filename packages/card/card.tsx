import * as React from 'react';
import classNames from 'classnames';
import { getPrefixCls } from '../../script/Allconfig';
import { CardStyle } from './style';
import Loading from './component/Loading';
import useStyleHooks from './style';

//继承所有的div原生属性 并且覆盖title
export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    title?: React.ReactNode | string,
    // className?: string,
    children?: React.ReactNode,
    header?: React.ReactNode | string,
    loading?: boolean,
    style?: React.CSSProperties,
}
const InstanceCard = React.memo((props: CardProps) => {
    const { title, className, children, header, loading } = props;
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
    })

    const styles: any = getStyles(allClassNames);

    return (
        <>
            <CardStyle>
                {
                    loading ? <Loading className={getPrefixCls('loading')} loadingShow={loading} /> : (
                        <>
                            <div style={Object.assign({}, styles, props.style)} className={allClassNames}>
                                {head}
                                {body}
                            </div>
                        </>
                    )
                }


            </CardStyle>
        </>
    )
})
export default InstanceCard;