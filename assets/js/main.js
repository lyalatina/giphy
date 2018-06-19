$(document).ready(function() {
	var dibujarGifts = function(data){
		var gif = "";
		var url = "";
		data.forEach(function(element){
			gif = element.images.downsized_large.url;
			url = element.bitly_gif_url;
			$("#elementos").append(armarTemplate(gif, url));
		});
	}
  var armarTemplate = function(gif, url){
		var t = "<div class='elemento'><img src='" + gif + "'/><a href='" + url + "'>Ver más</a></div>";
		console.log(t);
		return t;
	}
 var ajaxGif = function(gif){
		$.ajax({
			url : 'http://api.giphy.com/v1/gifs/search',
			type : 'GET',
			datatype : 'json',
			data : {
				q : gif,
				api_key : 'dc6zaTOxFJmzC'
			}
		})
      .done(function(response){
        console.log(response);
        dibujarGifts(response.data);

      })
      .fail(function(){
        console.log("error");
      })
  }
  $("#buscar-gif").click(function(event){
    console.log("Entro");
    $("#elementos").empty();
    var gif = $("#gif-text").val();
    ajaxGif(gif);
  })
});





/*
window.onload = (() => {
  const btnBuscar = document.getElementById('buscar-gif');
  btnBuscar.addEventListener('click', (evento) => {
    return obtenerGif;
  });

});


    function obtenerGif() {
      // fetch retorna una promesa
      fetch(`http://api.giphy.com/v1/gifs/search&apikey=kMbv9KosqONmg0w3npoeeYJ1J1ZbL1re`) //Recibe la URL donde se va a hacer la consulta
      .then((response) => { //Este then es de la promesa del fetch
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("no hay gif");
        }
      }).then((gifJson) => { //recibimos el JSON en este punto
        const receptorGif = document.getElementById('gifReceptor');
        gifJson.forEach((jsonElement)=>{
          jsonElement.forEach((gif)=>{
            const gifImg=document.createElement('img');
            gifImg.src=gif;
            receptorGif.appendChild(receptorGif);
            const giphy = gifJson.data[i].images.fixed_width.url;
            let res = giphy.replace("media1", "i").replace("media2", "i").replace("media3", "i").replace("media0", "i");

          });
        });


        
*/

