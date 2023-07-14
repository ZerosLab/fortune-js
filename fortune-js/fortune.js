quotepath = "friends.json";
elementid = "fortune";


$.getJSON(quotepath, function(test) {
    if(TypeOf test === 'array'){
        document.getElementById(elementid).innerHTML = test[Math.floor(Math.random() * test.length)];
    }
    else{
        test2 = '["' + test.replace ('"', "'").replace("\n%\n", '"],["') + '"]';
        document.getElementById(elementid).innerHTML = test2[Math.floor(Math.random() * test2.length)];
    }
    });
