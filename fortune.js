quotepath = "quotes.json";
elementid = "fortune";
element = document.getElementById(elementid).innerHTML;

$.getJSON(quotepath, function(test) {
    if(Array.isArray(test)){
        element = test[Math.floor(Math.random() * test.length)];}
    else{
        test2 = JSON.parse('["' + test.replace ('"', "'").replace("\n%\n", '"],["') + '"]');
        element = test2[Math.floor(Math.random() * test2.length)];}});
