import QRCode from 'qrcode'

export function setupQRcode(element: HTMLButtonElement) {
    const generateQRcode = (canvas: HTMLCanvasElement | null) => {
        const qrCodeInput = document.getElementById('qr-code-input') as HTMLInputElement;
        console.log(qrCodeInput?.value);
        const qrCodeString = qrCodeInput?.value;
        if (canvas && qrCodeString) {
            QRCode.toCanvas(canvas, qrCodeString, {}).then(() => console.log('sucess')).catch((err: Error) => console.error(err))
        }
    }
    const canvas = document.getElementById('qr-code-canvas');
    element.addEventListener('click', () => {
        generateQRcode(canvas as HTMLCanvasElement);
    })
}
