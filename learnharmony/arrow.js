var
    values = [1, 2, 3, 4, 5, 6],
    even = values.filter(x => x % 2 === 0),
    evenSquares = even.map(x => x * x);

console.log(even, evenSquares);

// with annonymus function
even = values.filter(function(item) {
    return item % 2 === 0;
});

evenSquares = even.map(function(item) {
    return item * item;
});

console.log(even, evenSquares);
