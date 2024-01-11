quotepath = "quotes.json";
elementid = "fortune";
element = document.getElementById(elementid);

$.getJSON(quotepath, function(test) {
    console.log(test);
    if(Array.isArray(test)){
        element.textContent = test[Math.floor(Math.random() * test.length)];}
//    else{
//        test2 = JSON.parse('["' + test.replace ('"', "'").replace("\n%\n", '"],["') + '"]').replace("		"," ";
//        element.textContent = test2[Math.floor(Math.random() * test2.length)];}}
         );
