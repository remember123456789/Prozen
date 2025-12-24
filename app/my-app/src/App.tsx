import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProzenCard } from "@prozen/card";
import { ProzenButton } from "@prozen/button";
import Message from "@prozen/message";
import { useTimeFillo } from "./hook/useTimeFillo";
function App() {
  const [count, setCount] = useState(0)
  const { time } = useTimeFillo(100);


  return (
    <>
      <div>
        <ProzenButton icon="InTo" onClick={() => {
          Message.info('这是一条info消息');
          console.log(Message)
        }} type="primary" size='default' success> 点击</ProzenButton>
        <ProzenButton icon="InTo" onClick={() => {
          Message.success('这是一条success消息');
          console.log(Message)
        }} type="primary" size='default' success> 点击</ProzenButton>
        <ProzenButton icon="InTo" onClick={() => {
          Message.warning('这是一条warning消息');
          console.log(Message)
        }} type="primary" size='default' success> 点击</ProzenButton>
        <ProzenButton icon="InTo" onClick={() => {
          Message.error('这是一条error消息');
          console.log(Message)
        }} type="primary" size='default' success> 点击</ProzenButton>
      </div>

    </>
  )
}

export default App
