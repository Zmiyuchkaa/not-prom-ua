var quantity1 = 1;
var quantity2 = 1;
var sum1 = 1200;
var sum2 = 2000;
var price1 = 1200;
var price2 = 2000;

function total() {
  var totalSum = sum1 + sum2;
  document.getElementById('total').innerHTML = totalSum;
}

total();

function render1() {
  document.getElementById('qty1').value = quantity1;
  document.getElementById('sum1').innerHTML = sum1;
  total();
}

function render2() {
  document.getElementById('qty2').value = quantity2;
  document.getElementById('sum2').innerHTML = sum2;
  total();
}

function subQ1() {
  if (quantity1 > 1) {
  quantity1--;
  sum1 = price1 * quantity1;
  }
  render1();
}

function subQ2() {
  if (quantity2 > 1) {
    quantity2--;
    sum2 = price2 * quantity2;
  }
  render2();
}

function addQ1() {
  quantity1++;
  sum1 = price1 * quantity1;
  render1();
}

function addQ2() {
  quantity2++;
  sum2 = price2 * quantity2;
  render2();
}

render1();
render2();
