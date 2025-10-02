export class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export class Size {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
}
export class Circle {
  center: Point;
  radius: number;

  constructor(x: number, y: number, radius: number) {
    this.center = new Point(x, y);
    this.radius = radius;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
    ctx.stroke();
  }
}
import { Shape } from './Shape';

export class Circle extends Shape {
  private center: string;
  private radius: number;

  constructor(center: string, radius: number, style: string) {
    super(style);
    this.center = center;
    this.radius = radius;
  }

  public toString(): string {
    return `Circle with center ${this.center}, radius ${this.radius} and style ${this.getStyle()}`;
  }
}

