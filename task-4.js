// ==========================================
// PART 1: ARRAY MANIPULATION METHODS
// ==========================================

// Q1. Create an array of 5 fruits. Add 3 fruits at the end using push().
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
fruits.push("Pineapple", "Papaya", "Kiwi");
console.log("Q1:", fruits);

// Q2. Create an array of 6 numbers. Remove the last element using pop().
let numbers1 = [10, 20, 30, 40, 50, 60];
numbers1.pop();
console.log("Q2:", numbers1);

// Q3. Create an array of 5 names. Remove the first element using shift().
let names1 = ["Rahul", "Priya", "Amit", "Sneha", "Arun"];
names1.shift();
console.log("Q3:", names1);

// Q4. Create an array of 4 numbers. Add two numbers at the beginning using unshift().
let numbers2 = [30, 40, 50, 60];
numbers2.unshift(10, 20);
console.log("Q4:", numbers2);

// Q5. Remove 2 elements starting from index 1 using splice().
let arr5 = [10, 20, 30, 40, 50];
arr5.splice(1, 2);
console.log("Q5:", arr5);

// Q6. Replace the value 3 with 100 using splice().
let arr6 = [1, 2, 3, 4, 5];
arr6.splice(2, 1, 100);
console.log("Q6:", arr6);

// Q7. Create an array of 5 numbers and fill indexes 2 to 4 with "hello".
let arr7 = [1, 2, 3, 4, 5];
arr7.fill("hello", 2, 5);
console.log("Q7:", arr7);


// ==========================================
// PART 2: ARRAY MERGE AND SEARCH METHODS
// ==========================================

// Q8. Create two arrays of numbers and combine them using concat().
let arr8a = [1, 2, 3];
let arr8b = [4, 5, 6];
let merged8 = arr8a.concat(arr8b);
console.log("Q8:", merged8);

// Q9. Extract elements from index 1 to index 4 using slice().
let arr9 = [10, 20, 30, 40, 50, 60];
let result9 = arr9.slice(1, 5);
console.log("Q9:", result9);

// Q10. Convert a nested array into a single-level array using flat(Infinity).
let nested10 = [1, [2, 3], [4, [5, 6]], 7];
let result10 = nested10.flat(Infinity);
console.log("Q10:", result10);

// Q11. Check whether the value 30 exists using includes().
let arr11 = [10, 20, 30, 40, 50];
console.log("Q11:", arr11.includes(30));

// Q12. Find the index of 20 using indexOf().
let arr12 = [5, 10, 15, 20, 25];
console.log("Q12:", arr12.indexOf(20));

// Q13. Find the last index of 2 using lastIndexOf().
let arr13 = [1, 2, 3, 2, 1, 2];
console.log("Q13:", arr13.lastIndexOf(2));

// Q14. Create an array of numbers and arrange its elements using sort().
let arr14 = [40, 10, 30, 50, 20];
arr14.sort((a, b) => a - b);
console.log("Q14:", arr14);

// Q15. Create an array of 7 numbers and reverse the order using reverse().
let arr15 = [1, 2, 3, 4, 5, 6, 7];
arr15.reverse();
console.log("Q15:", arr15);


// ==========================================
// PART 3: SPREAD AND REST OPERATORS
// ==========================================

// Q16. Merge two arrays containing 4 numbers each using the spread operator.
let arr16a = [1, 2, 3, 4];
let arr16b = [5, 6, 7, 8];
let merged16 = [...arr16a, ...arr16b];
console.log("Q16:", merged16);

// Q17. Merge student details and job details using the spread operator.
let student17 = {
    name: "Rahul",
    age: 21,
    course: "BCA"
};

let job17 = {
    company: "Infosys",
    role: "Developer",
    salary: 30000
};

let merged17 = { ...student17, ...job17 };
console.log("Q17:", merged17);

// Q18. Accept two parameters and collect remaining arguments using rest.
function collectArguments(a, b, ...rest) {
    console.log("First parameter:", a);
    console.log("Second parameter:", b);
    console.log("Remaining arguments:", rest);
}

