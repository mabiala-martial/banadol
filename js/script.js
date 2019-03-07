$(function(){
	$('.menu').on('click',function(){
		$('nav').toggleClass('nav_active');
		return false;
	});

});
/*
███████╗███████╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗    ███╗   ███╗██╗███████╗███████╗██╗ ██████╗ ███╗   ██╗███████╗
██╔════╝██╔════╝██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║    ████╗ ████║██║██╔════╝██╔════╝██║██╔═══██╗████╗  ██║██╔════╝
███████╗█████╗  ██║        ██║   ██║██║   ██║██╔██╗ ██║    ██╔████╔██║██║███████╗███████╗██║██║   ██║██╔██╗ ██║███████╗
╚════██║██╔══╝  ██║        ██║   ██║██║   ██║██║╚██╗██║    ██║╚██╔╝██║██║╚════██║╚════██║██║██║   ██║██║╚██╗██║╚════██║
███████║███████╗╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║    ██║ ╚═╝ ██║██║███████║███████║██║╚██████╔╝██║ ╚████║███████║
╚══════╝╚══════╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝    ╚═╝     ╚═╝╚═╝╚══════╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝*/
let menubtns = document.querySelectorAll("[id^=tab_]") /*je récupère tous les éléments dont l'id commence par tab_*/
menubtns.forEach(e=>{
	e.addEventListener("click",showMissions)
});
function showMissions(evt){
	
	let cible = evt.target.parentElement.id.split("_")[1]
	$('[id^=mission-]').addClass('mission_inactive').removeClass('mision_active');
	$("#"+cible).toggleClass("mission_active")
	$("#"+cible).toggleClass("mission_inactive")
	return false;
};
	$('#missions_banadol li').on('click',function(){
		$('#missions_banadol li').removeClass('active-color');
		$(this).toggleClass('active-color');

		return false;
	});
