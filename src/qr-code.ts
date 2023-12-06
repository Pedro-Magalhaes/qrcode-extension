import QRCode from 'qrcode'

export function setupQRcode(element: HTMLButtonElement, url: string) {
    let counter = 0
    const setCounter = (count: number) => {
        counter = count
        element.innerHTML = `count is ${counter}`
    }
    const canvas = document.getElementById('qr-code-canvas');
    if (canvas != null) {
        QRCode.toCanvas(canvas, url, {}).then(() => console.log('sucess')).catch((err: Error) => console.error(err))
    }
    element.addEventListener('click', () => setCounter(counter + 1))
    setCounter(0)
}
