
/* Hello world by typed function */

function greeting( name: string ): string {
    return `¡Hello, nice to see you, ${ name.toUpperCase() }!`
}

console.log( greeting("Alexis") );