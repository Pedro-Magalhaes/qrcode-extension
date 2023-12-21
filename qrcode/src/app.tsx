import { useRef, useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import QRCode from 'qrcode'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)
  const [currTab, setTab] = useState(TABS.TEXT)



  return (
    <>
      <div class="nav-bar">
        <button class="nav-bar-item" onClick={() => setTab(TABS.TAB)}>tab</button>
        <button class="nav-bar-item" onClick={() => setTab(TABS.TEXT)}>text</button>
        <button class="nav-bar-item" onClick={() => setTab(TABS.WIFI)}>wifi</button>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
      <QrcodeComponent tab={currTab}></QrcodeComponent>
    </>
  )
}

export function MyComponent(props: any) {
  return <div>My name is {props.name}.</div>;
}

export function QrcodeComponent(props: any) {
  switch (props.tab) {
    case TABS.TAB:
      return QrTab();
      break;
    case TABS.WIFI:
      return QrWifi();
    default:
      return QrText();
      break;
  }
}

function QrText() {

  return (
    <>
      <div>text</div>
      <Qrcanvas></Qrcanvas>
    </>
  )
}

function QrTab() {
  return (
    <>
      <div>tab</div>
      <Qrcanvas text="tab"></Qrcanvas>
    </>
  )
}

function QrWifi() {
  return (
    <>
      <div>wifi</div>
      <Qrcanvas text="wifi"></Qrcanvas>
    </>
  )
}

export function Qrcanvas(props: any) {
  const text: string = props?.text || 'TesteTeste';
  const canvasId = 'qrcode-canvas-' + Math.floor(Math.random() * 10000)
  const canvas = useRef(null);
  if (text != null && text.length > 0) {
    QRCode.toDataURL(text, {}).then((uri) => {
      if (canvas.current) {
        canvas.current.src = uri;
      }
      console.log(canvas);
    }).catch((err: Error) => console.error(err))
  }
  return (
    <>
      <div>
        <img ref={canvas} id={canvasId}></img>
      </div>
    </>
  )
}



export enum TABS {
  TAB = 'tab',
  WIFI = 'wifi',
  TEXT = 'text'
}
