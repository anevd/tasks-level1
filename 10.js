/* Техническое задание

Мяу! Напиши программу для определения типа транспорта на велосипедной парковке.

Оформи решение в виде функции checkVehicle с двумя параметрами: количество колёс у транспорта и вес этого транспорта. Названия параметров могут быть любыми.

Если колеса два и вес транспорта меньше 100 кг, это велосипед. Функция должна возвращать строку 'Парковка разрешена'.

В остальных случаях функция должна возвращать строку 'Вам здесь не место! Мяу!'.

*/

const checkVehicle = (wheels, weight) => {
	return wheels === 2 && weight < 100 ? "Парковка разрешена" : "Вам здесь не место! Мяу!";
};

console.log(checkVehicle(2, 50));
console.log(checkVehicle(4, 50));
console.log(checkVehicle(2, 150));
