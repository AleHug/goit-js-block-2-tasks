function getExtremeElements(array) {
  // Change code below this line
    const firstElement = array[0];
    const lastElement =  array[array.length - 1];
    return array = [firstElement, lastElement];

  // Change code above this line
}

const result = getExtremeElements(["Earth", "Mars", "Venus"]);
console.log(result);



// ЗАДАЧА: КРАЙНИЕ ЭЛЕМЕНТЫ МАССИВА
// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

// Объявлена функция getExtremeElements(array)
// Вызов getExtremeElements([1, 2, 3, 4, 5]) возвращает [1, 5]
// Вызов getExtremeElements(["Earth", "Mars", "Venus"]) возвращает ["Earth", "Venus"]
// Вызов getExtremeElements(["apple", "peach", "pear", "banana"]) возвращает ["apple", "banana"]