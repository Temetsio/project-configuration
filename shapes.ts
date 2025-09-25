export class Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
  }
}
export class Circle {
  x: number;
  y: number;
  radius: number;

  constructor(x: number, y: number, radius: number) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.stroke();
  }
}
// Add this at the top of shapes.ts

export class Style {
  strokeStyle: string;
  fillStyle: string;
  lineWidth: number;
  fill: boolean;

  constructor(
    strokeStyle: string = 'black',
    fillStyle: string = '',
    lineWidth: number = 1,
    fill: boolean = false
  ) {
    this.strokeStyle = strokeStyle;
    this.fillStyle = fillStyle;
    this.lineWidth = lineWidth;
    this.fill = fill;
  }

  apply(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = this.strokeStyle;
    ctx.lineWidth = this.lineWidth;
    if (this.fill) {
      ctx.fillStyle = this.fillStyle;
    }
  }
}
export class Shape {
  style: string;

  constructor(style: string = 'black') {
    this.style = style;
  }
}
export class Shape {
  style: string;

  constructor(style: string = 'black') {
    this.style = style;
  }
}




