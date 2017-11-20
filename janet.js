var countT=0;
document.getElementById("startb").
    addEventListener("click",check,false);
function check() {
    if(countT!==0){return ;}
    countT=1;
    document.getElementById("t_nenrei").innerHTML="( ´~｀) う〜ん...<br>(考え中)";
   var age = parseInt(document.getElementById("input").value);

    if(isNaN(age)||typeof(age)!=="number"||age<0||age>200||age===null) {
        age = null;
        alert("入力値が不正です。。。"+age);
    }else{
        time();
    }
}
var sI;
function time() {
sI= setInterval(count_color,200);

}
var count=0;
var f = document.getElementById("wrap");

function count_color() {
    if(count>10){clearInterval(sI);
        f.style.backgroundColor = "#fed7af";

        thinkAge();
        countT=0;
        count=0;
        document.getElementById("t_nenrei").innerHTML="年齢を入力してくださいっ！<br>(👊`・ω・)👊";
    }else{
    count++;
    colorChange();}
}
var random=3;
function colorChange() {
    var random_a=Math.floor(Math.random()*4);
    // alert(random_a);
    if(random===random_a){
        colorChange();
    }else{
        random=random_a;
        switch(random) {
            case 0:
                f.style.backgroundColor = "#ffdace";//red
                break;
            case 1:
                f.style.backgroundColor  = "#ecffe2";//green
                break;
            case 2:
                f.style.backgroundColor  = "#fbffe3";//yellow
                break;
            case 3:
                f.style.backgroundColor  = "#f1fffd";
                break;
            case 4:
                f.style.backgroundColor  = "#f2eeff";//purple
                break;
        }

}}

function thinkAge(){
   var age = parseInt(document.getElementById("input").value);

    var result = 1 / age;
        document.getElementById("resultdisp").innerHTML = result*100;
// document.getElementsByClassName("result").style.display="block";

    var c1=(String)(age/(age+1) * 500 + "px");
    var s = (String)(1/(age+1) * 500 + "px");
    var all=0;
    var ag=age;
    for(var i=1;i<(85-age);i++){
        all+=1/ag;
        ag++;
    }

        document.getElementById("c1").style.height = c1;
        document.getElementById("c2").style.height = s;
        document.getElementById("c3").innerHTML = all+"年";


}