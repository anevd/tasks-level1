let flightDistance = 7260;
let averageSpeed = 600;

/* Техническое задание

Мяу! Посчитай сколько времени займёт мой перелёт.
В переменную flightDistance записано расстояние полёта в километрах.

В переменной averageSpeed находится средняя скорость самолёта (километры в час).

Найди время полёта (в часах) и запиши его в переменную flightTime.

Округляй результат вычислений с помощью команды Math.round.

*/

const flightTime = () => {
	return Math.round(flightDistance / averageSpeed);
};

console.log(flightTime());
