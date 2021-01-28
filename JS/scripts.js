const add = function(number1, number2) {
  return number1 + number2;
};

const subtract = function(number1, number2) {
  return number1 - number2;
};

const multiply = function(number1, number2) {
  return number1 * number2;
};

const divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    let number1 = parseInt($("#add1").val());
    let number2 = parseInt($("#add2").val());
    let result = add(number1, number2);
    $("#output").text(result);
  });
  $("form#subtract").submit(function(event) {
    event.preventDefault();
    let number1 = parseInt($("#sub1").val());
    let number2 = parseInt($("#sub2").val());
    let result = subtract(number1, number2);
    $("#output").text(result);
  });
  $("form#multiply").submit(function(event) {
    event.preventDefault();
    let number1 = parseInt($("#mlt1").val());
    let number2 = parseInt($("#mlt2").val());
    let result = multiply(number1, number2);
    $("#output").text(result);
  });
  $("form#divide").submit(function(event) {
    event.preventDefault();
    let number1 = parseInt($("#div1").val());
    let number2 = parseInt($("#div2").val());
    let result = divide(number1, number2);
    $("#output").text(result);
  });
});
