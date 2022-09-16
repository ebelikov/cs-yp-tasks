// const zoo = (quantity = 10) => {
//   let sum = 0;

//   for (let i = 0; i < quantity; i++) {
//     sum += Math.ceil(Math.random() * 6);
//   }

//   return sum / quantity;
// };

// let low = 0;
// let upper = 0;
// let tryies = 0;
// while (low === 0) {
//   tryies++;
//   for (let i = 0; i < 1000; i++) {
//     const token = zoo();
//     if (token === 1) {
//       low++;
//     }
//   }
//   console.log("low:", low);
//   console.log("tryies:", tryies);

//   //   console.log("upper:", upper);
//   //   console.log(`diff: ${100 * (upper / (low + upper))}%`);
// }

const map = new Map();

const participants = ["sasha", "zhenya"];

const chooseRandom = (arr) => {
  if (!arr.length) {
    return "nobody";
  }

  const index = Math.floor(Math.random() * arr.length);

  return arr[index];
};

console.log(chooseRandom(participants));

for (let i = 0; i < 100000000; i++) {
  const name = chooseRandom(participants);
  map.set(name, map.get(name) ? map.get(name) + 1 : 1);
}

console.log(map.get(participants[0]), map.get(participants[1]));
