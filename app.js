// ? Task:Как реализовать методы, которые в процессе выполнения строки (200).plus(100).minus(230) дали бы на выходе 70?

// Solution 1

Number.prototype.plus = function (value) {
  return this + value;
};

Number.prototype.minus = function (value) {
  return this - value;
};

console.log((200).plus(100).minus(230));//70
console.log((23).plus(5).minus(2));//26
console.log((2).plus(5).minus(20));//-13
// ! Explanation:
// Поскольку, мы работаем с числами, надо расширить прототип Number новыми методами.

// Число два будет доступно через this в функции plus. Из нее мы возвращаем результат сложения числа, на которое указывает this и числа, переданного в качестве аргумента. Аналогично для minus.