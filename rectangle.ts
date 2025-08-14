const canvas: HTMLCanvasElement = document.getElementById("game") as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
if (ctx) {
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const recWidth: number = 200;
    const recHeight: number = 100;
    const rectX: number = (canvasWidth - recWidth)/ 2;
    const rectY: number = (canvasHeight - recHeight) / 2;
    ctx.fillStyle = "#3498db";
    ctx.fillRect(rectX, rectY, recWidth, recHeight);
}   else {
    console.error("2d context not supported or canvas is null");
}