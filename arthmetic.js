let disp = document.querySelector("#disp");
let add = document.querySelector("#add");
let sub = document.querySelector("#sub");
let mult = document.querySelector("#mult");
let div = document.querySelector("#div");
let a = document.querySelector("#num1");
let b = document.querySelector("#num2");

add.addEventListener("click", () => {
    const num1 = parseFloat(a.value);
    const num2 = parseFloat(b.value);
    const result = num1 + num2;
    disp.innerHTML = `Result: ${result}`;
});

sub.addEventListener("click", () => {
    const num1 = parseFloat(a.value);
    const num2 = parseFloat(b.value);
    const result = num1 - num2;
    disp.innerHTML = `Result: ${result}`;
});

mult.addEventListener("click", () => {
    const num1 = parseFloat(a.value);
    const num2 = parseFloat(b.value);
    const result = num1 * num2;
    disp.innerHTML = `Result: ${result}`;
});

div.addEventListener("click", () => {
    const num1 = parseFloat(a.value);
    const num2 = parseFloat(b.value);
    
    if (num2 !== 0) {
        const result = num1 / num2;
        disp.innerHTML = `Result: ${result}`;
    } else {
        disp.innerHTML = "Cannot divide by zero!";
    }
});
