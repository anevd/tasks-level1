let euroRate = 74;
let dollarRate = 63;

let euroAmount = 500;
let dollarAmount = 2500;

/* Техническое задание

Напиши программу, которая посчитает сколько всего рублей понадобится на поездку.
Курсы валют указаны в переменных euroRate и dollarRate.
Переменные euroAmount и dollarAmount— необходимые суммы на поездку.
Создай переменную rublesAmount и записывай в неё результат вычислений.

*/

const rublesAmount = () => {
	return euroRate * euroAmount + dollarRate * dollarAmount;
};

console.log(rublesAmount());
