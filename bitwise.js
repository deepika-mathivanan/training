//shift operator
    num=10
    let shift = (num >> 1) << 1;
    if (shift === num) {
      console.log(num,"is even");
    } else {
      console.log(num,"is odd");
    }
//AND operator
num=11
if (num & 1) {
    console.log(num,"is odd");
  } else {
    console.log(num,"is even");
  }
//OR operator
num=12
if ((num | 1) === num) {
    console.log(num,"is odd");
  } else {
    console.log(num,"is even");
  }
//XOR operator
num=21
if ((num ^ 1) === num + 1) {
    console.log(num,"is even");
  } else {
    console.log(num,"is odd");
  }
//NOT operator
num=24
if ((~num + 1) % 2 === 0) {
    console.log(num,"is even");
  } else {
    console.log(num,"is odd");
  }
  
  
  
 
  