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
abstract class Shape {
  abstract draw(ctx: CanvasRenderingContext2D): void;
}
export abstract class Shape {
  style: string;

  constructor(style: string = 'black') {
    this.style = style;
  }
  abstract draw(ctx: CanvasRenderingContext2D): void;
}
export abstract class Shape {
  style: string;

  constructor(style: string = 'black') {
    this.style = style;
  }

  abstract draw(ctx: CanvasRenderingContext2D): void;

  toString(): string {
    return `Shape with style ${this.style}`;
  }
}
export class Rectangle extends Shape {
  location: Point;
  size: Size;

  constructor(x: number, y: number, width: number, height: number, style: string = 'black') {
    super(style);
    this.location = new Point(x, y);
    this.size = new Size(width, height);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.strokeStyle = this.style;
    ctx.rect(this.location.x, this.location.y, this.size.width, this.size.height);
    ctx.stroke();
  }

  override toString(): string {
    return `Rectangle with location (${this.location.x}, ${this.location.y}), size (${this.size.width} x ${this.size.height}) and style ${this.style}`;
  }
}
export class Circle extends Shape {
  center: Point;
  radius: number;

  constructor(x: number, y: number, radius: number, style: string = 'black') {
    super(style);
    this.center = new Point(x, y);
    this.radius = radius;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.strokeStyle = this.style;
    ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
    ctx.stroke();
  }

  override toString(): string {
    return `Circle with center (${this.center.x}, ${this.center.y}), radius ${this.radius} and style ${this.style}`;
  }
}
export class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  toString(): string {
    return `${this.x}, ${this.y}`;
  }
}

export class Size {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  toString(): string {
    return `${this.width} x ${this.height}`;
  }
}
export abstract class BaseShape implements Shape {
  style: string;

  constructor(style: string = 'black') {
    this.style = style;
  }

  abstract draw(ctx: CanvasRenderingContext2D): void;

  toString(): string {
    return `Shape with style ${this.style}`;
  }
}
export interface Shape {
  draw(ctx: CanvasRenderingContext2D): void;
  toString(): string;
}








