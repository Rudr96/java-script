//power of number
const power = (a, b) => {
  let ans = 1;

  if (b % 2 == 0) {
    for (let i = 0; i < b; i++) {
      ans = a * ans;
    }
    console.log(ans);
  } else {
    console.log("wrong number");
  }
};

power(4, 9);
