function restart(){
    document.querySelector("#box1").innerHTML = "";
    document.querySelector("#box2").innerHTML = "";
    document.querySelector("#box3").innerHTML = "";
    document.querySelector("#box4").innerHTML = "";
    document.querySelector("#box5").innerHTML = "";
    document.querySelector("#box6").innerHTML = "";
    document.querySelector("#box7").innerHTML = "";
    document.querySelector("#box8").innerHTML = "";
    document.querySelector("#box9").innerHTML = "";
}

document.getElementById("restart").addEventListener("click",restart);

function checkwin(){
    if(document.querySelector("#box1").textContent == "X" && document.querySelector("#box2").textContent == "X" && document.querySelector("#box3").textContent == "X"){
        alert("X wins");
        return true;
    }
    if(document.querySelector("#box4").textContent == "X" && document.querySelector("#box5").textContent == "X" && document.querySelector("#box6").textContent == "X"){
        alert("X wins");
        return true;
    }
    if(document.querySelector("#box7").textContent == "X" && document.querySelector("#box8").textContent == "X" && document.querySelector("#box9").textContent == "X"){
        alert("X wins");
        return true;
    }
    if(document.querySelector("#box1").textContent == "X" && document.querySelector("#box4").textContent == "X" && document.querySelector("#box7").textContent == "X"){
        alert("X wins");
        return true;
    }
    if(document.querySelector("#box2").textContent == "X" && document.querySelector("#box5").textContent == "X" && document.querySelector("#box8").textContent == "X"){
        alert("X wins");
        return true;
    }
    if(document.querySelector("#box3").textContent == "X" && document.querySelector("#box6").textContent == "X" && document.querySelector("#box9").textContent == "X"){
        alert("X wins");
        return true;
    }
    if(document.querySelector("#box1").textContent == "X" && document.querySelector("#box5").textContent == "X" && document.querySelector("#box9").textContent == "X"){
        alert("X wins");
        return true;
    }
    if(document.querySelector("#box3").textContent == "X" && document.querySelector("#box5").textContent == "X" && document.querySelector("#box7").textContent == "X"){
        alert("X wins");
        return true;
    }
    if(document.querySelector("#box1").textContent == "O" && document.querySelector("#box2").textContent == "O" && document.querySelector("#box3").textContent == "O"){
        alert("O wins");
        return true;
    }
    if(document.querySelector("#box4").textContent == "O" && document.querySelector("#box5").textContent == "O" && document.querySelector("#box6").textContent == "O"){
        alert("O wins");
        return true;
    }
    if(document.querySelector("#box7").textContent == "O" && document.querySelector("#box8").textContent == "O" && document.querySelector("#box9").textContent == "O"){
        alert("O wins");
        return true;
    }
    if(document.querySelector("#box1").textContent == "O" && document.querySelector("#box4").textContent == "O" && document.querySelector("#box7").textContent == "O"){
        alert("O wins");
        return true;
    }
    if(document.querySelector("#box2").textContent == "O" && document.querySelector("#box5").textContent == "O" && document.querySelector("#box8").textContent == "O"){
        alert("O wins");
        return true;
    }
    if(document.querySelector("#box3").textContent == "O" && document.querySelector("#box6").textContent == "O" && document.querySelector("#box9").textContent == "O"){
        alert("O wins");
        return true;
    }
    if(document.querySelector("#box1").textContent == "O" && document.querySelector("#box5").textContent == "O" && document.querySelector("#box9").textContent == "O"){
        alert("O wins");
        return true;
    }
    if(document.querySelector("#box3").textContent == "O" && document.querySelector("#box5").textContent == "O" && document.querySelector("#box7").textContent == "O"){
        alert("O wins");
        return true;
    }

}


var flag=0;
$('#box1').click(function(){
    var id = "box1";
    if(flag==0 && document.getElementById(id).innerHTML==""){
        document.getElementById(id).innerHTML= "<strong class='symbol'>X</strong>";
        flag=1;
        checkwin();
    }
    else if(flag==1 && document.getElementById(id).innerHTML==""){
        document.getElementById(id).innerHTML = "<strong class='symbol'>O</strong>";
        flag=0;
        checkwin();
    }
})

$('#box2').click(function(){
    var id = "box2";
    if(flag==0 && document.getElementById(id).innerHTML==""){
        document.getElementById(id).innerHTML= "<strong class='symbol'>X</strong>";
        flag=1;
        checkwin();
    }
    else if(flag==1 && document.getElementById(id).innerHTML==""){
        document.getElementById(id).innerHTML = "<strong class='symbol'>O</strong>";
        flag=0;
        checkwin();
    }
})

$('#box3').click(function(){
    var id = "box3";
    if(flag==0 && document.getElementById(id).innerHTML==""){
        document.getElementById(id).innerHTML= "<strong class='symbol'>X</strong>";
        flag=1;
        checkwin();
    }
    else if(flag==1 && document.getElementById(id).innerHTML==""){
        document.getElementById(id).innerHTML = "<strong class='symbol'>O</strong>";
        flag=0;
        checkwin();
    }
})

$('#box4').click(function(){
    var id = "box4";
    if(flag==0 && document.getElementById(id).innerHTML==""){
        document.getElementById(id).innerHTML= "<strong class='symbol'>X</strong>";
        flag=1;
        checkwin();
    }
    else if(flag==1 && document.getElementById(id).innerHTML==""){
        document.getElementById(id).innerHTML = "<strong class='symbol'>O</strong>";
        flag=0;
        checkwin();
    }
})

$('#box5').click(function(){
    var id = "box5";
    if(flag==0 && document.getElementById(id).innerHTML==""){
        document.getElementById(id).innerHTML= "<strong class='symbol'>X</strong>";
        flag=1;
        checkwin();
    }
    else if(flag==1 && document.getElementById(id).innerHTML==""){
        document.getElementById(id).innerHTML = "<strong class='symbol'>O</strong>";
        flag=0;
        checkwin();
    }
})

$('#box6').click(function(){
    var id = "box6";
    if(flag==0 && document.getElementById(id).innerHTML==""){
        document.getElementById(id).innerHTML= "<strong class='symbol'>X</strong>";
        flag=1;
        checkwin();
    }
    else if(flag==1 && document.getElementById(id).innerHTML==""){
        document.getElementById(id).innerHTML = "<strong class='symbol'>O</strong>";
        flag=0;
        checkwin();
    }
})

$('#box7').click(function(){
    var id = "box7";
    if(flag==0 && document.getElementById(id).innerHTML==""){
        document.getElementById(id).innerHTML= "<strong class='symbol'>X</strong>";
        flag=1;
        checkwin();
    }
    else if(flag==1 && document.getElementById(id).innerHTML==""){
        document.getElementById(id).innerHTML = "<strong class='symbol'>O</strong>";
        flag=0;
        checkwin();
    }
})

$('#box8').click(function(){
    var id = "box8";
    if(flag==0 && document.getElementById(id).innerHTML==""){
        document.getElementById(id).innerHTML= "<strong class='symbol'>X</strong>";
        flag=1;
        checkwin();
    }
    else if(flag==1 && document.getElementById(id).innerHTML==""){
        document.getElementById(id).innerHTML = "<strong class='symbol'>O</strong>";
        flag=0;
        checkwin();
    }
})

$('#box9').click(function(){
    var id = "box9";
    if(flag==0 && document.getElementById(id).innerHTML==""){
        document.getElementById(id).innerHTML= "<strong class='symbol'>X</strong>";
        flag=1;
        checkwin();
    }
    else if(flag==1 && document.getElementById(id).innerHTML==""){
        document.getElementById(id).innerHTML = "<strong class='symbol'>O</strong>";
        flag=0;
        checkwin();
    }
})