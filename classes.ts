/* First class on TS */
class Figure {
    
    /* We can set private properties using the 'private' word or using '#' (available on ECMAScript 2015 and higher) */

    private height: number;
    private width: number;

    /* When we use the 'readonly' is like the 'final' word in java, we create an inmmutable attribute */

    readonly anotherAttribute: number = 13;

    private _figureName: string;

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

    getAnotherAttribute() {
        return this.anotherAttribute;
    }

    get figureName() {
        return this._figureName;
    }

    set figureName( value: string ) {
        this._figureName = value;
    }
}

let f1 = new Figure(5, 5);
console.log(`f1 area -> ${f1.area()}`);
console.log(`f1 perimeter -> ${f1.perimeter()}`);
console.log(`f1 anotherAttribute -> ${f1.getAnotherAttribute()}`);
f1.figureName = "Rectangle";
console.log(`f1 name -> ${f1.figureName}`);