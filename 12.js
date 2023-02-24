let daysOfWeek = {
	понедельник: "monday",
	вторник: "tuesday",
	среда: "wednesday",
	четверг: "thursday",
	пятница: "friday",
	суббота: "saturday",
	воскресенье: "sunday",
};

/*

Напиши программу-переводчик.

Создай функцию translate с двумя параметрами.

Первый параметр — строка со словом на русском языке,которое нужно перевести на английский.

Второй параметр — объект с данными, в котором хранится перевод слов.

Функция должна возвращать строку вида: 'понедельник по-английски: monday'.

*/

const translate = (key, object) => {
	let translation = `${key} по-английски: ${object[key]}`;
	return translation;
};

console.log(translate("понедельник", daysOfWeek));
