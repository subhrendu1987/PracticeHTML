function CloseMe(){
	x=document.getElementById("demo");
	x.style.display="none";
}
function OpenMe()
{
	x=document.getElementById("demo");
	x.style.display="block";
}
function displayId(element){
	console.log(element.id);
}
function SP(element){
	document.getElementById("message").innerHTML= element.alt;
}