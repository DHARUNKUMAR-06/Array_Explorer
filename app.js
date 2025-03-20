let numbers = [];

function inputnum() {
    const num = document.getElementById("input").value;
    numbers = num
        .split(" ")
        .map((number) => parseInt(number.trim()))
}

function print(text) {
    document.getElementById("answer").innerText = text;
}

function odd() {
    inputnum();
    const odd = numbers.filter((number) => number % 2 != 0);
    print(odd.join(" "));
}

function even() {
    inputnum();
    const even = numbers.filter((number) => number % 2 == 0);
    print(even.join(" "));
}

function maximum() {
    inputnum();
    const max = numbers.reduce((acc, num) => (num > acc ? num : acc), 0);
    print(max);
}

function minimum() {
    inputnum();
    const min = numbers.reduce((acc, num) => (num < acc ? num : acc), 100);
    print(min);
}

function reverse() {
    inputnum();
    const rev = numbers.reverse();
    print(rev.join(" "));
}

function sort() {
    inputnum();
    const sorted = numbers.sort((a, b) => a - b);
    print(sorted.join(" "));
}
