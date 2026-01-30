// Multiplication Table
/*
for (let i = 0; i <= 10; i++) {
    console.log('Table of the:', i);
    for (let j = 0; j <=10; j++){
        console.log(i, '*', j, '=', i * j);
    }
}


*/
// Mario Pattern triangle

var rows = 3;

for (let i = rows; i > 0; i--) {
  for (let k = i; k > 1; k--) {
    process.stdout.write(" ");
  }
  for (let j = rows; j >= i; j--) {
    process.stdout.write("#");
  }
  process.stdout.write(" ");
  for (let h = rows; h >= i; h--) {
    process.stdout.write("#");
  }
  console.log(" ");
}
