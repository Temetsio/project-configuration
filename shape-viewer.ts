import { Shape } from './shapes.js';
export class ShapeViewer {
  private ctx: CanvasRenderingContext2D;
  private shapes: Shape[];

  constructor(canvasElement: HTMLCanvasElement) {
    const context = canvasElement.getContext('2d');
    if (!context) throw new Error("Unable to get 2D context from canvas.");
    
    this.ctx = context;
    this.shapes = [];
  }

  addShape(shape: Shape): void {
    this.shapes.push(shape);
    shape.draw(this.ctx); 
  }

  addShapes(shapes: Shape[]): void {
    for (const shape of shapes) {
      this.addShape(shape);
    }
  }

  draw(): void {
    for (const shape of this.shapes) {
      shape.draw(this.ctx);
    }
  }
}
import { ShapeViewer } from './shape-viewer.js';
import { Rectangle, Circle } from './shapes.js';
const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;

const viewer = new ShapeViewer(canvas);


const shapes = [
  new Rectangle(30, 40, 100, 60, 'red'),
  new Circle(200, 100, 50, 'blue'),
  new Rectangle(350, 150, 120, 90, 'green'),
  new Circle(450, 250, 40, 'purple')
];


viewer.addShapes(shapes);
for (const shape of this.shapes) {
  console.log(shape.toString());
}
logShapes(): void {
  for (const shape of this.shapes) {
    console.log(shape.toString());
  }
}
import type { Shape } from './shapes.js';  

class ShapeViewer {
  shapes: Shape[];
}
export class ShapeViewer {
  private ctx: CanvasRenderingContext2D;
  private shapes: Shape[];

  public constructor(canvasElement: HTMLCanvasElement) {
    this.ctx = canvasElement.getContext('2d')!;
    this.shapes = [];
  }

  public addShapes(shapes: Shape[]): void {
    this.shapes.push(...shapes);
    this.draw();
  }

  public addShape(shape: Shape): void {
    this.shapes.push(shape);
    this.draw();
  }

  private draw(): void {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    for (const shape of this.shapes) {
      shape.draw(this.ctx);
    }
  }
}
import { ShapeViewer } from './ShapeViewer';
import { Rectangle } from './Rectangle';
import { Circle } from './Circle';

const viewer = new ShapeViewer();

// Add shapes
viewer.addShape(new Rectangle('10, 20', '100x200', 'solid red'));
viewer.addShape(new Circle('30, 40', 50, 'dotted blue'));

// Log the string representation of each shape
for (const shape of viewer.shapes) {
  console.log(shape.toString());
}

