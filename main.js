var buttons = document.getElementsByTagName('button');

var button = buttons[0];

var inputs = document.getElementsByTagName('input');

var input = inputs[0];

var arrColors = ['red', 'orange', 'blue', 'red'];

function rand(){
    return Math.floor(Math.random() * arrColors.length); 
}

button.onclick = function(){
    console.log('click', input.value);
    alert('Hello ' + input.value + '!')
    var bodyColor = document.getElementsByTagName('body')[0];
    var number = rand();
    bodyColor.style.backgroundColor = arrColors[number];
};