/* task1 */

// function birorSon(num) {
//   let divisyble3 = [];
//   let divisyble5 = [];
//   let total = 0;
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0) {
//       divisyble3.push(i);
//       total += i;
//     } else if (i % 5 === 0) {
//       divisyble5.push(i);
//       total += i;
//     }
//   }
//   console.log("chisla kotoriye delyatsya na 3", divisyble3);
//   console.log("chisla kotoriye delyatsya na 5", divisyble5);
//   console.log("summa chisel:3/5", total);
// }
// birorSon(10);

/* task2 */

// function showStars(row) {
//   //   let stars = 0;
//   for (i = 1; i <= row; i++) {
//     console.log("*".repeat(i));
//   }
// }

// showStars(5);

/* task3 */
function showPrimes(birorSon) {
  let tubSonlar = [];
  for (let i = 1; i <= birorSon; i++)
    if (!(i % 2 === 0) || i / 2 === 1) {
      tubSonlar.push(i);
    }
  console.log(tubSonlar);
}
showPrimes(50);
