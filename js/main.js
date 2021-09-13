$(document).ready(incial);
var vinera = [];
function incial(){
	$("#submit").on("click", getForm);
	$("#Mvinos").on("click", mostarVinos);
}


function getForm(e){
	e.preventDefault();
	let info = $("#form").serializeArray(); 
	vinera.push(info);
}

function mostarVinos(){
	console.log(vinera);
}