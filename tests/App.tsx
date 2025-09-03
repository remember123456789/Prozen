import { ProzenCard } from "@/card/index";
import React, { useEffect } from "react";
export default () => {
    const [loading, setLoading] = React.useState(true);
    let timer: any = null
    useEffect(() => {
        timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => {
            clearTimeout(timer);
            timer = null;
        };
    }, [])
    return (
        <>

            <ProzenCard style={{
                width: '800',
            }} title="我是表头" header={<h2>我是表头</h2>} loading={loading} size="default" >

                <ProzenCard style={{
                    width: '700',
                }} title="我是表头" header={<h2>我是表头</h2>} loading={loading} size="default" >
                    <ProzenCard style={{
                        width: '600',
                    }} title="我是表头" header={<h2>我是表头</h2>} loading={loading} size="default" >
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </ProzenCard>
                </ProzenCard>
            </ProzenCard>
        </>
    );
};