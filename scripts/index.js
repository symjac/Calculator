$(document).ready(function() {

  var $numberButton = $('.number-button');
  var $opButton = $('.op-button');
  var $equalButton = $('.equal-button');
  var $clearButton = $('.clear-button');
  var num1 = '';
  var num2 = '';
  var operator = '';
  var reset = false;

  function calculate () {
    var $displayValue = $('.display-value');
    var num1Calc = parseFloat(num1);
    var num2Calc = parseFloat(num2);
    var op = num1Calc + operator + num2Calc;
    var total = eval(op);

    if (total % 1 !== 0) {
      var total = (eval(op)).toString().substr(0,10);
      $displayValue.text(total);
    } else if ((total >1) && (total <= 9999999999)) {
      var total = eval(op);
      $displayValue.text(total);
    } else if (total > 9999999999) {
      var total = eval(op);
      $displayValue.text('oops! too high!');
    } else {
      $displayValue.text(total);
    };

    num1 = total;
  };

  $numberButton.on('click', function() {
    var $displayValue = $('.display-value');
    var $buttonValue =  $(this).val();

    if (operator.length === 0) {
      num1 += $buttonValue;
      $displayValue.text(num1);
    } else if ((operator.length === 1) && (reset === true)) {
      num2 = '';
      num2 += $buttonValue;
      $displayValue.text(num2);
      console.log(num1,operator,num2,reset);
      reset = false;
    } else if (operator.length === 1) {
      num2 += $buttonValue;
      $displayValue.text(num2);
      console.log(num1,operator,num2,reset);
    }
  });

  $opButton.on('click', function() {
    var $displayValue = $('.display-value');
    var $buttonValue =  $(this).val();

    if (num1.length === 0) {
      num1 = '0';
      operator = $buttonValue;
    } else if (operator.length === 0) {
      operator = $buttonValue;
    } else if ((operator.length === 1) && (reset === false)
    && (num2.length > 0)) {
      calculate ();
      operator  = $buttonValue;
      num2 = '';
    } else if (operator.length === 1) {
      num2 = '';
      operator = $buttonValue;
    }
  });

  $equalButton.on('click', function() {
    calculate ();
    if (reset === false) {
      reset = true;
    }
  });

  $clearButton.on('click', function() {
    var $displayValue = $('.display-value');
    var $buttonValue =  $(this).val();
    $displayValue.text(0);
    num1 = '';
    num2 = '';
    operator = '';
  });
});
