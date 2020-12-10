









































































































// const seven = m => {
//     let steps = 0;
//     if (m === 0) return [m, steps];
//     let done = false;
//     const array = [];

//     while (!done && m >= 100) {
//         steps++;
//         const lastDigit = m % 10;
//         m = Math.floor(m / 10);
//         const num = m - (2 * lastDigit);
//         if (num % 7 === 0 && num < 100) {
//             done = true;
//             array.push(num);
//             array.push(steps);
//         }
//         else if (num < 100 ) {
//             done = true;
//             array.push(num);
//             array.push(steps);
//         }
//         else m = num;
//     }

//     console.log(array);
// }

// const seven = (m, n = 0) => {
//     while (m >= 100){
//         m = Math.floor(m / 10) - 2 * (m % 10);
//         n++;
//     }
//     console.log([m, n]);
// }

// seven(371);
// seven(1603);
// seven(372);
// seven(477557101);

// const sumSquareEvenRootOdd = nums => {
//     const sum = Number(nums.map(num => {
//         if (num % 2 === 0) return num * num;
//         else return num ** (1 / 2);
//     }).reduce((acc, val) => acc + val).toFixed(2));

//     return sum;
// }

// const nums = [1, 9, 2, 4]; // should return 1 + 3 + 4 + 16 = 24

// console.log(sumSquareEvenRootOdd(nums));

// const unpackSausages = (truck) => {
//   let result = "";
//   const sausages = truck
//     .flat()
//     .filter(item => {
//       if (item.length === 6 && item[0] === "[") return item;
//     })
//     .map((sausage) => sausage.substr(1, 4));
//   let count = 0;
//   sausages.forEach((sausage, i) => {
//     if (sausage[i] === sausage[i + 1]) {
//       if (count === 6) count = 0;
//       else {
//         result += `${sausage} `;
//         count++;
//       }
//     }
//   });

//  console.log(result.split(' ').join('').trim());
// };

// const test = [
//   ["(-)", "[IIII]", "[))))]"],
//   ["IuI", "[llll]"],
//   ["[@@@@]", "UwU", "[IlII]"],
//   ["IuI", "[))))]", "x"],
//   [],
// ];

// unpackSausages(test);
