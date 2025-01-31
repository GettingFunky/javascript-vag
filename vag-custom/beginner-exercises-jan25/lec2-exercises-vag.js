// Δηλώστε μία μεταβλητή ‘name‘ τύπου string και ορίστε
// το όνομά σας σε αυτή. Εκτυπώστε ένα μήνυμα
// χρησιμοποιώντας συνένωση όπως “ Hello, [όνομα]! 

let name1 = 'Vaggelis'
console.log(`Hello, ${name1}`)
console.log('Hello, ' + name1)

// Δηλώστε δύο μεταβλητές num1 και num2 με
// αριθμητικές τιμές. Υπολογίστε το άθροισμά τους και
// εκτυπώστε το αποτέλεσμα

let num1 = 23
let num2 = 34
let result = num1 + num2
console.log(result)

// Δηλώστε μια μεταβλητή isTrue με τιμή boolean.
// Εκτύπωση "Είναι αλήθεια!" αν η isTrue είναι true και
// "Είναι ψευδές!" σε διαφορετική περίπτωση.
// Με
// τριαδικό τελεστή

let isTrue = false;
(isTrue) ? console.log("Είναι αλήθεια!") : console.log("Είναι ψευδές!")
isTrue = true;
(isTrue) ? console.log("Είναι αλήθεια!") : console.log("Είναι ψευδές!")

// Δημιουργήστε έναν πίνακα που ονομάζεται cities με τις τιμές
// “Athens", “London", “Paris". Προσθέστε “Berlin" στο τέλος
// του πίνακα. Διασχίστε τον πίνακα και εκτυπώστε κάθε πόλη

let cities = ["Athens", "London", "Paris"]
cities.push("Berlin")
cities.forEach(city => console.log(city));


// Δημιουργήστε ένα object user με ιδιότητες, name, age, city.
// Εκτυπώστε ένα μήνυμα χρησιμοποιώντας αυτές τις
// ιδιότητες. Προσθέστε μια μέθοδο hello() που εκτυπώνει έναν
// χαιρετισμό χρησιμοποιώντας το name. Καλέστε τη μέθοδο hello()

const user = {
  name: 'Bob',
  age: 23,
  city: 'Berlin'
}

function hello() {
  console.log(`Hello, ${user.name}`)
}
hello()


// Γράψτε μια συνάρτηση υπολογισμού του εμβαδόν ενός
// κύκλου που να παίρνει την ακτίνα ενός κύκλου ως
// παράμετρο και να επιστρέφει το εμβαδόν (πr2). Καλέστε τη
// συνάρτηση με ακτίνα 5

const PI = 3.1415
let radius = 5;

function perimetros(radius) {
  return 2 * PI * radius
}

function emvadon(radius) {
  return 2 * PI * (radius ** 2)
}


console.log(`Η περίμετρος είναι: ${perimetros(5).toFixed(2)}`)
console.log(`Το εμβαδόν είναι: ${emvadon(5).toFixed(2)}`)