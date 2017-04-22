// Kodilla task 8.6

var a = prompt("Wpisz wartość a", 2),
    b = prompt("Wpisz wartość b", 3),
    value;

value = (a * a) + (2 * a * b) - (b * b);
console.log("Wynik działania : " + value); 

if (value > 0) {
  
  console.log("wynik dodatni");
  
} else if (value < 0) {
  
  console.log("wynik ujemny");
  
} else {
  
  console.log("wynik równy 0");
  
}