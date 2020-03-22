var press = document.getElementById('press');
var res = document.getElementById('res');
var o = document.getElementById('output');
var num = 0;

function clearOutput(){
o.innerHTML = '1';
}function fizzBuzz(){
    num++;
    if(num <= 100){
        if (num%15 === 0){
            var str = "FizzBuzz";
            var result = str.fontcolor("#EC18­5D");
            o.innerHTML = result;
        }else if (num%3 === 0){
            var str = "Fizz";
            var result = str.fontcolor("#8EAE­BD");
            o.innerHTML = result;
        }else if (num%5 === 0){
            var str = "Buzz";
            var result = str.fontcolor("#CF67­66");
            o.innerHTML = result;
        }else{
            o.innerHTML = num;
        }
    }else{
        o.innerHTML = 1;
    }
}

function buttonOnePressed(){
fizzBuzz();
}

function buttonTwoPressed(){
clearOutput();
num = 0;
}
window.press.addEventListener('click', buttonOnePressed); 
window.res.addEventListener('click', buttonTwoPressed);