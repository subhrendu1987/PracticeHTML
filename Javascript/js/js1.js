function date(){
 	var d= new Date();
 	document.getElementById("time").innerHTML = d + "<br>" + "Click to update time.";
	}
function CloseMe(){
	x=document.getElementById("demo");
	x.style.visibility="hidden";
}
function OpenMe()
{
	x=document.getElementById("demo");
	x.style.visibility="visible";
	x.style.display="block";
}
function displayId(element){
	console.log(element.id);
}
function SP(element){
	document.getElementById("message").innerHTML= element.alt;
}

function SP2(element){
	document.getElementById("message").innerHTML = 'Hover over an image';
}
 