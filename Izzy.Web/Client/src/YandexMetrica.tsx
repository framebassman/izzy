import React from 'react';
import { YMInitializer } from 'react-yandex-metrika';

function isProd(): boolean {
  return process.env.ASPNETCORE_ENVIRONMENT === 'production'
    || process.env.NODE_ENV === 'production';
}

interface YandexMetricaProps {
  accounts: number[]
}

export const YandexMetrica = (props: YandexMetricaProps) => {
  if (isProd()) {
    return (
      <YMInitializer 
        accounts={props.accounts} 
        options={{webvisor: true}} 
      />
    )
  } else {
    return (<div/>);
  }
}
