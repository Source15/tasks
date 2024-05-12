/** ЗАДАЧА 51 - Операторы "rest" (остаток) и "spread" (распространение)
 *
 * 1. Создайте функцию "meanScore",
 * которая будет принимать любое количество аргументов,
 * объединять их в один массив и возвращать среднее значение всех аргументов,
 * округленное до 2 знаков после запятой.
 *
 * 2. Если хотя бы один элемент в этом массиве не является числом -
 * выводим в консоль следующую ошибку:
 * "Все аргументы в вызове функции должны быть числами!"
 *
 * ПОДСКАЗКА: В этом задании вы должны использовать как оператор "rest",
 * так и оператор "spread".
 */

const scores1 = [0, 1.5, 2.5, 3.7];
const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2];
const scores3 = [1.3, 2.5, 1.9];
const scores4 = ['abc', 1.3, true, 2.5, 1.9];

function meanScore(...arr) {
  if (arr.length === 0 || arr.some((subArr) => subArr.length === 0)) {
    return null;
  }

  const validNumbers = arr
    .flatMap((subArr) => subArr)
    .filter((item) => typeof item === 'number');
  const sum = validNumbers.reduce((acc, number) => acc + number, 0);
  return sum / validNumbers.length;
}

console.log(meanScore(...scores1));
// 1.93

console.log(meanScore(...scores1, ...scores2));
// 2.8

console.log(meanScore(...scores1, ...scores2, ...scores3));
// 2.59

console.log(meanScore(...scores4));
// Все аргументы в вызове функции должны быть числами!
