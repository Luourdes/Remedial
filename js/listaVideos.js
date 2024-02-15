
var videos=[
    {titulo: 'Video 1',descripcion: 'Descripción video 1', url: 'https://www.youtube.com/embed/bpOSxM0rNPM?si=cti86NvwOq8aZpno'},
    {titulo: 'Video 2',descripcion: 'Descripción video 2', url: 'https://www.youtube.com/embed/-bzuKjvRxtQ?si=ZcFGnG6-ClwTIBLz'},
    {titulo: 'Video 3',descripcion: 'Descripción video 3', url: 'https://www.youtube.com/embed/VQH8ZTgna3Q?si=XujuI8nqhPPTVw5V'},
    {titulo: 'Video 4',descripcion: 'Descripción video 4', url: 'https://www.youtube.com/embed/Jzi9ZyvUlDI?si=-6dbPoYYM82sulsQ'}
    ];
    var listaVideos=document.getElementById('MostrarListavideos');
    
    mostrarListavideos(videos);
    
    function mostrarListavideos(videosBuscados) {
        listaVideos.innerHTML=' ';
    
        videosBuscados.forEach(indiceVideo=> {
            var fila=document.createElement('div');
            var col1UrlVideo=document.createElement('div') ;
            var iframeVideo=document.createElement('iFrame');
            fila.setAttribute('class','row');
            col1UrlVideo.setAttribute('class','col');
            iframeVideo.setAttribute('src',indiceVideo.url);
            iframeVideo.setAttribute('whith','400px');
            iframeVideo.setAttribute('heigh','400px');
            iframeVideo.setAttribute('frameborder','0');
            col1UrlVideo.appendChild(iframeVideo);
            fila.appendChild(col1UrlVideo);
            // crear div para el titulo y la descripcion  del video (columna2)
            var col2TituloVideo=document.createElement('div');
            var h4TituloVideo=document.createElement('h4');
            var h6DescripcionVideo=document.createElement('h6');
    
            col2TituloVideo.setAttribute('class','col');
            h4TituloVideo.textContent=indiceVideo.titulo;
            h6DescripcionVideo.textContent=indiceVideo.descripcion;
    
            col2TituloVideo.appendChild(h4TituloVideo);
            col2TituloVideo.appendChild(h6DescripcionVideo);
            fila.appendChild(col2TituloVideo);
    
            //crear el div paar el boton  columna 3 
    
            var col3BotonVideo=document.createElement('div');
            var botonVideo=document.createElement('button');
            col3BotonVideo.setAttribute('class','col');
            botonVideo.setAttribute('class','btn btn-outline-primary')
            botonVideo.innerHTML='';
            col3BotonVideo.appendChild(botonVideo);
            fila.appendChild(col3BotonVideo);
    
            listaVideos.appendChild(fila);
        });   
    }
    function buscarVideos() {
        var textoVideo=document.getElementById('txtBuscar').value;
       // alert('texto buscado' + textoVideo);
       var videosBuscados=videos.filter(
        indiceVideo =>{
            return indiceVideo.titulo.includes(textoVideo);
           }
       );
       mostrarListavideos(videosBuscados);
       }
