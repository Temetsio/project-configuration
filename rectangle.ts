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
import { Shape } from './Shape';

export class Rectangle extends Shape {
  private location: string;
  private size: string;

  constructor(location: string, size: string, style: string) {
    super(style);
    this.location = location;
    this.size = size;
  }

  public toString(): string {
    return `Rectangle with location ${this.location}, size ${this.size} and style ${this.getStyle()}`;
  }
}
import { BaseShape } from './BaseShape';

export class Rectangle extends BaseShape {
  private location: string;
  private size: string;

  constructor(location: string, size: string, style: string) {
    super(style);
    this.location = location;
    this.size = size;
  }

  public toString(): string {
    return `Rectangle with location ${this.location}, size ${this.size} and style ${this.getStyle()}`;
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    // Implement draw logic for rectangle
  }
}
import { BaseShape } from './BaseShape';
import { Point } from './Point';
import { Size } from './Size';

export class Rectangle extends BaseShape {
  private location: Point;
  private size: Size;

  public constructor(location: Point, size: Size, style: string) {
    super(style);
    this.location = location;
    this.size = size;
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    // Implementation for drawing rectangle
  }

  public toString(): string {
    return `Rectangle with location ${this.location.x}, ${this.location.y}, size ${this.size.width}x${this.size.height} and style ${this.getStyle()}`;
  }
}
export class Rectangle extends Shape {
    constructor(x: number, y: number, public width: number, public height: number) {
        super(x, y);
    }

    public static initWithXY(x: number, y: number): Rectangle {
        return new Rectangle(x, y, 100, 100);  
    }
}





