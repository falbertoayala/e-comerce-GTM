$(document).ready(function() {
    var TmpPath;
    // Escuchamos el evento 'change' del input donde cargamos el archivo
    $(document).on('change', 'input[type=file]', function(e) {
      // Obtenemos la ruta temporal mediante el evento
      TmpPath = URL.createObjectURL(e.target.files[0]);
      // Mostramos la ruta temporal
      //$('span').html(TmpPath);
      $('img').attr('src', TmpPath);
    });

    $(document).on('click', '#submit', function() {
        //var file = $('#customFile').val();
        var alt = $('#alt').val();
        var title = $('#title').val();
        var section = $('#section');
       
        let html= `<div class="alert alert-success" role="alert"><img src="${TmpPath}" alt="${alt}"  title="${title}" class="w-100"></div>`
        section.html(html);
    });
  });

  

