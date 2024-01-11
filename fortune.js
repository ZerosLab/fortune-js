quotepath = "quotes.json";
elementid = "fortune";
element = document.getElementById(elementid);
  $.getJSON(quotepath, function(test) {
    element.innerHTML = test[Math.floor(Math.random() * test.length)].replace("\n","<br>");});
