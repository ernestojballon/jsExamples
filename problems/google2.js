// https://www.youtube.com/watch?v=D35llNtkCps
const array1 = [2, 3, 6, 0];
const array2 = [6, 21, 3, 5, 10, 2, 15];

[6, 21, 3, 5, 10, 2, 15];
m: (2)[(1, 5, 3, 6, 21, 10, 15)][(1, 3, 5, 6, 21, 10, 15)][
  (6, 21, 3, 5, 10, 2, 15)
];
m: (3)[(2, 10, 5, 3, 6, 21, 15)][(6, 3, 5, 2, 10, 21, 15)][
  (2, 5, 3, 6, 10, 21, 15)
][(6, 21, 3, 5, 10, 2, 15)];
m: (4)[(2, 5, 3, 6, 10, 21, 15)];

console.log(smallest2({ arr: array2, m: 2 }));
function smallest2({ arr, m }) {}

// cnsole.log(findMin({ minArray: array1 }));
// console.log(findMin({ minArray: array2, nthMin: 3 }));
