$(document).ready(function(){


//var saisi=$('#entreprise').val()

$('button').click(function(){
	console.log('je suis la fonction')

$.ajax({
  url:"https://entreprise.data.gouv.fr/api/sirene/v1/full_text/afpa",
  dataType:"json",
              success:function(data){
              	//console.log(data)	
              	var nom = (data.etablissement[0].nom_raison_sociale)
              	var latitude = (data.etablissement[0].latitude )
              	var longitude = (data.etablissement[0].longitude )
              	var siren = (data.etablissement[0].siren )
              	var siret = (data.etablissement[0].siret )

                $("#nom").empty();
              	$("#nom").text(nom )
              	$("#siren").append(siren)
              	$("#siret").append(siret)
              	$("#longitude").append(longitude)
              	$("#latitude").append(latitude)

               
             $('#map').append('<iframe src="https://maps.google.com/maps?q='+latitude+","+longitude+'&hl=en&z=14&amp;output=embed"width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>')

              },
              error:function(xhr){
              	console.log(xhr.status)
              }

})
return false;

})

})