var countT=0;
document.getElementById("startb").
    addEventListener("click",check,false);
function check() {
    if(countT!==0){return ;}
   var age = parseInt(document.getElementById("input").value);

    if(isNaN(age)||typeof(age)!=="number"||age<0||age>200||age===null) {
        age = null;
        alert("入力値が不正です。。。"+age);
    }else{
        time();
    }
}
function time() {
 var sI= setInterval(count_color,200);
 
  if(count===10)clearInterval(sI);
  thinkAge();
  countT=0;

}

function count_color() {
    var count=0;
    for(var i=0;i<6;i++) {
        count++;
        colorChange();
    }
}

function colorChange() {
    var color;
    var random;
   var f = document.getElementById("wrap").style.backgroundColor;
    var random_a=Math.floor(Math.random()*4);
    if(random===random_a){
        colorChange();
    }else{
        switch(random) {
            case 0:
                f = "red";
                break;
            case 1:
                f = "pink";
                break;
            case 2:
                f = "yellow";
                break;
            case 3:
                f = "orange";
                break;
            case 4:
                f = "purple";
                break;
        }

}}

function thinkAge(){
   var age = parseInt(document.getElementById("input").value);

    var result = (String)(1 / age);
        document.getElementById("resultdisp").innerHTML = result;
// document.getElementsByClassName("result").style.display="block";
        var s = (String)(age * 100 + "%");
        document.getElementById("c1").style.height = "100%";
        document.getElementById("c2").style.height = s;

}