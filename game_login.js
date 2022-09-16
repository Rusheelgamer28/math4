function savelogin()
{

   input1 = document.getElementById("input1").value 
   input2 = document.getElementById("input2").value
   if(input1 != "" && input2 != "")
{
   localStorage.setItem("login 1" , input1)
   localStorage.setItem("login 2" , input2)
   window.location = "index2.html"
}
}