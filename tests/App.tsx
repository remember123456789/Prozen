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
            <ProzenCard title="我是表头" header={<h1>我是表头</h1>} loading={loading} >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </ProzenCard>
        </>
    );
};