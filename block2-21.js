function findLongestWord(string) {
  // Change code below this line
    let longestWord = "";
    const array = string.split(" ");
    for (const word of array) {
        if (word.length > longestWord.length)
            longestWord = word;
        //console.log(word)
    } 
  // Change code above this line
    return longestWord;
}

const result = findLongestWord("The quick brown fox jumped over the lazy dog")
console.log(result) 

// ЗАДАЧА: ПОИСК САМОГО ДЛИННОГО СЛОВА
// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// Объявлена функция findLongestWord(string)
// Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
// Вызов функции findLongestWord("Google do a roll") возвращает Google
// Вызов функции findLongestWord("May the force be with you") возвращает force
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение


// Beispiele!
// Итерация по массиву!

// Цикл for
// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }


// Конструкция for...of
// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }