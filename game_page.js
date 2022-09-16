player_1 = localStorage.getItem("login 1")
player_2 = localStorage.getItem("login 2")


document.getElementById("p1").innerHTML = player_1 + " score is :"
document.getElementById("p2").innerHTML = player_2 + " score is :"

document.getElementById("q1").innerHTML = "Question Turn - " + player_1
document.getElementById("a1").innerHTML = "Answer Turn - " + player_2

var num = ""
var num2 = ""

function submit() 
{
    num = document.getElementById("num1").value
    num2 = document.getElementById("num2").value
    document.getElementById("output").innerHTML = "<h3>Q. "+ num + " x " + num2 +"</h3><h5>Answer <input type='number' id='input'> </h5> <button class='btn btn-info' onclick='check()' >Check</button>"
}

var input = ""

var unum = ""
var unum2 = ""
var totalvalue = "" 
q_turn = player_1
a_turn = player_2
p1_value = 0
p2_value = 0

function check()
{
 input = Number(document.getElementById("input").value)
  unum = Number(num)
  unum2 = Number(num2)
  totalvalue = unum * unum2
 if(input == totalvalue)
 {

    if(a_turn == player_1)
    {
   p1_value = p1_value + 1
   document.getElementById("p1").innerHTML = player_1 + " score is : " + p1_value
    }

    else if(a_turn == player_2)
    {
       p2_value  = p2_value + 1
       document.getElementById("p2").innerHTML = player_2 + " score is : " + p2_value

    }
 }

 if(q_turn == player_1)
 {
     q_turn = player_2
     document.getElementById("q1").innerHTML = "Question Turn - " + player_2
 }
 else
 {
     q_turn = player_1
     document.getElementById("q1").innerHTML = "Question Turn - " + player_1
 }

 if(a_turn == player_2)
 {
     a_turn = player_1
     document.getElementById("a1").innerHTML = "Answer Turn - " + player_1
 }
 else
 {
     a_turn = player_2
     document.getElementById("a1").innerHTML = "Answer Turn - " + player_2
     
 }
 document.getElementById("output").innerHTML = ""  

 }

