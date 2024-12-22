// darsta korilgan masalalar
// masala 1
function getInitialOdds(n) {
  return Array.from({ length: n }, (_, i) => 2 * i + 1);
}

getInitialOdds(5);

// masala 2
const getEvenReverse = (arr) => {
  arr.filter((num) => num % 2 === 0).reverse();
};
let input = [4, 5, 7, 8, 6, 9];
getEvenReverse(input);

// masala 3
const arry = [4, 5, 7, 8, 6, 9];
let text = "";

for (let i = 0; i < arry.length; i++) {
  text += `${arry[i]}${arry[arry.length - (i + 1)]}`;
}

arry[(4, 5, 7, 8, 6, 9)];

// masala 4
function rangeSum(arr, K, L) {
  let sum = 0;
  for (let i = K; i <= L; i++) {
    sum += arr[i];
  }
  return sum;
}

let arr = [1, 6, 9, 5, 8, 10, 15];
rangeSum(arr, 2, 5);

// masala 5
function getSingleArr(arr) {
  let countMap = new Map();

  for (let num of arr) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  let result = [];
  for (let num of arrr) {
    if (countMap.get(num) === 1) {
      result.push(num);
    }
  }

  return result;
}

let arrr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];
getSingleArr(arrr);

// masala 6
function swapMinMax(arre) {
  let minIndex = arre.indexOf(Math.min(...arre));
  let maxIndex = arre.indexOf(Math.max(...arre));

  let temp = arre[minIndex];
  arre[minIndex] = arre[maxIndex];
  arre[maxIndex] = temp;

  return arre;
}

let arre = [7, 4, 9, 2, 3, 1, 5];
swapMinMax(arre);

// masala 7
function shiftArray(arr) {
  let lastElement = arr[arr.length - 1];

  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = lastElement;

  return arr;
}

let arrt = [1, 5, 8, 9, 10];
shiftArray(arrt);

// Uy ishi
// masala 1
function getLevel2(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(2 ** i);
  }
  return result;
}

getLevel2(5);

// misol 2
function generateArray(n, A, B) {
  let a = [A, B];
  for (let i = 2; i < n; i++) a.push(a.reduce((sum, x) => sum + x, 0));
  return a;
}
generateArray(5, 2, 3);

// misol 3
function arry(n) {
  return n.reverse();
}

let wez = [1, 2, 3, 4, 5];
arry(wez);

// misol 4
function findOddElements(arr) {
  let oddElements = arr.filter((x) => x % 2 !== 0);
  return { oddElements: oddElements.join(), count: oddElements.length };
}

let result = findOddElements([4, 5, 7, 8, 6, 9]);
result.oddElements;
result.count;

// misol 5
function processArray(arr) {
  let evenElements = arr.filter((x) => x % 2 === 0);
  let oddElements = arr.filter((x) => x % 2 !== 0).reverse();
  return [...evenElements, ...oddElements];
}

let array = [4, 5, 7, 8, 6, 9];
processArray(array);

// misol 6
function printEvenIndexedElements(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  console.log(result.join(" "));
}

let arrayr = [1, 2, 3, 4, 5, 6];
printEvenIndexedElements(arrayr);

// misol 7
function printOddIndexedElementsReverse(arr) {
  let result = [];
  for (let i = arr.length - 1; i > 0; i -= 2) {
    result.push(arr[i]);
  }
  console.log(result.join(" "));
}

let arrae = [1, 2, 3, 4, 5, 6];
printOddIndexedElementsReverse(arrae);

// misol 8
function printEvenThenOddIndexedElements(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }

  for (let i = 1; i < arr.length; i += 2) {
    result.push(arr[i]);
  }

  console.log(result.join(" "));
}

let arra = [1, 2, 3, 4, 5, 6];
printEvenThenOddIndexedElements(arra);

// misol 9
function printOddEvenIndexedElements(arr) {
  let oddIndexed = [];
  let evenIndexed = [];

  for (let i = 1; i < arr.length; i += 2) {
    oddIndexed.push(arr[i]);
  }

  for (let i = 0; i < arr.length; i += 2) {
    evenIndexed.push(arr[i]);
  }

  evenIndexed.reverse();

  console.log(oddIndexed.join(" ") + " " + evenIndexed.join(" "));
}

let arrayw = [1, 2, 3, 4, 5, 6, 7, 8];
printOddEvenIndexedElements(arrayw);

// misol 10
function printSpecialOrder(arr) {
  let result = [];
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    if (start <= end) result.push(arr[start++]);
    if (start <= end) result.push(arr[start++]);

    if (start <= end) result.push(arr[end--]);
    if (start <= end) result.push(arr[end--]);
  }

  console.log(result.join(" "));
}

let ar = [1, 2, 3, 4, 5, 6, 7, 8];
printSpecialOrder(ar);
