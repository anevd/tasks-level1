let lastNumber = 10;
let sum = 0;

/* Техническое задание

Напишите универсальную программу, которая вычисляет сумму чисел от 1 до n.

Число, до которого нужно складывать числа (включительно), указано в переменной lastNumber.

Найдите сумму всех чисел и сохраните результат в переменную sum.

*/

const findSum = () => {
	for (let i = 1; i <= lastNumber; i++) {
		sum += i;
	}
	return sum;
};

console.log(findSum());