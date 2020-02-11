var currentSum = "";

$("span").click(function() {
  var value = ($(this).text());
  
  if(value == '='){
      currentSum = eval(currentSum);
      $( ".display h1" ).text(currentSum);
    }else if(value == "x"){
      currentSum += "*";
      $( ".display h1" ).text(currentSum);
    }else if(value == "÷"){
      currentSum += "/";
      $( ".display h1" ).text(currentSum);
    }else if(value == 'AC'){
      currentSum = "";
      $( ".display h1" ).text('0');
    }else if(value == 'CE'){
      currentSum = currentSum.substring(0, currentSum.length - 1);
      $( ".display h1" ).text(currentSum);
    }else{
      currentSum += value;
      $( ".display h1" ).text(currentSum);
    }
});

