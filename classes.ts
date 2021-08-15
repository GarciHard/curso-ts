/* First class on TS */
class Figure {
    
    /* We can set private properties using the 'private' word or using '#' (available on ECMAScript 2015 and higher) */

    private height: number;
    private width: number;

    constructor( height: number, width: number ) {
        this.height = height;
        this.width = width;
    }

    area() {
        return this.height * this.width;
    }

    perimeter() {
        return (this.height * 2) + (this.width * 2);
    }
}

let f1 = new Figure(5, 5);
console.log(`f1 area -> ${f1.area()}`);
console.log(`f1 perimeter -> ${f1.perimeter()}`);

let f2 = new Figure(5, 10);
console.log(`f2 area -> ${f2.area()}`);
console.log(`f2 perimeter -> ${f2.perimeter()}`);
