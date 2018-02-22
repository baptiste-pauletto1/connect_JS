(function ()  {
    "use strict";

    let erreurCritique =
        "Une erreur critique vient de se produire," + //Spreading mail adress in order to provide bots from getting it.
        "veuillez contacter l'administrateur à cette adresse mail : baptistep." + ((true) ? 'con' : "") + "tact@gm" +"a"+"il"+".co"+"m";

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
            $("body").html(erreurCritique);
        });

        $('#form-connexion').submit(function () {
           $.ajax({
               url: $(this).attr('action'),
               method: $(this).attr('method'),
               data: $(this).serialize()
           })
               .done(function () {
                   window.location.reload();
               })
               .fail(function () {
                   $("body").html(erreurCritique);
               });
            return false;
        });
        $('#form-deconnexion').submit(function () {
            $.ajax({
                url: $(this).attr('action'),
                method: $(this).attr('method'),
                data: $(this).serialize(),
            })
                .done(function () {
                    window.location.reload();
                })
                .fail(function () {
                    $("body").html(erreurCritique);
                });
            return false;
        });




    })
}) ();