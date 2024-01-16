
/* Variable = A container that stores a value. Behaves as if it were the value it contains 

let fullName = "Dennis An Vo";
let age = 23;
let isStudent = false;

document.getElementById("p1").textContent = 'Your name is ${fullName}';
document.getElementById("p2").textContent = 'You are ${age} years old';
document.getElementById("p3").textContent = 'Enrolled: ${isStudent}'; 
*/

/* Arithmetic operators = Operand (values, variables, etc.)
                            Operators (+ - * /)
                            ex. 11 + x + 5;
 

let students = 30;

//students = students + 1;
//students = students - 1;

Operator precedence
1. Parenthesis ()
2. Exponents 
3. Multiplication & division & modulo
4. addition & subtraction
*/

/* How to accept user input

1. EASY WAY = window prompt
2. PROFESSIONAL WAY = HTML textbox 
*/

let username;

document.getElementById("mySubmit").onclick = function () {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = 'Hello' + ${ username };
};























































