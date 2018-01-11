
src="https://code.jquery.com/jquery-3.2.1.min.js";


log = function(){
document.getElementById("container-reg").style.display = "none";
$('#main').addClass('blur');
document.getElementById("container-log").style.display = "flex";
}
reg = function(){
document.getElementById("container-log").style.display = "none";
document.getElementById("container-reg").style.display = "flex";
}

back = function(){
document.getElementById("container-reg").style.display = "none";
document.getElementById("container-log").style.display = "flex";
}