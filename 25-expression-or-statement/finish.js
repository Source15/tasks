/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

15; //выражение - инструкция

//инструкция
const myObject = {
  //выражение
  x: 10,
  y: true,
};
//выражение-инструкция
myObject.z = 'abc'; //выражение

delete myObject.x; //выражение-инструкция

let newVariable; // инструкция

//выражение-инструкция
newVariable = 30 + 5; //выражение

console.log(newVariable); //выражение -инструкция

if (newVariable > 10) {
  //инструкция
  console.log(`${newVariable} больше 10`);
}
