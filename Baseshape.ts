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
export class Shape {
  protected style: string;

  constructor(style: string) {
    this.style = style;
  }

  public getStyle(): string {
    return this.style;
  }

  public toString(): string {
    return `Shape with style ${this.style}`;
  }
}
import { Shape } from './ShapeInterface';

export class BaseShape implements Shape {
  protected style: string;

  constructor(style: string) {
    this.style = style;
  }

  public getStyle(): string {
    return this.style;
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    // Base draw does nothing
  }

  public toString(): string {
    return `Shape with style ${this.style}`;
  }
}
import { Shape } from './ShapeInterface';

export class BaseShape implements Shape {
  private style: string;

  public constructor(style: string) {
    this.style = style;
  }

  public getStyle(): string {
    return this.style;
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    // default empty implementation
  }

  public toString(): string {
    return `Shape with style ${this.style}`;
  }
}
import { Shape } from './ShapeInterface';


export class BaseShape implements Shape {
  // The style of the shape (e.g., color, stroke).
  private style: string;

  public constructor(style: string) {
    this.style = style;
  }

  public getStyle(): string {
    return this.style;
  }

  public draw(ctx: CanvasRenderingContext2D): void {
 
  }
  public toString(): string {
    return `Shape with style ${this.style}`;
  }
}





