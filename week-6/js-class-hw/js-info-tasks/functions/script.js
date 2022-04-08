function checkAge(age) {
    return age > 18 ? true : confirm("Did parents allow you?");
}

function checkAge(age) {
    return age > 18 || confirm("Did parents allow you?");
}

min = (a, b) => (a < b ? a : b);
pow = (x, n) => x ** n;

let x = prompt("Choose value for x", "");
let n = prompt("Choose value for n", "");

if (n < 1) {
    alert("n should be positive");
} else {
    alert(pow(x, n));
}
