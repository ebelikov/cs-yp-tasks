const { quickSort } = require("./quick-sort.js");

test("1", () => {
  const arr = [
    {
      name: "alla",
      solvedTasks: 0,
      fine: 0,
    },
    {
      name: "gena",
      solvedTasks: 0,
      fine: 0,
    },
    {
      name: "gosha",
      solvedTasks: 0,
      fine: 0,
    },
    {
      name: "rita",
      solvedTasks: 0,
      fine: 0,
    },
    {
      name: "timofey",
      solvedTasks: 0,
      fine: 0,
    },
  ];
  quickSort(arr);
  expect(arr).toStrictEqual([
    {
      name: "alla",
      solvedTasks: 0,
      fine: 0,
    },
    {
      name: "gena",
      solvedTasks: 0,
      fine: 0,
    },
    {
      name: "gosha",
      solvedTasks: 0,
      fine: 0,
    },
    {
      name: "rita",
      solvedTasks: 0,
      fine: 0,
    },
    {
      name: "timofey",
      solvedTasks: 0,
      fine: 0,
    },
  ]);
});
// test("1", () => {
//   const arr = [
//     {
//       name: "alla",
//       solvedTasks: 0,
//       fine: 0,
//     },
//     {
//       name: "timofey",
//       solvedTasks: 0,
//       fine: 0,
//     },
//     {
//       name: "rita",
//       solvedTasks: 0,
//       fine: 0,
//     },
//     {
//       name: "gosha",
//       solvedTasks: 0,
//       fine: 0,
//     },
//     {
//       name: "gena",
//       solvedTasks: 0,
//       fine: 0,
//     },
//   ];
//   quickSort(arr);
//   expect(arr).toStrictEqual([
//     {
//       name: "alla",
//       solvedTasks: 0,
//       fine: 0,
//     },
//     {
//       name: "gena",
//       solvedTasks: 0,
//       fine: 0,
//     },
//     {
//       name: "gosha",
//       solvedTasks: 0,
//       fine: 0,
//     },
//     {
//       name: "rita",
//       solvedTasks: 0,
//       fine: 0,
//     },
//     {
//       name: "timofey",
//       solvedTasks: 0,
//       fine: 0,
//     },
//   ]);
// });
// test("1.5", () => {
//   const arr = [4, 2, 2, 3, 5, 15, 1, 5, 23, 3, 7, 15];
//   quickSort(arr);
//   expect(arr).toStrictEqual([1, 2, 2, 3, 3, 4, 5, 5, 7, 15, 15, 23]);
// });

// test("2", () => {
//   const arr = [4, 2, 1];
//   quickSort(arr);
//   expect(arr).toStrictEqual([1, 2, 4]);
// });

// test("3", () => {
//   const arr = [1];
//   quickSort(arr);
//   expect(arr).toStrictEqual([1]);
// });

// test("4", () => {
//   const arr = [4, 1];
//   quickSort(arr);
//   expect(arr).toStrictEqual([1, 4]);
// });

// test("5", () => {
//   const arr = [];
//   quickSort(arr);
//   expect(arr).toStrictEqual([]);
// });
