// ? Task:Как реализовать методы, которые в процессе выполнения строки (2).plus(3).minus(1) дали бы на выходе 4?

// Solution 1

Number.prototype.plus = function (value) {
  return this + value;
};

Number.prototype.minus = function (value) {
  return this - value;
};

console.log((2).plus(3).minus(1));


// ! Explanation:
// Поскольку, мы работаем с числами, надо расширить прототип Number новыми методами.

// Число два будет доступно через this в функции plus. Из нее мы возвращаем результат сложения числа, на которое указывает this и числа, переданного в качестве аргумента. Аналогично для minus.