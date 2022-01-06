/*
Coding challenge #3 bonus: 

Print the multiplication table

1 * 1
1 * 2 
1 * 3
.....
1 * 9

2 * 1
2 * 2
..
2 * 9 


3 * 1


1 * 5 = 7
2 * 5 = 14
3 * 5 = 21

1 * 6 = 7
2 * 6 = 14
3 * 6 = 21


1 * 7 = 7
2 * 7 = 14
3 * 7 = 21
.......
9 * 7 = 63

*/

for (let x = 1; x <= 9; x++) {
  for (let y = 1; y <= 9; y++) {
    console.log(x, "*", y, "=", x * y);
  }
  console.log("----------");
}
