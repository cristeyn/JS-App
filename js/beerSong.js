var Button1 = document.getElementById('Button1');
var o = document.getElementById('sings');
var num = 100;
var nums = 99;

function beerSong(){
    num--;
    nums--;
    if(num >= 2 && nums >= 2){
        if (num % 1 == 0){
            var first = " " + "bottles of the beer on the wall," + " "
            var second = " " + "bottles of beer, <br>"
            var third = "take one down and pass it around," + " "
            var fourth = " " + "bottles of beer on the wall."
            o.innerHTML= num + first + num + second + third + nums + fourth;
        }
        else{
             o.innerHTML = num;
        }
    }else if(num >= 1 && nums >= 1){
        if(num % 1 == 0){
            var first = " " + "bottles of the beer on the wall," + " "
            var second = " " + "bottles of beer, <br>"
            var third = "take one down and pass it around," + " "
            var fourth = " " + "bottle of beer on the wall."

            o.innerHTML= num + first + num + second + third + nums + fourth;
        }
    }else if (num >= 0 && nums >= 0){
        if(num % 1 == 0){
            var first = " " + "bottle of the beer on the wall," + " "
            var second = " " + "bottle of beer, <br>"
            var third = "take one down and pass it around," + " "
            var fourth = " " + "no more bottles of beer on the wall."

            o.innerHTML= num + first + num + second + third + fourth;
        }
    }
}

function buttonOnePressed(){
    beerSong();
}

window.Button1.addEventListener('click', buttonOnePressed);