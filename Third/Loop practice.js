//sum of two number
const twoNum = (a, b, c) => {
  if (a != null && b != null) {
    console.log(a + b);
  } else {
    console.log(a + b + c);
  }
  console.log(c);
  console.log(a + b + c);
};
twoNum(2, 8);
twoNum(100, 500);
twoNum(34, 56, 78);

// practice 3rd program
const num = (n, m) => {
  let ans;
  for (let i = n; i >= 1; i--) {
    if (i % m == 0) {
      ans = i;
      break;
    }
  }
  console.log(ans);
};
num(13, 4);

// print even number
const printEvenNum = (a, b) => {
  for (let i = a; i <= 50; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
};
printEvenNum(10, 50);

const factors = (a) => {
  let num = 0;
  for (let i = 1; i <= a; i++) {
    if (a % i == 0) num++;

    //  console.log(i);
  }
  console.log(num);
};
factors(64);
