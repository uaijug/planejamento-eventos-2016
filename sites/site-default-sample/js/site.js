
sitefunctions =  function () {};


sitefunctions.load = function (json){
	sitefunctions.carregarDadosEventos(json.site);
};

sitefunctions.carregarDadosEventos = function (site) {


	$('#nome-evento').html(site.nome);
	$('#descricao-evento').html(site.descricao);
	$('#local-evento').html(site.local);
	$('#horario-evento').html(site.horarioinicio);
	$('#data-evento').html(site.data);


	 
	var divbaaner = "";

	if (site.banners.length > 0){

		$.each(site.banners, function( index, value ) {
  			if (index == 0) {
  				divbaaner += sitefunctions.criaBannerAtivo (value);
  			}else {
  				divbaaner += sitefunctions.criaBannerComum  (value);
  			}
		});

	}else {
		divbaaner += sitefunctions.criaBannerPadrao();
	}

	$('#banners-evento').html(divbaaner);

	var divPalestrantes = "";

	if (site.palestrantes.length > 0){

		$.each(site.palestrantes, function( index, value ) {
  			if (index == 0) {
  				divPalestrantes += sitefunctions.criarNovoPalestrante (value);
  			}else {
  				divPalestrantes += sitefunctions.criarNovoPalestrante  (value);
  			}
		});

	}

	
	$('#div-palestrantes').html(divPalestrantes);


	var divPalestras = "";

	if (site.palestras.length > 0){

		$.each(site.palestras, function( index, value ) {
  			if (index == 0) {
  				divPalestras += sitefunctions.criaPalestraAtiva (value);
  			}else {
  				divPalestras += sitefunctions.criaPalestraComum  (value);
  			}
		});

	}

	
	$('#div-palestras').html(divPalestras);

	var divPatrocinadores = "";

	if (site.patrocinadores.length > 0){

		$.each(site.patrocinadores, function( index, value ) {
  			if (index == 0) {
  				divPatrocinadores += sitefunctions.criaPatrocinador (value);
  			}else {
  				divPatrocinadores += sitefunctions.criaPatrocinador  (value);
  			}
		});

	}

	
	$('#div-patrocinadores').html(divPatrocinadores);
}



sitefunctions.criaBannerPadrao = function (){
	var jsonbanner = {};
	jsonbanner.enderecobanner = 'images/slider/default.jpg';
	jsonbanner.descricaobanner = 'Evento';
	return criaBannerComum(jsonbanner);
}

sitefunctions.criaBannerComum = function (jsonbanner , htmltag) {

	var div = '';
	div += '<div class="item">';
	div += '	<img class="img-responsive" src="'+jsonbanner.enderecobanner+'" alt="slider">';
	div += '	<div class="carousel-caption">';
	div += '		<h2>'+jsonbanner.descricaobanner+'</h2>';
	div += '	</div>';
	div += '</div>';
	
	return div;
};


sitefunctions.criaBannerAtivo = function (jsonbanner , htmltag) {

	var div = '';
	div += '<div class="item active">';
	div += '	<img class="img-responsive" src="'+jsonbanner.enderecobanner+'" alt="slider">';
	div += '	<div class="carousel-caption">';
	div += '		<h2>'+jsonbanner.descricaobanner+'</h2>';
	div += '	</div>';
	div += '</div>';
		
	return div;

};

sitefunctions.criarNovoPalestrante = function (palestrante) {

	var div = '';
	div += '<div class="col-sm-4">';
	div += '	<div class="single-event">';
	div += '			<img class="img-responsive imagemPalestrante" src="'+palestrante.enderecofoto+'" alt="event-image">';
	div += '		<h3>'+palestrante.nome+'</h3>';
	div += '		<h3>'+palestrante.twitter+'</h3>';
	div += '		<h5>'+palestrante.minicurriculo+'</h5>';
	div += '	</div>';
	div += '</div>';

	return div;
};

sitefunctions.criaPalestraAtiva = function (palestra) {

	var div = '';
	div += '<div class="item active">';
	div += '	<h3 class = "nomePalestra">' + palestra.nomePalestra +' - ' + palestra.dataPalestra +' - '+ palestra.horaPalestra+'</h3>';
	div += '	<h5 class = "nomePalestra">' + palestra.descricaoPalestra +'</h5>';
	div += '</div>';

	return div;
};

sitefunctions.criaPalestraComum = function (palestra) {

	var div = '';
	div += '<div class="item">';
	div += '	<h3 class = "nomePalestra">' + palestra.nomePalestra +' - ' + palestra.dataPalestra +' - '+ palestra.horaPalestra+'</h3>';
	div += '	<h5 class = "nomePalestra">' + palestra.descricaoPalestra +'</h5>';
	div += '</div>';

	return div;
};

sitefunctions.criaPatrocinador = function (patrocinador) {

	var div = '';
	div += '<li >';
	div += '	<a href="'+patrocinador.sitePatrocinador+'">';
	div += '		<img class="img-responsive imagemPatrocinador" src="'+patrocinador.enderecoLogoPatrocinador+'" alt="'+patrocinador.nomePatrocinador+'">';
	div += '</a>';
	div += '</li>';

	return div;
};