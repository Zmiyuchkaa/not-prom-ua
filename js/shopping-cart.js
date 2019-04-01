var quantity1 = 1;
var quantity2 = 1;
var price1 = 1200;
var price2 = 2000;

render();

function render() {
  var sum1 = quantity1 * price1;
  var sum2 = quantity2 * price2;
  var totalSum = sum1 + sum2;

  if (quantity1 === 0) {
    document.getElementById('item1').className = 'sc_deleted';
  } else {
    document.getElementById('qty1').value = quantity1;
    document.getElementById('sum1').innerHTML = sum1;
  }

  if (quantity2 === 0) {
    document.getElementById('item2').className = 'sc_deleted';
  } else {
    document.getElementById('qty2').value = quantity2;
    document.getElementById('sum2').innerHTML = sum2;
  }
  
  document.getElementById('total').innerHTML = totalSum;
}

function subQ1() {
  if (quantity1 > 1) {
    quantity1--;
  }
  render();
}

function subQ2() {
  if (quantity2 > 1) {
    quantity2--;
  }
  render();
}

function addQ1() {
  quantity1++;
  render();
}

function addQ2() {
  quantity2++;
  render();
}

function delItem1() {
  quantity1 = 0;
  render();
}

function delItem2() {
  quantity2 = 0;
  render();
}
