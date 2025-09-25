import { Rectangle } from './shapes.js';

const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

if (ctx) {
  const rect1 = new Rectangle(40, 50, 200, 100);
  const rect2 = new Rectangle(300, 100, 150, 80);
  const rect3 = new Rectangle(100, 200, 120, 60);

  rect1.draw(ctx);
  rect2.draw(ctx);
  rect3.draw(ctx);
}
import { Rectangle, Circle } from './shapes.js';

const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

if (ctx) {
  const rect1 = new Rectangle(40, 50, 200, 100);
  const rect2 = new Rectangle(300, 100, 150, 80);

  rect1.draw(ctx);
  rect2.draw(ctx);

  const circle1 = new Circle(150, 300, 40);
  const circle2 = new Circle(400, 250, 60);

  circle1.draw(ctx);
  circle2.draw(ctx);
}
import { Rectangle, Circle } from './shapes.js';

const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

if (ctx) {
  const rect1 = new Rectangle(40, 50, 200, 100);
  const rect2 = new Rectangle(300, 100, 150, 80);

  rect1.draw(ctx);
  rect2.draw(ctx);

  const circle1 = new Circle(150, 300, 40);
  const circle2 = new Circle(400, 250, 60);

  circle1.draw(ctx);
  circle2.draw(ctx);
}
