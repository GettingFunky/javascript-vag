/**
 * Άσκηση 1: Βασικές Δηλώσεις Μεταβλητών και Πράξεις
Επίπεδο: Εύκολο
Θέμα: Μεταβλητές (let, const), Αριθμητικοί Τελεστές
Περιγραφή:
Δημιούργησε ένα πρόγραμμα που:
Δηλώνει μια σταθερά PI (τιμή 3.1415) με const.
Ζητάει από τον χρήστη (με prompt()) την ακτίνα (radius) ενός κύκλου.
Υπολογίζει και εμφανίζει (με console.log()) την περίμετρο και το εμβαδόν του κύκλου.
Περίμετρος: 
2×π×radius
Εμβαδόν: 
π×radius**2
Σημείωση: Χρησιμοποίησε template literals για την έξοδο.
 */

const PI = 3.1415
let radius = Number(prompt("Please provide the radius"));
let perim = 2 * PI * radius
let emvadon = PI * (radius ** 2)
console.log(`Η περίμετρος είναι: ${perim}`)
console.log(`Το εμβαδόν είναι: ${emvadon}`)


// Άσκηση 2: Διαχείριση Αντικειμένων (Objects) και Πινάκων (Arrays)
// Επίπεδο: Μεσαίο
// Θέμα: Objects, Arrays, for..of, Destructuring
// Περιγραφή:
// Δημιούργησε ένα αντικείμενο student με τις ιδιότητες:
// name (string)
// age (number)
// courses (πίνακας με 3 μαθήματα, π.χ. ["Math", "Physics", "Chemistry"])
// Χρησιμοποίησε destructuring assignment για να εξαγάγεις το name και το age σε ξεχωριστές μεταβλητές.
// Γράψε ένα loop (for..of) που να τυπώνει κάθε μάθημα του πίνακα courses με την μορφή:
// Course 1: Math
// Course 2: Physics
// ...
// Πρόσθεσε ένα νέο μάθημα στον πίνακα courses και εμφάνισε τον ενημερωμένο πίνακα.

const student = {
  name: 'Alice',
  age: 32,
  courses: ["Math", "Physics", "Chemistry"]
}
const { name, age } = student; // Σωστό destructuring
let i = 1;

for (let course of student.courses) {
  
  console.log(`Course ${i++}: ${course}`)
} 

student.courses[3] = "Arts"

i = 1;

for (let course of student.courses) {
  
  console.log(`Course ${i++}: ${course}`)
} 

// Άσκηση 3: Συναρτήσεις και Επεξεργασία Πινάκων
// Επίπεδο: Μεσαίο
// Θέμα: Συναρτήσεις, forEach, Arrow Functions
// Περιγραφή:
// Δημιούργησε έναν πίνακα numbers με 5 τυχαίους αριθμούς (π.χ. [10, 5, 8, 3, 15]).
// Γράψε μια συνάρτηση doubleNumber() που να δέχεται έναν αριθμό και να επιστρέφει τον διπλάσιό του.
// Χρησιμοποίησε την map() για να δημιουργήσεις έναν νέο πίνακα doubledNumbers που περιέχει τους διπλάσιους αριθμούς.
// Εμφάνισε τον αρχικό και τον νέο πίνακα.
// Χρησιμοποίησε την forEach() (σε ξεχωριστό loop) για να τυπώσεις κάθε στοιχείο του doubledNumbers στην κονσόλα.

let numbers = [10, 5, 8, 3, 15];

function doubleNumber(number) {
  return number * 2
}

let doubledNumbers = numbers.map(doubleNumber)

for (const array1 of numbers) {
  console.log(array1)
}

for (const array2 of doubledNumbers) {
  console.log(array2)
}

doubledNumbers.forEach(num => console.log(num))

// Άσκηση 4: ΔΟΜΙΚΕΣ ΕΛΕΓΧΟΥ & ΤΕΛΕΣΤΕΣ
// Επίπεδο: Δύσκολο
// Θέμα: if/else, Λογικοί Τελεστές, Σύγκριση
// Περιγραφή:
// Ζητά από τον χρήστη να εισάγει δύο αριθμούς (num1, num2) με prompt().
// Γράψε κώδικα που:
// Ελέγχει αν οι αριθμοί είναι ίσοι (με ===).
// Αν δεν είναι, βρίσκει και εμφανίζει τον μεγαλύτερο αριθμό.
// Αν είναι ίσοι, εμφανίζει το μήνυμα: "Οι αριθμοί είναι ίσοι!".
// Χρησιμοποίησε ternary operator για τον έλεγχο.

let num1 = Number(prompt("Please provide the first integer"))
let num2 = Number(prompt("Please provide the second integer"))

num1===num2 ? console.log("Οι αριθμοί είναι ίσοι!") : console.log(Math.max(num1, num2)) 