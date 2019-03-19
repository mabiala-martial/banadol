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

/*

███████╗███████╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗    ██╗███╗   ██╗███████╗ ██████╗██████╗ ██╗██████╗ ████████╗██╗ ██████╗ ███╗   ██╗
██╔════╝██╔════╝██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║    ██║████╗  ██║██╔════╝██╔════╝██╔══██╗██║██╔══██╗╚══██╔══╝██║██╔═══██╗████╗  ██║
███████╗█████╗  ██║        ██║   ██║██║   ██║██╔██╗ ██║    ██║██╔██╗ ██║███████╗██║     ██████╔╝██║██████╔╝   ██║   ██║██║   ██║██╔██╗ ██║
╚════██║██╔══╝  ██║        ██║   ██║██║   ██║██║╚██╗██║    ██║██║╚██╗██║╚════██║██║     ██╔══██╗██║██╔═══╝    ██║   ██║██║   ██║██║╚██╗██║
███████║███████╗╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║    ██║██║ ╚████║███████║╚██████╗██║  ██║██║██║        ██║   ██║╚██████╔╝██║ ╚████║
╚══════╝╚══════╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝    ╚═╝╚═╝  ╚═══╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝*/
  
  $('#nombre').on('change',function(){
  	var nbEnfants = $('#nombre').val();
  	$('#renseignements_famille #enfants_container').html('');
  	for(i=1;i<=nbEnfants;i++){
  		var contenu = '<div><h4 class="enfants">Enfant n°'+i+'</h4><ul><li class="champs"><h4>Prénom (s)</h4><input type="text" class="prenom" name="" placeholder=""></li><li class="champs"><h4>Nom (s) de famille</h4><input type="text" class="name" name="" placeholder=""></li><li class="champs"><h4>Date de naissance</h4><input type="date" class="naissance" name="" placeholder=""></li><li class="champs"><h4>Commune de naissance</h4><input type="text" name="" placeholder=""></li><li class="champs"><h4>Département ou pays de naissance</h4><input type="text" class="departement" name="" placeholder=""></li><li class="champs"><h4>Pays de résidence</h4><input type="text" name="" placeholder=""></li>      </ul></div>';
  		$('#renseignements_famille #enfants_container').append(contenu);
  	}
  });

  $('input:checkbox').on('change',function(){
  		var parentM = $('.pere').val();
  		$('#autres_renseignements #cont_pere').html('');
  		var contenu = '<div>'
  		console.log('ght'); 
  });


//var boutton = document.getElementById('nombre');
//boutton.addEventListener('change',function(){
// 	// var nombre = document.getElementById('nombre')
// 	// var newUl = document.createElement('ul');
// 	// var parent = document.querySelector('div');
// 	// var frere = document.querySelector('h4');
// 	// parent.insertbefore(newUl,frere);
// 	// for(i=0;i<nombre;i++){
// 	// 	var newLi = document.createElement('li');
// 	// 	var newH4 = document.createElement('h4');
// 	};
//});