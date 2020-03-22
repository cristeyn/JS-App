var fib = function(){
    var m = [0,1];
    var input = document.getElementById("num");
    var a = input.value;
    var i = m.length;
    while (i < a){
        m[i] = m[i - 2] + m[i - 1];
        i++;
    }
    m = m.toString();
    return document.getElementById("sequence").innerHTML = m.replace(/,/g, "<span class ='seperator'> </span>");
    };
    document.getElementById("fibonacci").onclick = function(){
        return fib()
    };
    function clear(){
        sequence.innerHTML='';
        document.getElementById("num").value= "";
    };
    document.getElementById("sequencee").onclick = function(){
        return clear();
    };