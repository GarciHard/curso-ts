/* string array */
let daysOfWeek: string[] = ["monday", "tuesday", "wednesday", "thursday", "friday"]

for (const element of daysOfWeek) {
    console.log(element);
}

/* number array */
let numbersArray: number[] = [1, 2, 3, 4, 5]

for (const element of numbersArray) {
    console.log(element);
}

/* any array */
let anyArray: any = ["monday", "tuesday", "wednesday", "thursday", "friday", null, 1, undefined]

for (const element of anyArray) {
    console.log(element);
}

/* tuples */
// they can be value typed and we can use i.e. as 'tmp' db.

let db: [ name: string, 
          age: number,
          country: string,
          activeUser: boolean ][] = [
            [
                "Alexis",
                13,
                "México",
                true
            ],
            [
                "Jaime",
                14,
                "México",
                false
            ],
          ];

// we can push elements.
db.push( ["push", 1, "sample", false] );

for (let elements of db) {
    console.log(elements);
}

// removing elements from the array.
db.pop();

for (let elements of db) {
    console.log(elements);
}

/* object type */
let anObject : {
    name: string,
    age: number,
    country: string,
    bornDate: Date,
    activeUser: boolean,
    employmentInfo: {
        company: string,
        sector: string
    }
} = {
    name: "Alexis",
    age: 13,
    country: "México",
    bornDate: new Date(2007, 10, 13),
    activeUser: true,
    employmentInfo: {
        company: "HSBC",
        sector: "Financial"
    }
}

console.log( anObject );