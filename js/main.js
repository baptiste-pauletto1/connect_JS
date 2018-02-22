(function ()  {
    "use strict";

    let css_visible = {
        'display' : 'inline-block'
    };



    $(() => {
        $.ajax({
            url:'/json/est_connecte.php'
        }).done(function (data) {
            if(data.est_connecte) {
                $('#form-deconnexion').show();
            } else {
                $('#form-connexion').show();
            }
        }).fail(function () {
            alert('aie aie aie ! on se co')
        });

        $('#form-connexion').submit(function () {
           $.ajax({
               url: $(this).attr('action'),
               method: $(this).attr('method'),
               data: $(this).serialize(),
           })
               .done(function (data) {
                   if(data.est_connecte) {
                       $('#form-deconnexion').show();
                   }
               })
               .fail(function () {
                   alert('aie aie aie ! on se co')
               });
            return false;
        });
        $('#form-deconnexion').submit(function () {
            $.ajax({
                url: $(this).attr('action'),
                method: $(this).attr('method'),
                data: $(this).serialize(),

            })
                .done(function (data) {
                    if(data.est_connecte) {

                        $('#form-connexion').show();

                    }
                })
                .fail(function () {
                    alert('Aie aie aie ! on déco pas');
                });
            return false;
        });




    })
}) ();