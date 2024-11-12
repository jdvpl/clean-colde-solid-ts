# clean-colde-solid-ts

## single responsibility principle

El principio de responsabilidad única establece que una clase debe tener una, y solo una, razón para cambiar. Esto significa que cada clase debe encargarse de una única funcionalidad o responsabilidad dentro del sistema.

### Ejemplo

```typescript
class Report {
  generateReport() {
    // Lógica para generar el reporte
  }
}

class ReportPrinter {
  printReport(report: Report) {
    // Lógica para imprimir el reporte
  }
}
```

En este ejemplo, la clase `Report` se encarga únicamente de generar el reporte, mientras que la clase `ReportPrinter` se encarga de imprimirlo. De esta manera, cada clase tiene una única responsabilidad.

## open closed principle

El principio de abierto/cerrado establece que las entidades de software (clases, módulos, funciones, etc.) deben estar abiertas para la extensión, pero cerradas para la modificación. Esto significa que el comportamiento de una entidad se puede extender sin modificar su código fuente.

### Ejemplo

```typescript
interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class AreaCalculator {
  static calculateArea(shapes: Shape[]): number {
    return shapes.reduce((total, shape) => total + shape.area(), 0);
  }
}

const shapes: Shape[] = [new Rectangle(10, 20), new Circle(5)];

console.log(AreaCalculator.calculateArea(shapes)); // Output: 178.53981633974485
```

En este ejemplo, la interfaz `Shape` define un método `area` que debe ser implementado por cualquier clase que represente una forma. Las clases `Rectangle` y `Circle` implementan esta interfaz y proporcionan su propia lógica para calcular el área. La clase `AreaCalculator` puede calcular el área total de una lista de formas sin necesidad de modificar su código cuando se añaden nuevas formas, cumpliendo así con el principio de abierto/cerrado.

## liskov substitution principle

## inversion

## dependency inversion principle

##
