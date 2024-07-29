// Define a base interface for shapes
interface Shape {
  calculateArea: () => number;
  calculatePerimeter: () => number;
}

// TODO: Define a Circle class

// TODO: Define a Rectangle class

// TODO: Define a Triangle class

// Calculates the total area of an array of shapes
function calculateTotalArea(shapes: Shape[]): number {
  let totalArea = 0;
  for (const shape of shapes) {
    totalArea += shape.calculateArea();
  }
  return totalArea;
}

// Calculates the total perimeter of an array of shapes
function calculateTotalPerimeter(shapes: Shape[]): number {
  let totalPerimeter = 0;
  for (const shape of shapes) {
    totalPerimeter += shape.calculatePerimeter();
  }
  return totalPerimeter;
}

// Create instances of the Circle, Rectangle, and Triangle classes
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const triangle = new Triangle(3, 4, 5, 5);

// Create an array to hold all of the shapes (Circle, Rectangle, and Triangle)
const shapes: Shape[] = [circle, rectangle, triangle];

// Display the total area of all shapes
console.log('Total Area:', calculateTotalArea(shapes));

// Display the total perimeter of all shapes
console.log('Total Perimeter:', calculateTotalPerimeter(shapes));
