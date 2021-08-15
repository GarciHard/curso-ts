/* First class on TS */
class Figure {
    
    heigth: number;
    width: number;

    constructor( height: number, width: number ) {
        this.heigth = height;
        this.width = width;
    }

    area() {
        console.log("area()");
        return this.heigth * this.width;
    }

    perimeter() {
        console.log("perimeter()");
        return (this.heigth * 2) + (this.width * 2);
    }
}

let f1 = new Figure(5, 5);
console.log(`f1 area -> ${f1.area()}`);
console.log(`f1 perimeter -> ${f1.perimeter()}`);

let f2 = new Figure(5, 10);
console.log(`f2 area -> ${f2.area()}`);
console.log(`f2 perimeter -> ${f2.perimeter()}`);
