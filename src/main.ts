import './style.css'
import { setupCounter } from './counter.ts'
import { setupQRcode } from './qr-code.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Qr code generator</h1>
    <div class="card">
      <label>Digite o texto</label>
      <input type="text" id="qr-code-input"></input>
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <div class="qr-code-canvas-container">
      <canvas id="qr-code-canvas" class="qr-code-canvas"></canvas>
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
setupQRcode(document.querySelector<HTMLButtonElement>('#counter')!)
