const fibonacci = nth => (
    nth <= 0
        ? "Less than 0 "
        : nth === 1
            ? 0
            : nth === 2
                ? 1
                : fibonacci(nth - 1) + fibonacci(nth - 2)
)

console.log(fibonacci(9));
console.log(fibonacci(2));
