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
import { BaseShape } from './BaseShape';

export class Circle extends BaseShape {
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

  public draw(ctx: CanvasRenderingContext2D): void {
    // Implement draw logic for circle
  }
}
import { BaseShape } from './BaseShape';
import { Point } from './Point';

export class Circle extends BaseShape {
  private center: Point;
  private radius: number;

  public constructor(center: Point, radius: number, style: string) {
    super(style);
    this.center = center;
    this.radius = radius;
  }

  public draw(ctx: CanvasRenderingContext2D): void {
  }

  public toString(): string {
    return `Circle with center ${this.center.x}, ${this.center.y}, radius ${this.radius} and style ${this.getStyle()}`;
  }
}
export class Circle extends Shape {
    constructor(x: number, y: number, public radius: number) {
        super(x, y);
    }

    public static initWithXY(x: number, y: number): Circle {
        return new Circle(x, y, 50); 
    }
}





