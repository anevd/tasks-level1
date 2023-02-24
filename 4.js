let startNumber = 1;
let multiplier = 4;
let quantity = 7;

/* Техническое задание

Напишите программу, которая последовательно выводит в консоль числа в геометрической прогрессии.

Стартовое значение, с которого должна начаться последовательность, записано в переменную startNumber.

Множитель записан в переменную multiplier.

Количество чисел записано в переменную quantity.

*/

const progression = () => {
	console.log(startNumber);
	for (let i = 1; i < quantity; i++) {
		let number = startNumber * multiplier;
		console.log(number);
		startNumber = number;
	}
};

progression();