collectArguments(10, 20, 30, 40, 50);

// Q19. Use function one(a, b, ...c) to print the sum of a, b, c[0], and c[1].
function one(a, b, ...c) {
    let sum = a + b + c[0] + c[1];
    console.log("Q19: Sum =", sum);
}

one(10, 20, 30, 40);

// Q20. Copy all elements from the first array into a new array using spread.
let arr20a = [10, 20, 30, 40, 50];
let arr20b = [60, 70, 80];
let copied20 = [...arr20a];
console.log("Q20: Copied array:", copied20);
console.log("Q20: Second array:", arr20b);


// ==========================================
// PART 4: ARRAY DESTRUCTURING
// ==========================================

// Q21. Extract all four values into separate variables using array destructuring.
let arr21 = [10, 20, 30, 40];
let [a21, b21, c21, d21] = arr21;
console.log("Q21:", a21, b21, c21, d21);

// Q22. Extract 1, 2, 3, 4, 5, and 6 using nested array destructuring.
let nested22 = [1, 2, [3, 4, [5, 6]]];
let [a22, b22, [c22, d22, [e22, f22]]] = nested22;
console.log("Q22:", a22, b22, c22, d22, e22, f22);

// Q23. Create a student array and extract name, age, and CGPA using destructuring.
let student23 = ["Priya", 20, 8.7];
let [studentName23, age23, cgpa23] = student23;
console.log("Q23: Name:", studentName23);
console.log("Q23: Age:", age23);
console.log("Q23: CGPA:", cgpa23);


// ==========================================
// PART 5: OBJECT DESTRUCTURING
// ==========================================

// Q24. Extract name, role, and location using object destructuring.
let person24 = {
    name: "Rahul",
    role: "Software Developer",
    location: "Bengaluru"
};

let { name: name24, role: role24, location: location24 } = person24;
console.log("Q24:", name24, role24, location24);

// Q25. Extract city and state using nested object destructuring.
let student25 = {
    name: "Priya",
    address: {
        city: "Mysuru",
        state: "Karnataka"
    }
};

let {
    address: { city: city25, state: state25 }
} = student25;

console.log("Q25: City:", city25);
console.log("Q25: State:", state25);

// Q26. Print name, role, mainLocation, and currentLocation using destructuring.
let person26 = {
    name: "Amit",
    role: "Manager",
    location: {
        mainLocation: "Delhi",
        currentLocation: "Bengaluru"
    }
};

let {
    name: name26,
    role: role26,
    location: {
        mainLocation: mainLocation26,
        currentLocation: currentLocation26
    }
} = person26;

console.log("Q26:", name26, role26, mainLocation26, currentLocation26);


// ==========================================
// PART 6: MIXED PRACTICAL CHALLENGES
// ==========================================

// Q27. Remove the first and last elements, add two numbers at the beginning,
// and print the final array.
let arr27 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

arr27.shift();
arr27.pop();
arr27.unshift(5, 15);

console.log("Q27:", arr27);

// Q28. Use includes(), indexOf(), and lastIndexOf() with duplicate numbers.
let arr28 = [10, 20, 30, 20, 40, 20, 50];
let selected28 = 20;

console.log("Q28: Exists:", arr28.includes(selected28));
console.log("Q28: First index:", arr28.indexOf(selected28));
console.log("Q28: Last index:", arr28.lastIndexOf(selected28));

// Q29. Merge two employee objects, then destructure and print name and role.
let employee29a = {
    name: "Sneha",
    age: 25
};

let employee29b = {
    role: "Team Lead",
    department: "IT"
};

let employee29 = { ...employee29a, ...employee29b };
let { name: name29, role: role29 } = employee29;

console.log("Q29: Name:", name29);
console.log("Q29: Role:", role29);

// Q30. Flatten a nested array, reverse it, and print the final result.
let nested30 = [1, [2, 3], [4, [5, 6]], [7, 8]];
let result30 = nested30.flat(Infinity).reverse();

console.log("Q30:", result30);