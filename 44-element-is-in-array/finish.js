/** ЗАДАЧА 44 - Поиск элементов примитивных типов в массиве
 *
 * 1. Создайте функцию isElementInArray с двумя параметрами "inputArray" и "searchElement"
 *
 * 2. Если "searchElement" найден в "inputArray" - вернуть "true"
 *
 * 3. В противном случае вернуть "false"
 */

const transports = ['Bus', 'Car', 'Bicycle', 'Airplane'];
/**
 * как работает find
 * inputArray -массив который перебирает метод find
 * element-Искомый элемент
 * searchElement - элемент из массива с которым сравнивают
 */
function isElementInArray(inputArray, searchElement) {
  if (inputArray.find((element) => element === searchElement)) {
    return true;
  }
  return false;
}

console.log(isElementInArray(transports, 'Bus')); // true
console.log(isElementInArray(transports, 'Phone')); // false
console.log(isElementInArray(transports, 'Airplane')); // true
