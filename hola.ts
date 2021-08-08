
/* Hello world by typed function */

function greeting( name: string ): string {
    return `¡Hello, nice to see you, ${ name.toUpperCase() }!`
}

console.log( greeting("Alexis") );

/* PRIMITIVE DATA */

/* boolean */
let logical: boolean = false;
let isTrue: boolean = true;

/* number */
let anInteger: number = 13;
let aFloating: number = 13.13;
let anHexadecimal: number = 0xcbcbaa;
let aBinary: number = 1101;
let anExtremelyLongNumber: number = 13_130_130_131;
// we can separate long numbers with an underscore to get a better understanding while we read 'em.

/* strings */
let aString: string = 'jasdanj2394das';