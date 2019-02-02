import React from 'react';
import { YMInitializer } from 'react-yandex-metrika';

function isProd(): boolean {
    return process.env.ASPNETCORE_ENVIRONMENT === 'production'
        || process.env.NODE_ENV === 'production';
}

export const YandexMetrica = (props: any) => {
    if (isProd()) {
        return (
            <YMInitializer accounts={props.accounts}/>
        )
    } else {
        return (<div/>);
    }
}
